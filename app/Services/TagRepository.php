<?php namespace App\Services;

use Common\Database\Paginator;
use DB;
use Auth;
use App\Tag;
use App\Ticket;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Illuminate\Support\Arr;

class TagRepository {

    /**
     * Tag model instance.
     *
     * @var Tag
     */
    private $tag;

    /**
     * Ticket model instance.
     *
     * @var Ticket
     */
    private $ticket;

    /**
     * Create new TagRepository instance.
     *
     * @param Tag $tag
     * @param Ticket $ticket
     */
    public function __construct(Tag $tag, Ticket $ticket)
    {
        $this->tag = $tag;
        $this->ticket = $ticket;
    }

    /**
     * Find tag by id or throw error.
     *
     * @param integer $id
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     *
     * @return Tag
     */
    public function findOrFail($id)
    {
        return $this->tag->findOrFail($id);
    }

    /**
     * Return single or multiple tags matching given name(s).
     *
     * @param $name
     * @return Tag|Collection
     */
    public function findByName($name)
    {
        if (is_array($name)) {
            return $this->tag->whereIn('name', $name)->get();
        } else {
            return $this->tag->where('name', $name)->first();
        }
    }

    /**
     * Get all tags with category/status type and tickets count for each tag.
     *
     * @return Collection
     */
    public function getStatusAndCategoryTags()
    {
        $statusTags = $this->tag->where('type', 'status')->withCount('tickets')->get();

        //for category tags, only count tickets that are "open" or "pending"
        $categoryTags = $this->tag->where('type', 'category')->withCount(['tickets' => function($q) {
            $q->whereHas('tags', function($q) {
                $q->where('name', 'open')->orWhere('name', 'pending');
            });
        }])->with('categories')->get();

        $collection = $statusTags->merge($categoryTags);

        if (Auth::check()) {
            $collection = $collection->add($this->getMineTicketsTag());
        }

        return $collection;
    }

    /**
     * Get tag for 'mine' tickets in agents mailbox.
     *
     * @return array
     */
    private function getMineTicketsTag() {
        return [
            'id' => 'mine',
            'name' => 'mine',
            'type' => 'status',
            'display_name' => 'Mine',
            'tickets_count' => $this->ticket->where('assigned_to', Auth::user()->id)->count(),
        ];
    }

    /**
     * Paginate all tags using given params.
     *
     * @param array $params
     * @return LengthAwarePaginator
     */
    public function paginateTags($params)
    {
        $paginator = (new Paginator($this->tag));
        $skipStatus = isset($params['skip_status_tags']) ? $params['skip_status_tags'] : null;

        // don't show category tags in "tags" page in admin area
        // as they will be shown in "ticket categories" page.
        $skipCategory = Arr::get($params, 'type') !== 'category';

        if (isset($params['type'])) {
            $paginator->where('type', $params['type']);
        }

        if ($skipStatus) {
            $paginator->where('type', '!=', 'status');
        }

        if ($skipCategory) {
            $paginator->where('type', '!=', 'category');
        }

        return $paginator->paginate($params);
    }

    /**
     * Find tags of specified type.
     *
     * @param string $type
     * @param Model $taggable
     *
     * @return Collection
     */
    public function getByType($type, $taggable = null)
    {
        if ($taggable) {
            return $taggable->tags()->where('type', $type)->get();
        } else {
            return $this->tag->where('type', $type)->get();
        }
    }

    /**
     * Return tags matching given names. Create any that does not exist yet.
     *
     * @param array  $tagNames
     * @param string $type
     *
     * @return Collection
     */
    public function getByNamesOrCreate($tagNames, $type = 'custom')
    {
        //fetch existing tags
        $existing = $this->findByName($tagNames);

        //if all tags we need already exist, return them
        if (count($existing) === count($tagNames)) return $existing;

        //get tag names that we need to create
        $toCreate = array_diff($tagNames, $existing->pluck('name')->toArray());

        //create tags
        $this->tag->insert(array_map(function($tagName) use($type) {
            return ['name' => $tagName, 'type' => $type];
        }, $toCreate));

        //return all tags
        return $this->findByName($tagNames);
    }

    /**
     * Attach tag matching given name to ticketID.
     * 
     * @param Ticket $ticket
     * @param string $tagName
     */
    public function attachByName(Ticket $ticket, $tagName)
    {
        $tag = $this->findByName($tagName);

        if ( ! $tag) return;

        $this->attachById($ticket, $tag->id);
    }

    /**
     * Attach specified tags to given ticket.
     *
     * @param Ticket $ticket
     * @param array|int $tagIds
     */
    public function attachById(Ticket $ticket, $tagIds)
    {
        if ( ! is_array($tagIds)) $tagIds = [$tagIds];

        $alreadyAttached = $ticket->tags->pluck('id')->toArray();

        $ticket->tags()->attach(
            array_diff($tagIds, $alreadyAttached)
        );
    }

    /**
     * Detach specified tags from all taggables or only specified one.
     *
     * @param array|int $tagIds
     * @param Model|null $taggable
     */
    public function detachById($tagIds, Model $taggable = null)
    {
        if ( ! is_array($tagIds)) $tagIds = [$tagIds];

        $query = DB::table('taggables')->whereIn('tag_id', $tagIds);

        if ($taggable) {
            $query->where('taggable_id', $taggable->id)
                ->where('taggable_type', get_class($taggable));
        }

        $query->delete();
    }

    /**
     * Create a new tag.
     *
     * @param array $data
     * @return Tag
     */
    public function create($data)
    {
        $tag = $this->tag->forceCreate([
            'name' => $data['name'],
            'type' => isset($data['type']) ? $data['type'] : 'custom',
            'display_name' => isset($data['display_name']) ? $data['display_name'] : $data['name'],
        ]);

        $this->syncTaggables($tag, Arr::get($data, 'taggables'));

        return $tag;
    }

    /**
     * Update existing tag.
     *
     * @param Tag   $tag
     * @param array $data
     * @return Tag
     */
    public function update(Tag $tag, $data)
    {
        $tag->fill(Arr::except($data, 'taggables'))->save();
        $this->syncTaggables($tag, Arr::get($data, 'taggables'));

        return $tag;
    }

    /**
     * @param Tag $tag
     * @param array|null $taggables
     * @return Tag
     */
    private function syncTaggables(Tag $tag, $taggables)
    {
        if ($taggables) {
            $taggableIds = array_map(function($taggable) use($tag) {
                return ['taggable_id' => $taggable['id']];
            }, $taggables);
            $relation = $taggables[0]['relation'];
            $tag->$relation()->sync($taggableIds);
        }
        return $tag;
    }

    /**
     * Create new tag or update existing one with specified data.
     *
     * @param array $data
     * @return Tag
     */
    public function updateOrCreate($data)
    {
        return $this->tag->updateOrCreate(['name' => $data['name']], [
            'type' => isset($data['type']) ? $data['type'] : 'custom',
            'display_name' => isset($data['display_name']) ? $data['display_name'] : $data['name'],
        ]);
    }

    /**
     * Delete multiple tags and detach them from all taggables.
     */
    public function deleteMultiple($ids)
    {
        $this->tag->whereIn('id', $ids)->delete();
        $this->detachById($ids);
    }

    /**
     * Get validation rules for specified method.
     *
     * @param string $type
     * @param int    $tagId
     * @return array
     */
    public function getValidationRules($type = 'store', $tagId = null)
    {
        $rules = [
            'name' => 'required|string|between:2,80|unique:tags,name',
            'type' => 'required|string|in:status,custom,category',
            'display_name' => 'min:2|max:255|unique:tags,display_name'
        ];

        //make sure validation errors are not thrown if we're trying to update
        //this tags name or display name this the same value as current one
        if ($tagId) {
            $rules['name'].=",$tagId";
            $rules['display_name'].=",$tagId";
        }

        //remove 'required' validation if we're not getting rules for creating new tag
        if ($type !== 'store') {
            $rules = array_map(function($rule) { return str_replace('required|', '', $rule); }, $rules);
        }

        return $rules;
    }
}