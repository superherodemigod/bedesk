<?php namespace App\Services\Triggers;

use DB;
use App\Operator;
use App\Trigger;
use Illuminate\Database\Eloquent\Collection;

class TriggerRepository {

    /**
     * Trigger model.
     *
     * @var Trigger
     */
    private $trigger;

    public function __construct(Trigger $trigger, Operator $operator)
    {
        $this->trigger = $trigger;
        $this->operator = $operator;
    }

    /**
     * Fetch specified trigger.
     *
     * @param integer $id
     * @return Trigger
     */
    public function findOrFail($id)
    {
        $trigger = $this->trigger->with(['conditions.operators', 'actions'])->findOrFail($id);

        $trigger = $this->attachSelectedOperator([$trigger])[0];

        return $trigger;
    }

    /**
     * Return all existing triggers.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all()
    {
        $triggers = $this->trigger->with('conditions', 'actions')->get();

        return $this->attachSelectedOperator($triggers);
    }

    /**
     * Paginate all triggers.
     *
     * @param array $params
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginate($params)
    {
        $dbQuery = $this->trigger->newQuery();

        if (isset($params['query'])) {
            $dbQuery->where('name', 'like', '%'.$params['query'].'%')
                ->orWhere('description', 'like', '%'.$params['query'].'%');
        }

        return $dbQuery->paginate(isset($params['per_page']) ? $params['per_page'] : null);
    }

    /**
     * Create a new trigger.
     *
     * @param array $params
     * @return Trigger
     */
    public function create($params)
    {
        $trigger = $this->trigger->create([
            'name'        => $params['name'],
            'description' => isset($params['description']) ? $params['description'] : null,
            'times_fired'  => isset($params['times_fired']) ? $params['times_fired'] : 0,
            'created_at'  => isset($params['created']) ? $params['created'] : null,
        ]);

        //attach conditions to trigger
        //attach values to conditions
        $conditions = [];
        foreach($params['conditions'] as $data) {
            $conditions[$data['condition_id']] = [
                'condition_value' => $data['value'],
                'match_type' => $data['matchType'],
                'operator_id' => $data['operator_id'],
            ];
        }

        $trigger->conditions()->attach($conditions);

        //attach actions to trigger
        //attach values to actions
        $actions = [];
        foreach($params['actions'] as $data) {
            $actions[$data['action_id']] = [
                'action_value' => json_encode($data['value']),
            ];
        }

        $trigger->actions()->attach($actions);

        return $trigger;
    }

    /**
     * Update trigger matching specified id.
     *
     * @param integer $id
     * @param array $params
     *
     * @return Trigger
     */
    public function update($id, $params)
    {
        $trigger = $this->findOrFail($id);

        //prepare params
        $params['times_fired'] = $trigger->times_fired;
        $params['created_at'] = $trigger->created_at;

        //delete old trigger
        $this->delete([$id]);

        //create new trigger
        return $this->create($params);
    }

    /**
     * Delete triggers matching specified ids.
     *
     * @param integer[] $ids
     * @return integer
     */
    public function delete($ids)
    {
        DB::table('trigger_condition')->whereIn('trigger_id', $ids)->delete();
        DB::table('trigger_action')->whereIn('trigger_id', $ids)->delete();

        return $this->trigger->whereIn('id', $ids)->delete();
    }

    /**
     * Attach selected operator to each of specified triggers conditions
     *
     * @param array $triggers
     * @return array|Collection
     */
    private function attachSelectedOperator($triggers)
    {
        $operatorsIds = collect();

        foreach($triggers as $trigger) {
            $operatorsIds = $operatorsIds->merge($trigger->conditions->map(function($condition) {
                return $condition->pivot->operator_id;
            }));
        }

        $operators = $this->operator->whereIn('id', $operatorsIds)->get();

        foreach($triggers as $trigger) {
            $trigger->conditions->each(function($condition) use($operators) {
                $condition->selected_operator = $operators->find($condition->pivot->operator_id);
            });
        }

        return $triggers;
    }

}