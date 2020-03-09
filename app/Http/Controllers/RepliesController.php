<?php namespace App\Http\Controllers;

use App\Reply;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Services\Ticketing\ReplyRepository;
use App\Services\Ticketing\TicketRepository;
use App\Events\TicketUpdated;
use Common\Core\Controller;

class RepliesController extends Controller {

	/**
	 * @var Request
	 */
	private $request;

	/**
	 * @var ReplyRepository
	 */
	private $repository;

    /**
     * @var TicketRepository
     */
    private $ticketRepository;

    /**
     * @param Request $request
     * @param ReplyRepository $repository
     * @param TicketRepository $ticketRepository
     */
	public function __construct(Request $request, ReplyRepository $repository, TicketRepository $ticketRepository)
	{
		$this->request    = $request;
		$this->repository = $repository;
        $this->ticketRepository = $ticketRepository;
	}

    /**
     * Show specified reply.
     *
     * @param int $id
     * @return Reply
     */
	public function show($id)
    {
        $reply = $this->repository->findOrFail($id);

        $this->authorize('show', $reply);

        return $reply->load('user', 'uploads', 'ticket');
    }

    /**
     * Update specified reply.
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function update($id)
    {
        $reply = $this->repository->findOrFail($id);

        $this->authorize('update', $reply);

        $this->validate($this->request, [
            'body'      => 'string|min:1',
            'uploads'   => 'array|max:5|exists:file_entries,id',
        ]);

        $reply = $this->repository->update($this->request->all(), $reply);

        if ($reply->type !== 'drafts') {
            $ticket = $this->ticketRepository->find($reply->ticket_id);
            event(new TicketUpdated($ticket, $ticket));
        }

        return $this->success(['data' => $reply]);
    }

    /**
     * Delete specified reply of any type.
     *
     * @param int $id
     *
     * @return JsonResponse
     */
	public function destroy($id)
	{
        $reply = $this->repository->findOrFail($id);

	    $this->authorize('destroy', $reply);

        $ticket = $this->ticketRepository->find($reply->ticket_id);

	    $this->repository->delete($reply);

        event(new TicketUpdated($ticket));

		return $this->success(null, 204);
	}
}
