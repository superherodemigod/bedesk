<?php namespace App;

use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\EnvatoPurchaseCode
 *
 * @property int $id
 * @property string $code
 * @property int $user_id
 * @property string $item_name
 * @property string $item_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property-read User $user
 * @mixin Eloquent
 * @property string $url
 * @property string $image
 * @property string $supported_until
 */
class PurchaseCode extends Model
{
    protected $guarded = ['id'];
    protected $casts = ['id' => 'integer', 'user_id' => 'integer'];

    /**
     * Many to one relationship with user model.
     *
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getSupportedUntilAttribute($value)
    {
        return $value ? $this->serializeDate(Carbon::parse($value)) : null;
    }
}
