<?php namespace App\Http\Controllers;

use App\Tag;
use Illuminate\Http\Request;
use App\Services\Envato\EnvatoApiClient;
use Illuminate\Database\Eloquent\Collection;
use Common\Core\Controller;

class EnvatoController extends Controller
{
    /**
     * Request instance.
     *
     * @var Request
     */
    private $request;

    /**
     * EnvatoApiClient instance.
     *
     * @var EnvatoApiClient
     */
    private $envatoClient;

    /**
     * Tag model instance.
     *
     * @var Tag
     */
    private $tag;

    /**
     * EnvatoController constructor.
     *
     * @param Request $request
     * @param Tag $tag
     * @param EnvatoApiClient $envatoClient
     */
    public function __construct(Request $request, Tag $tag, EnvatoApiClient $envatoClient)
    {
        $this->tag = $tag;
        $this->request = $request;
        $this->envatoClient = $envatoClient;
    }

    /**
     * Validate specified envato purchase code.
     *
     * @return Collection
     */
    public function validateCode()
    {
        $code = $this->request->get('purchase_code');

        if ($r = $this->envatoClient->purchaseCodeIsValid($code)) {
            return $this->success(['data' => $r]);
        } else {
            return $this->error(['purchase_code' => 'This purchase code is not valid.']);
        }
    }

    /**
     * Import user items via envato API.
     *
     * @return \Illuminate\Support\Collection
     */
    public function importItems()
    {
        $names = $this->envatoClient->getItems();

        return collect($names)->map(function($name) {
            $tag = $this->tag->firstOrNew(['name' => $name]);
            $tag->fill(['type' => 'category'])->save();
            return $tag;
        });
    }
}
