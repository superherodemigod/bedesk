<?php namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Operator
 *
 * @property integer $id
 * @property string $name
 * @method static \Illuminate\Database\Query\Builder|\App\Operator whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Operator whereName($value)
 * @mixin \Eloquent
 * @property string $display_name
 * @property string $placeholder
 * @property string $value_type
 * @property string $value_options
 * @method static \Illuminate\Database\Query\Builder|\App\Action whereDisplayName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Action wherePlaceholder($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Action whereValueType($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Action whereValueOptions($value)
 * @property int $aborts_cycle
 * @property int $updates_ticket
 * @property array $input_config
 * @method static \Illuminate\Database\Query\Builder|\App\Action whereAbortsCycle($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Action whereUpdatesTicket($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Action whereInputConfig($value)
 */
class Action extends Model
{
    protected $guarded = ['id'];

    protected $casts = ['id' => 'integer', 'aborts_cycle' => 'integer', 'updates_ticket' => 'integer'];

    public $timestamps  = false;

    /**
     * Getter for input_config attribute.
     *
     * @param string $value
     * @return array
     */
    public function getInputConfigAttribute($value)
    {
        return json_decode($value);
    }
}
