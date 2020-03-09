<?php

namespace Common\Core\Prerender\Actions;

use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Common\Core\Contracts\AppUrlGenerator;
use Illuminate\Support\Debug\Dumper;

class ReplacePlaceholders
{
    /**
     * @var AppUrlGenerator
     */
    private $urls;

    /**
     * @var array
     */
    private $allData;

    /**
     * @param AppUrlGenerator $urls
     */
    public function __construct(AppUrlGenerator $urls)
    {
        $this->urls = $urls;
    }

    /**
     * @param array|string $config
     * @param array $data
     * @return array|string
     */
    public function execute($config, $data)
    {
        $this->allData = $data;
        return $this->replace($config);
    }

    /**
     * @param array|string $config
     * @return array|string
     */
    private function replace($config)
    {
        if (is_array($config)) {
            if (Arr::get($config, '_type') === 'loop') {
                return $this->replaceLoop($config);
            } else {
                return array_map(function($item) {
                    return $this->replace($item);
                }, $config);
            }
        } else {
            return $this->replaceString($config, $this->allData);
        }
    }

    /**
     * @param $config
     * @return array
     */
    private function replaceLoop($config)
    {
        $dataSelector = strtolower($config['dataSelector']);
        $loopData = Arr::get($this->allData, $dataSelector);

        // won't be able to access paginator data via dot notation
        // selector (items.data), need to extract it manually
        if ($loopData instanceof AbstractPaginator) {
            $loopData = $loopData->items();
        }
        $loopData = collect($loopData);

        // apply filter (if provided), filter will specify which array
        // prop of loop item should match what value. For example:
        // ['key' => 'pivot.department', 'value' => 'cast' will get
        // only cast from movie credits array instead of full credits
        if ($filter = Arr::get($config, 'filter')) {
            $loopData = $loopData->filter(function($loopItem) use($filter) {
                return Arr::get($loopItem, $filter['key']) === $filter['value'];
            });
        }

        if ($limit = Arr::get($config, 'limit')) {
            $loopData = $loopData->slice(0, $limit);
        }

        // if _type is "nested" we only need to return the first item so instead
        // of nested [['name' => 'foo'], ['name' => 'bar']] only ['name' => 'foo']
        if ($returnFirstOnly = Arr::get($config, 'returnFirstOnly')) {
            $loopData->slice(0, 1);
        }

        $generated = collect($loopData)->map(function($loopItem) use($config) {
            // make sure template can access data via dot notation (TAG.NAME)
            // so instead of passing just tag, pass ['tag' => $tag]
            $name = strtolower(class_basename($loopItem));
            return $this->replaceString($config['template'], [$name => $loopItem]);
        });

        return $returnFirstOnly ? $generated->first() : $generated->values()->toArray();
    }

    /**
     * @param string|string[] $template
     * @param array $data
     * @return string|string[]
     */
    private function replaceString($template, $data)
    {
        return preg_replace_callback('/{{([\w\.\-]+?)}}/', function($matches) use($data) {
            if ( ! isset($matches[1])) return $matches[0];

            $placeholder = strtolower($matches[1]);

            // replace site name
            if ($placeholder === 'site_name') {
                return config('app.name');
            }

            // replace base url
            if ($placeholder === 'url.base') {
                return url('');
            }

            // replace by url generator url
            if (starts_with($placeholder, 'url.')) {
                // "url.movie" => "movie"
                $resource = str_replace('url.', '', $placeholder);
                // "new_releases" => "newReleases"
                $method = camel_case($resource);
                return $this->urls->$method(Arr::get($data, $resource) ?: $data);
            }

            // supports dot notation: 'artist.bio.text'
            $replacement = Arr::get($data, $placeholder);

            // return original placeholder if it can't be replaced
            if ( ! $replacement || is_array($replacement)) {
                return $matches[0];
            }

            return str_limit(strip_tags($replacement), 400);
        }, $template);
    }
}