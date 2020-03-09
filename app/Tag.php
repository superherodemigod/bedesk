<?php

namespace App;

use Carbon\Carbon;
use Common\Files\FileEntry;
use Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Common\Tags\Tag as BaseTag;

/**
 * App\Tag
 *
 * @property integer $id
 * @property string $name
 * @property string $type
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property string $display_name
 * @mixin Eloquent
 */
class Tag extends BaseTag
{
    /**
     * @return MorphToMany
     */
    public function tickets()
    {
        return $this->morphedByMany(Ticket::class, 'taggable');
    }

    /**
     * @return MorphToMany
     */
    public function uploads()
    {
        return $this->morphedByMany(FileEntry::class, 'taggable');
    }

    /**
     * @return MorphToMany
     */
    public function articles()
    {
        return $this->morphedByMany(Article::class, 'taggable');
    }

    /**
     * @return MorphToMany
     */
    public function categories()
    {
        return $this->morphedByMany(Category::class, 'taggable')
            ->select(['id', 'name']);
    }
}