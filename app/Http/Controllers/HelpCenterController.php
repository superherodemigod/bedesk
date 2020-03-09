<?php namespace App\Http\Controllers;

use Cache;
use App\Category;
use Carbon\Carbon;
use Common\Settings\Settings;
use Common\Core\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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
        $data = $this->getHelpCenterData('hc.home', $categoryLimit, $articleLimit);

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

        $data = $this->category
            ->where('parent_id', $parentCategoryId)
            ->with(['articles' => function(BelongsToMany $query) {
                $query->select('id', 'title', 'position', 'slug');
            }])
            ->orderByPosition()
            ->limit(10)
            ->get();


        return $this->success(['categories' => $data]);
    }

    private function getHelpCenterData($cacheKey, $categoryLimit = 6, $articleLimit = 5)
    {
        return Cache::remember($cacheKey, Carbon::now()->addDays(2), function() use($categoryLimit, $articleLimit) {
            //load categories with children and articles
            $categories = $this->category
                ->rootOnly()
                ->orderByPosition()
                ->limit(10)
                ->withCount('children')
                ->with(['children' => function($query) {
                    $query->withCount('articles')->with(['articles' => function(BelongsToMany $query) {
                        $query->select('id', 'title', 'position', 'slug');
                    }]);
                }])->get();
            //limit children and categories
            return $categories->each(function(Category $category) use($categoryLimit, $articleLimit) {
                $category->setRelation('children', $category->children->take($categoryLimit));

                $category->children->each(function(Category $child) use($articleLimit) {
                    $child->setRelation('articles', $child->articles->take($articleLimit));
                });
            });
        });
    }
}
