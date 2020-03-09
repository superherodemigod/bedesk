<?php namespace App\Http\Controllers;

use Auth;
use App\Tag;
use Common\Core\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Common\Settings\Settings;
use Illuminate\Support\Collection;

class NewTicketCategoriesController extends Controller
{
    /**
     * @var Request
     */
    private $request;

    /**
     * @var Settings
     */
    private $settings;

    /**
     * @param Request $request
     * @param Settings $settings
     */
    public function __construct(Request $request, Settings $settings)
    {
        $this->request = $request;
        $this->settings = $settings;
    }

    /**
     * Get new ticket categories.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $this->authorize('index', Tag::class);

        $tags = app(Tag::class)
            ->where('type', 'category')
            ->with('categories')
            ->limit(50)
            ->get();

        return $this->success([
            'tags' => $this->filterCategoriesByPurchases($tags),
        ]);
    }

    /**
     * Filter specified tags by current user envato purchases.
     *
     * @param Tag[]|Collection $tags
     * @return array
     */
    private function filterCategoriesByPurchases($tags)
    {
        $user = Auth::user();

        $requireCode = $this->settings->get('envato.enable') && $this->settings->get('envato.require_purchase_code');

        if ( ! $requireCode || $user->isSuperAdmin()) return $tags;

        $names = $user->purchase_codes->pluck('item_name')
            ->map(function($name) { return strtolower($name); });

        return $tags->filter(function($tag) use($names) {
            return $names->contains(strtolower($tag->name));
        })->values();
    }
}
