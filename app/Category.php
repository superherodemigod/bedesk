<?php namespace App;

use App\Traits\OrdersByPosition;
use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Category
 *
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property integer $position
 * @method static \Illuminate\Database\Query\Builder|Category orderByPosition()
 * @mixin Eloquent
 * @property bool $default
 * @method static \Illuminate\Database\Query\Builder|Category whereDefault($value)
 * @property int $parent_id
 * @property bool $hidden
 * @property-read Collection|Article[] $articles
 * @property-read Collection|Category[] $children
 * @property-read Category $parent
 * @method static \Illuminate\Database\Query\Builder|Category rootOnly()
 */
class Category extends Model
{
    use OrdersByPosition;

    protected $guarded = ['id'];

    protected $casts = [
        'id'        => 'integer',
        'default'   => 'boolean',
        'parent_id' => 'integer',
        'position'  => 'integer',
        'hidden'    => 'boolean',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = ['pivot'];

    /**
     * Child categories.
     *
     * @return HasMany
     */
    public function children()
    {
        return $this->hasMany('App\Category', 'parent_id')->orderByPosition();
    }

    /**
     * Parent category.
     *
     * @return BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo('App\Category', 'parent_id');
    }

    /**
     * Help center articles attached to this category.
     */
    public function articles()
    {
        return $this->belongsToMany('App\Article', 'category_article')
            ->orderByPosition()
            ->where('draft', 0);
    }

    /**
     * Filter out child categories and only return root ones.
     *
     * @param $query
     * @return Builder
     */
    public function scopeRootOnly($query) {
        return $query->whereNull('parent_id');
    }
}
