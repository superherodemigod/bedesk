<?php namespace App\Services\Triggers\Actions;

use App\Action;
use App\Ticket;
use App\Services\Ticketing\TicketRepository;

class ChangeTicketStatusAction implements TriggerActionInterface {

    /**
     * TicketRepository service instance.
     *
     * @var TicketRepository
     */
    private $ticketRepository;

    /**
     * ChangeTicketStatusAction constructor.
     *
     * @param TicketRepository $ticketRepository
     */
    public function __construct(TicketRepository $ticketRepository)
    {
        $this->ticketRepository = $ticketRepository;
    }

    /**
     * Perform specified action on ticket.
     *
     * @param Ticket $ticket
     * @param Action $action
     * @return Ticket
     */
    public function perform(Ticket $ticket, Action $action)
    {
        $statusName = json_decode($action->pivot['action_value'])->status_name;

        $this->ticketRepository->changeStatus([$ticket->id], $statusName);

        //'unload' tags relationship in case it was already loaded
        //on passed in ticket so removed tags are properly removed
        //the next time tags/status relationship is accessed on this ticket
        unset($ticket->tags);

        return $ticket;
    }
}