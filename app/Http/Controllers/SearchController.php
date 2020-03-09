<?php namespace App\Http\Controllers;

use DB;
use App;
use Auth;
use Config;
use App\User;
use App\Ticket;
use App\Article;
use Common\Settings\Settings;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Common\Core\Controller;

class SearchController extends Controller
{
    /**
     * @var Request
     */
    private $request;

    /**
     * @var User
     */
    private $user;

    /**
     * @var Ticket
     */
    private $ticket;

    /**
     * @var Article
     */
    private $article;

    /**
     * @var Settings
     */
    private $settings;

    /**
     * @var int
     */
    private $perPage;

    /**
     * @param Request $request
     * @param Settings $settings
     * @param Ticket $ticket
     * @param User $user
     * @param Article $article
     */
    public function __construct(Request $request, Settings $settings, Ticket $ticket, User $user, Article $article)
    {
        $this->user = $user;
        $this->ticket = $ticket;
        $this->article = $article;
        $this->request = $request;
        $this->settings = $settings;
        $this->perPage = $this->request->get('per_page', 5);
    }

    /**
     * Search for tickets, customers and articles using specified query.
     *
     * @param string $query
     * @return JsonResponse
     */
    public function all($query)
    {
        return $this->success(['data' => [
            'tickets'  => $this->tickets($query),
            'users'    => $this->users($query),
            'articles' => $this->articles($query)->getData()->pagination,
        ]]);
    }

    /**
     * Search for help center articles matching specified query.
     *
     * @param string $term
     * @return JsonResponse
     */
    public function articles($term)
    {
        $this->authorize('index', Article::class);

        $bodyLimit = $this->request->get('bodyLimit', 200);
        $categories = $this->request->get('categories');

        $ids = $this->article->search($term)->keys();

        $query = $this->article->whereIn('id', $ids)
            ->where('draft', 0)
            ->withCategories($categories);
        
        // filter by specified categories
        if ($categories) {
            $query->filterByCategories($categories);
        }

        $query = $this->filterArticlesByEnvato($query);

        // order mysql query by search provider order
        if ($ids->isNotEmpty() && Config::get('database.default') === 'mysql') {
            $ids = $ids->implode(',');
            $query->orderByRaw(DB::raw("field(id,$ids)"), $ids)->get();
        }

        $pagination = $query->paginate($this->perPage);

        $pagination->transform(function(Article $article) use($bodyLimit) {
            return [
                'id' => $article->id,
                'title' => $article->title,
                'slug' => $article->slug,
                'body' => str_limit(strip_tags(html_entity_decode($article->body)), $bodyLimit),
                'description' => $article->description,
                'categories' => $article->categories,
            ];
        });

        $options = [
            'prerender' => [
                'view' => "search.index",
                'config' => "search.index",
            ]
        ];

        return $this->success([
            'pagination' => $pagination,
            'query' => $term,
        ], 200, $options);
    }

    /**
     * Search for users matching specified query.
     *
     * @param string $query
     * @return LengthAwarePaginator;
     */
    public function users($query)
    {
        $this->authorize('index', User::class);
        return $this->user->search($query)->paginate($this->perPage)->toArray();
    }

    /**
     * Search for tickets matching specified query.
     *
     * @param string $query
     * @return LengthAwarePaginator
     */
    public function tickets($query)
    {
        $this->authorize('index', Ticket::class);

        $detailed = $this->request->get('detailed', false);

        $ids = $this->ticket->search($query)->keys();

        $query = $this->ticket->compact()->whereIn('id', $ids);

        //load detailed information about ticket, if requested
        if ($detailed) {
            $query->with(['user', 'tags'])->withCount('replies');
        }

        return $query->paginate($this->perPage)->toArray();
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    private function filterArticlesByEnvato(Builder $query)
    {
        // filter by user envato purchases
        if ($this->settings->get('envato.filter_search') && Auth::check() && ! Auth::user()->isSuperAdmin()) {
            return $query->whereHas('categories', function(Builder $q) {
                $names = Auth::user()->purchase_codes->pluck('item_name');
                $q->whereIn('name', $names->toArray());
            });
        }

        return $query;
    }
}
