<?php namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;
use App\Services\Ticketing\TicketRepository;
use Common\Core\Controller;

class TicketStatusController extends Controller
{
    /**
     * TicketRepository model instance.
     *
     * @var TicketRepository
     */
    private $tickets;

    /**
     * Laravel request instance.
     *
     * @var Request
     */
    private $request;

    /**
     * TicketStatusController constructor.
     *
     * @param TicketRepository $tickets
     * @param Request          $request
     */
    public function __construct(TicketRepository $tickets, Request $request)
    {
        $this->tickets = $tickets;
        $this->request = $request;
    }

    /**
     * Change status of multiple tickets.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function change()
    {
        $this->authorize('update', Ticket::class);

        $this->validate($this->request, [
            'ids'    => 'required|array',
            'status' => 'required|string|in:open,closed,pending,spam'
        ]);

        $ids    = $this->request->input('ids');
        $status = $this->request->input('status');

        $this->tickets->changeStatus($ids, $status);

        return $this->success();
    }
}
