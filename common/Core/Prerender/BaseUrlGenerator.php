<?php

namespace Common\Core\Prerender;

use Common\Pages\Page;
use Common\Core\Contracts\AppUrlGenerator;

class BaseUrlGenerator implements AppUrlGenerator
{
    const SEPARATOR = '-';

    /**
     * @param array|Page $page
     * @return string
     */
    public function page($page)
    {
        $slug = str_slug($page['slug']);
        return url("titles/{$page['id']}/$slug");
    }

    /**
     * @return string
     */
    public function home()
    {
        return url('');
    }

    /**
     * Generate url based on called method name, if there's no specific method.
     *
     * @param string $name
     * @param array $arguments
     * @return string
     */
    public function __call($name, $arguments)
    {
        return url(kebab_case($name));
    }
}