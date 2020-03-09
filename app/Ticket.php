<?php namespace App;

use DB;
use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\hasMany;
use Illuminate\Database\Eloquent\Relations\hasOne;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Support\Arr;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Ticket
 *
 * @property integer $id
 * @property string $subject
 * @property integer $user_id
 * @property Carbon $closed_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property integer $closed_by
 * @property integer $assigned_to
 * @property-read User $user
 * @property-read Collection|Tag[] $tags
 * @property-read Collection|Reply[] $replies
 * @method static \Illuminate\Database\Query\Builder|Ticket filterByTag($tag = null)
 * @method static \Illuminate\Database\Query\Builder|Ticket filterByAssignee($agentId)
 * @method static \Illuminate\Database\Query\Builder|Ticket filterByRequester($userId)
 * @method static \Illuminate\Database\Query\Builder|Ticket compact()
 * @mixin Eloquent
 * @property-read mixed $status
 * @property-read mixed $uploads_count
 * @property-read Collection|Tag[] $categories
 * @property-read Collection|Reply[] $latest_replies
 * @property-read Collection|Reply[] $notes
 * @property-read Reply $latest_reply
 * @property-read mixed $updated_at_formatted
 * @property-read int $attachments_count
 * @property-read Reply $latest_creator_reply
 * @property-read Reply $repliesCount
 */
class Ticket extends Model
{
    use Searchable;

    /**
     * @return array
     */
    public function toSearchableArray()
    {
        $array = $this->toArray();

        $array['replies'] = $this->replies->pluck('body');
        $array['user'] = $this->user ? $this->user->toSearchableArray() : [];

        if (config('scout.driver') === 'tntsearch') {
            $array['replies'] = $array['replies']->implode(',');
            $array['user'] = Arr::get($array, 'user.email');
        }

        return $array;
    }

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id', 'animated'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = ['id' => 'integer', 'user_id' => 'integer', 'assigned_to' => 'integer'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'deleted_at', 'closed_at'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['updated_at_formatted'];

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo
     */
    public function assignee()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    /**
     * Tags that are attached to ticket.
     *
     * @return MorphToMany
     */
    public function tags()
    {
        return $this->morphToMany('App\Tag', 'taggable');
    }

    /**
     * Folders ticket is attached to.
     *
     * @return MorphToMany
     */
    public function categories()
    {
        return $this->morphToMany('App\Tag', 'taggable')->where('tags.type', 'category');
    }

    /**
     * One to many relationship with Reply model.
     *
     * @return hasMany
     */
    public function replies()
    {
        return $this->hasMany('App\Reply')->orderBy('created_at', 'desc');
    }

    /**
     * Get count of ticket replies without loading all replies.
     *
     * @return HasOne;
     */
    public function repliesCount()
    {
        return $this->hasOne(Reply::class)
            ->selectRaw('ticket_id, count(*) as aggregate')
            ->groupBy('ticket_id');
    }

    /**
     * One to many relationship with Reply model. Returns only 5 latest replies.
     *
     * @return hasMany
     */
    public function latest_replies()
    {
        return $this->hasMany('App\Reply')->where('type', 'replies')->orderBy('created_at', 'desc')->limit(5);
    }

    /**
     * Get latest reply for ticket.
     *
     * @return hasOne
     */
    public function latest_reply()
    {
        return $this->hasOne('App\Reply')->where('type', 'replies')->orderBy('created_at', 'desc');
    }

    /**
     * One to many relationship with Reply model (filtered to notes only).
     *
     * @return hasMany
     */
    public function notes()
    {
        return $this->hasMany('App\Reply')->orderBy('created_at', 'desc')->where('type', 'notes');
    }

    public function getUpdatedAtFormattedAttribute()
    {
        if (isset($this->attributes['updated_at'])) {
            return (new Carbon($this->attributes['updated_at']))->diffForHumans();
        }
    }

    /**
     * @param $query
     * @return Builder|Ticket
     */
    public function basicSearch($query)
    {
        return $this->where('subject', 'LIKE', "%$query%")
            ->orWhereHas('replies', function(Builder $q) use ($query) {
                return $q->where('type', 'replies')->where('body', 'LIKE', "%$query%");
            });
    }

    /**
     * Get ticket status.
     *
     * @return string|null
     */
    public function getStatusAttribute()
    {
        //if tags are already loaded, use those records to avoid extra db query
        if ($this->relationLoaded('tags')) {
            $tag = array_first($this->tags, function($tag) {
                return $tag['type'] === 'status';
            });

            //otherwise fetch status tag from db
        } else {
            $tag = $this->load('tags');
            return $this->getStatusAttribute();
        }

        return $tag ? $tag['name'] : null;
    }

    /**
     * Get number of uploads that are attached to this ticket.
     *
     * @param mixed $value
     * @return int
     */
    public function getUploadsCountAttribute($value)
    {
        if (is_numeric($value)) return (integer) $value;

        return DB::table('file_entry_models')->whereIn('model_id', function (Builder $query)
            {
                return $query
                    ->from('replies')
                    ->where('replies.ticket_id', $this->id)
                    ->select('id');
            })
            ->where('model_type', Reply::class)
            ->count();
    }

    /**
     * Apply given filter to query.
     *
     * @param Builder $q
     * @param string|integer $tag
     * @return Builder
     */
    public function scopeFilterByTag($q, $tag)
    {
        return $q->whereHas('tags', function(Builder $query) use($tag) {
            $query->where('tag_id', (int) $tag);
        });
    }

    /**
     * Filter tickets by given agent ID.
     *
     * @param Builder $q
     * @param string|int $agentId
     * @return Builder
     */
    public function scopeFilterByAssignee($q, $agentId)
    {
        if ( ! $agentId) return $q;

        return $q->where('assigned_to', (int) $agentId);
    }

    /**
     * Filter tickets by given user ID.
     *
     * @param Builder $q
     * @param int|string $userId
     * @return Builder
     */
    public function scopeFilterByRequester($q, $userId)
    {
        if ( ! $userId) return $q;

        return $q->where('tickets.user_id', (int) $userId);
    }

    /**
     * Return only minimal data for each model.
     *
     * @param Builder $query
     * @param int $length
     * @return mixed
     */
    public function scopeCompact($query, $length = 200)
    {
        return $query->with(['latest_reply' => function($q) use($length) {
            return $q->select('id', 'ticket_id', DB::raw("SUBSTR(body, 1, $length) as body"));
        }]);
    }
}
