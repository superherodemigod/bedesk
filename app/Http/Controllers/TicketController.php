<?php namespace App\Http\Controllers;

use App\Events\TicketUpdated;
use App\Ticket;
use Common\Core\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Services\Ticketing\TicketRepository;
use App\Events\TicketCreated;

class TicketController extends Controller
{
    /**
     * @var Request
     */
    private $request;

    /**
     * @var TicketRepository
     */
    private $ticketRepository;

    /**
     * @param Request $request
     * @param TicketRepository $ticketRepository
     */
    public function __construct(Request $request, TicketRepository $ticketRepository)
    {
        $this->request = $request;
        $this->ticketRepository = $ticketRepository;
    }

    /**
     * Return a list of tickets.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $this->authorize('index', Ticket::class);

        $this->validate($this->request, [
            'tags'        => 'string|min:1',
            'assigned_to' => 'integer',
        ]);

        $pagination = $this->ticketRepository->paginateTickets($this->request->all());

        return $this->success(['pagination' => $pagination]);
    }

    /**
     * Return specified ticket.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $ticket = $this->ticketRepository->findOrFail($id);

        $this->authorize('show', $ticket);

        $ticket = $this->ticketRepository->loadConversation($ticket);

        return $this->success(['ticket' => $ticket]);
    }

    /**
     * @return Ticket
     */
    public function store()
    {
        $this->authorize('store', Ticket::class);

        $this->validate($this->request, [
            'user_id'       => 'integer|exists:users,id',
            'subject'       => 'required|min:3|max:255',
            'category'      => 'required|integer|min:1',
            'body'          => 'required|min:3',
            'uploads'       => 'array|max:5|exists:file_entries,id',
            'tags'          => 'array|min:1|max:10',
            'tags.*'        => 'integer|min:1',
        ]);

        $ticket = $this->ticketRepository->create($this->request->all());

        event(new TicketCreated($ticket));

        return response($ticket, 201);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function update($id)
    {
        $ticket = $this->ticketRepository->findOrFail($id);
        $this->authorize('update', $ticket);

        $this->validate($this->request, [
            'subject'       => 'min:3|max:255',
            'category'      => 'integer|min:1',
            'tags'          => 'array|min:1|max:10',
            'tags.*'        => 'integer|min:1',
        ]);

        $ticket = $this->ticketRepository->update($ticket, $this->request->all());

        event(new TicketUpdated($ticket));

        return $this->success(['ticket' => $ticket]);
    }

    /**
     * Delete tickets matching given ids.
     */
    public function destroy()
    {
        $this->authorize('destroy', Ticket::class);

        $this->validate($this->request, [
            'ids'    => 'required|array',
            'ids.*'  => 'required|integer',
        ]);

        $this->ticketRepository->deleteTickets($this->request->get('ids'));

        return $this->success([], 204);
    }
}
