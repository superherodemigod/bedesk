<?php namespace App\Http\Controllers;

use App\Trigger;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Requests\ModifyTriggers;
use App\Services\Triggers\TriggerRepository;
use Common\Core\Controller;
use Illuminate\Http\Response;

class TriggersController extends Controller
{
    /**
     * @var TriggerRepository $trigger
     */
    private $repository;

    /**
     * @var Request
     */
    private $request;

    /**
     * @param TriggerRepository $repository
     * @param Request $request
     */
    public function __construct(TriggerRepository $repository, Request $request)
    {
        $this->repository = $repository;
        $this->request = $request;
    }

    /**
     * Paginate all available triggers triggers.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $this->authorize('index', Trigger::class);

        $pagination = $this->repository->paginate($this->request->all());

        return $this->success(['pagination' => $pagination]);
    }

    /**
     * Return specified trigger.
     *
     * @param integer $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $this->authorize('index', Trigger::class);

        return $this->success(['data' => $this->repository->findOrFail($id)]);
    }

    /**
     * Create a new trigger.
     *
     * @param ModifyTriggers $request
     * @return JsonResponse
     */
    public function store(ModifyTriggers $request)
    {
        $this->authorize('store', Trigger::class);

        return response($this->repository->create($this->request->all()), 201);
    }

    /**
     * Update existing trigger.
     *
     * @param integer $id
     * @param ModifyTriggers $request
     *
     * @return Trigger
     */
    public function update($id, ModifyTriggers $request)
    {
        $this->authorize('update', Trigger::class);

        return $this->repository->update($id, $this->request->all());
    }

    /**
     * Delete triggers matching specified ids.
     *
     * @return Response
     */
    public function destroy()
    {
        $this->authorize('destroy', Trigger::class);

        $this->validate($this->request, [
            'ids'   => 'required|array|min:1',
            'ids.*' => 'required|integer'
        ]);

        return response($this->repository->delete($this->request->get('ids')), 204);
    }
}
