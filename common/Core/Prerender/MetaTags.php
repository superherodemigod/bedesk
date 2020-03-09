<?php

namespace Common\Core\Prerender;

use Common\Core\Contracts\AppUrlGenerator;
use Common\Core\Prerender\Actions\ReplacePlaceholders;
use Common\Settings\Settings;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Arr;

class MetaTags implements Arrayable
{
    /**
     * Tag types that can be edited by the user.
     */
    const EDITABLE_TAGS = ['og:title', 'og:description', 'keywords'];

    /**
     * Data for replacing meta tag config placeholders.
     *
     * @var array
     */
    protected $data = [];

    /**
     * Meta tag config before generation.
     *
     * @var array
     */
    protected $tags = [];

    /**
     * Final tags for appending to site head.
     *
     * @var array
     */
    protected $generatedTags = [];

    /**
     * Namespace for current tag config. "artist.show".
     *
     * @var string
     */
    protected $namespace;

    /**
     * @var AppUrlGenerator
     */
    public $urls;

    /**
     * @var Settings
     */
    private $settings;

    public function __construct($tags, $data, $namespace)
    {
        $this->namespace = $namespace;
        $tags = $this->overrideTagsWithUserValues($tags);
        $this->tags = array_merge($tags, config('seo.common'));
        $this->data = $data;
        $this->urls = app(AppUrlGenerator::class);
        $this->settings = app(Settings::class);
        $this->generatedTags = $this->generateTags();
    }

    public function toArray()
    {
        return $this->getAll();
    }

    public function getTitle()
    {
        return $this->get('og:title');
    }

    public function getDescription()
    {
        return $this->get('og:description');
    }

    /**
     * @param string $position
     * @return array
     */
    public function getMenu($position)
    {
        $menus = $this->settings->getJson('menus');
        $default = ['items' => []];

        return Arr::first($menus, function($menu) use($position) {
            return $menu['position'] === $position;
        }, $default);
    }

    public function get($value, $prop = 'property')
    {
        $tag = Arr::first($this->generatedTags, function($tag) use($prop, $value) {
            return $tag[$prop] === $value;
        }, []);

        return Arr::get($tag, 'content');
    }

    public function getData($selector = null)
    {
        return Arr::get($this->data, $selector);
    }

    public function getAll()
    {
        return $this->generatedTags;
    }

    /**
     * Convert specified tag config into a string.
     *
     * @param array $tag
     * @return string
     */
    public function tagToString($tag)
    {
        $string = '';

        foreach(array_except($tag, 'nodeName') as $key => $value) {
            $value = is_array($value) ? implode(',', $value) : $value;
            $string .= "$key=\"$value\" ";
        }

        return trim($string);
    }

    private function generateTags()
    {
        $tags = $this->tags;

        $tags = array_map(function($tag) {
            // if tag does not have "content" or "_text" prop, we can continue
            if (array_key_exists('content', $tag)) {
                $tag['content'] = $this->replacePlaceholders($tag['content']);
            } else if (array_key_exists('_text', $tag)) {
                $tag['_text'] = $this->replacePlaceholders($tag['_text']);
            }
            return $tag;
        }, $tags);

        $tags = $this->duplicateTags($tags);

        $tags = array_map(function($tag) {
            // set nodeName to <meta> tag, if not already specified
            if ( ! array_key_exists('nodeName', $tag)) {
                $tag['nodeName'] = 'meta';
            }
            return $tag;
        }, $tags);

        return $tags;
    }

    /**
     * Create duplicate tags from generated tags.
     * (for example: canonical link from og:url)
     *
     * @param array $tags
     * @return array
     */
    private function duplicateTags($tags)
    {
        foreach ($tags as $tag) {
            if (Arr::get($tag, 'property') === 'og:url') {
                $tags[] = [
                    'nodeName' => 'link',
                    'rel' => 'canonical',
                    'href' => $tag['content']
                ];
            }

            if (Arr::get($tag, 'property') === 'og:title') {
                $tags[] = [
                    'nodeName' => 'title',
                    '_text' => ucfirst($tag['content']),
                ];
            }

            if (Arr::get($tag, 'property') === 'og:description') {
                $tags[] = [
                    'property' => 'description',
                    'content' => $tag['content'],
                ];
            }
        }

        return $tags;
    }

    private function replacePlaceholders($config)
    {
        return app(ReplacePlaceholders::class)->execute($config, $this->data);
    }

    /**
     * @param array $metaTags
     * @return array
     */
    private function overrideTagsWithUserValues($metaTags)
    {
        $overrides = app(Settings::class)->all();
        foreach ($metaTags as $key => $tagConfig) {
            $property = Arr::get($tagConfig, 'property');
            $settingKey = "seo.{$this->namespace}.{$property}";
            if (array_search($property, self::EDITABLE_TAGS) !== false && array_key_exists($settingKey, $overrides)) {
                $metaTags[$key]['content'] = $overrides[$settingKey];
            }
        }

        return $metaTags;
    }
}