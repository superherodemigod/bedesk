<?php

namespace App\Http\Controllers;

use Cache;
use App\Category;
use Carbon\Carbon;
use Common\Settings\Settings;
use Common\Core\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HelpCenterController extends Controller
{
    /**
     * @var Category $category
     */
    private $category;

    /**
     * @var Settings
     */
    private $settings;

    /**
     * @var Request
     */
    private $request;

    /**
     * @param Category $category
     * @param Settings $settings
     * @param Request $request
     */
    public function __construct(Category $category, Settings $settings, Request $request)
    {
        $this->category = $category;
        $this->settings = $settings;
        $this->request = $request;
    }

    /**
     * Return all help center categories, child categories and articles.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $this->authorize('index', Category::class);

        $categoryLimit = $this->settings->get('hc_home.children_per_category');
        $articleLimit = $this->settings->get('hc_home.articles_per_category');
        if (isset(auth()->user()->id))
            $data = $this->getHelpCenterData('hc.home', $categoryLimit, $articleLimit);
        else 
            $data = null;

        $options = [
            'prerender' => [
                'view' => "home.show",
                'config' => "home.show",
            ]
        ];

        return $this->success(['categories' => $data], 200, $options);
    }

    /**
     * Return data for rendering help center sidebar navigation.
     *
     * @return JsonResponse
     */
    public function sidenav()
    {
        $this->authorize('index', Category::class);
        $parentCategoryId = $this->request->get('categoryId');

        $category_permission =  auth()->user()->user_category_permission;
        $article_permission = auth()->user()->user_article_permission;
        $user_id = auth()->user()->id;
        $sql = 'SELECT roles.category_permission,roles.article_permission,users.id FROM user_role
            INNER JOIN roles ON roles.id = user_role.role_id
            INNER JOIN users ON users.id = user_role.user_id where users.id=' . $user_id;
        $temp = DB::select($sql);
        $role_cat = explode(',', $temp[0]->category_permission);
        $role_art = explode(',', $temp[0]->article_permission);
        $cat = explode(',', $category_permission);
        $cat = array_merge($cat, $role_cat);
        $art = explode(',', $article_permission);
        $art = array_merge($art, $role_art);

        if ((count($cat) > 1 && $category_permission != "") || (count($role_cat) > 1 && $temp[0]->category_permission != "")) {
            $data = $this->category
                ->where('parent_id', $parentCategoryId)
                ->whereIn('id', $cat)
                ->with(['articles' => function (BelongsToMany $query) {
                    $category_permission =  auth()->user()->user_category_permission;
                    $article_permission = auth()->user()->user_article_permission;
                    $user_id = auth()->user()->id;
                    $sql = 'SELECT roles.category_permission,roles.article_permission,users.id FROM user_role
                        INNER JOIN roles ON roles.id = user_role.role_id
                        INNER JOIN users ON users.id = user_role.user_id where users.id=' . $user_id;
                    $temp = DB::select($sql);
                    $role_cat = explode(',', $temp[0]->category_permission);
                    $role_art = explode(',', $temp[0]->article_permission);
                    $cat = explode(',', $category_permission);
                    $cat = array_merge($cat, $role_cat);
                    $art = explode(',', $article_permission);
                    $art = array_merge($art, $role_art);
                    $query->select('id', 'title', 'position', 'slug')->whereIn('id', $art);
                }])
                ->orderByPosition()
                ->limit(10)
                ->get();
        } else {
            $data = $this->category
                ->where('parent_id', $parentCategoryId)
                ->with(['articles' => function (BelongsToMany $query) {
                    $query->select('id', 'title', 'position', 'slug');
                }])
                ->orderByPosition()
                ->limit(10)
                ->get();
        }



        return $this->success(['categories' => $data]);
    }

    private function getHelpCenterData($cacheKey, $categoryLimit = 6, $articleLimit = 5)
    {
        // if (isset(auth()->user()->permissions)) {
        $category_permission =  auth()->user()->user_category_permission;
        $article_permission = auth()->user()->user_article_permission;
        $user_id = auth()->user()->id;
        $sql = 'SELECT roles.category_permission,roles.article_permission,users.id FROM user_role
            INNER JOIN roles ON roles.id = user_role.role_id
            INNER JOIN users ON users.id = user_role.user_id where users.id=' . $user_id;
        $temp = DB::select($sql);
        $role_cat = explode(',', $temp[0]->category_permission);
        $role_art = explode(',', $temp[0]->article_permission);
        $cat = explode(',', $category_permission);
        $cat = array_merge($cat, $role_cat);
        $art = explode(',', $article_permission);
        $art = array_merge($art, $role_art);
        if ((count($cat) > 1 && $category_permission != "") || (count($role_cat) > 1 && $temp[0]->category_permission != "")) {
            $categories = $this->category
                ->whereIn('id', $cat)->whereNull('parent_id')
                ->orderByPosition()
                ->limit(10)
                ->withCount('children')
                ->with(['children' => function ($query) {
                    $category_permission =  auth()->user()->user_category_permission;
                    $article_permission = auth()->user()->user_article_permission;
                    $user_id = auth()->user()->id;
                    $sql = 'SELECT roles.category_permission,roles.article_permission,users.id FROM user_role
                            INNER JOIN roles ON roles.id = user_role.role_id
                            INNER JOIN users ON users.id = user_role.user_id where users.id=' . $user_id;
                    $temp = DB::select($sql);
                    $role_cat = explode(',', $temp[0]->category_permission);
                    $role_art = explode(',', $temp[0]->article_permission);
                    $cat = explode(',', $category_permission);
                    $cat = array_merge($cat, $role_cat);
                    $art = explode(',', $article_permission);
                    $art = array_merge($art, $role_art);
                    $query->withCount('articles')->whereIn('id', $cat)->with(['articles' => function (BelongsToMany $query) {
                        $category_permission =  auth()->user()->user_category_permission;
                        $article_permission = auth()->user()->user_article_permission;
                        $user_id = auth()->user()->id;
                        $sql = 'SELECT roles.category_permission,roles.article_permission,users.id FROM user_role
                                INNER JOIN roles ON roles.id = user_role.role_id
                                INNER JOIN users ON users.id = user_role.user_id where users.id=' . $user_id;
                        $temp = DB::select($sql);
                        $role_cat = explode(',', $temp[0]->category_permission);
                        $role_art = explode(',', $temp[0]->article_permission);
                        $cat = explode(',', $category_permission);
                        $cat = array_merge($cat, $role_cat);
                        $art = explode(',', $article_permission);
                        $art = array_merge($art, $role_art);
                        $query->select('id', 'title', 'position', 'slug')->whereIn('id', $art);
                    }]);
                }])->get();
            return $categories->each(function (Category $category) use ($categoryLimit, $articleLimit) {
                $category->setRelation('children', $category->children->take($categoryLimit));

                $category->children->each(function (Category $child) use ($articleLimit) {

                    $child->setRelation('articles', $child->articles->take($articleLimit));
                });
            });
        } else {
            return Cache::remember($cacheKey, Carbon::now()->addDays(2), function () use ($categoryLimit, $articleLimit) {
                $categories = $this->category
                    ->rootOnly()
                    ->orderByPosition()
                    ->limit(10)
                    ->withCount('children')
                    ->with(['children' => function ($query) {
                        $query->withCount('articles')->with(['articles' => function (BelongsToMany $query) {
                            $query->select('id', 'title', 'position', 'slug');
                        }]);
                    }])->get();
                return $categories->each(function (Category $category) use ($categoryLimit, $articleLimit) {
                    $category->setRelation('children', $category->children->take($categoryLimit));

                    $category->children->each(function (Category $child) use ($articleLimit) {

                        $child->setRelation('articles', $child->articles->take($articleLimit));
                    });
                });
            });
        }
        // } 
        // else {
        //     return null;
        // }
    }
}
