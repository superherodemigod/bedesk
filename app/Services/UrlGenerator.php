<?php

namespace App\Services;

use App\Article;
use App\Category;
use Common\Core\Prerender\BaseUrlGenerator;

class UrlGenerator extends BaseUrlGenerator
{
    /**
     * @param Article|array $article
     * @return string
     */
    public function article($article)
    {
        return url('help-center/articles') . "/{$article['id']}/" . str_slug($article['title']);
    }

    /**
     * @param Category|array $category
     * @return string
     */
    public function category($category)
    {
        return url('help-center/categories') . "/{$category['id']}/" . str_slug($category['name']);
    }

    /**
     * @param array $data
     * @return string
     */
    public function search($data)
    {
        return url('help-center/search') . "/{$data['query']}";
    }
}