<?php namespace App\Services\Triggers\Actions;

use App\Action;
use App\Ticket;
use App\Services\Ticketing\ReplyRepository;

class AddNoteToTicketAction implements TriggerActionInterface {

    /**
     * ReplyRepository service instance.
     *
     * @var ReplyRepository
     */
    private $replyRepository;

    /**
     * AddNoteToTicketAction constructor.
     *
     * @param ReplyRepository $replyRepository
     */
    public function __construct(ReplyRepository $replyRepository)
    {
        $this->replyRepository = $replyRepository;
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
        $body = json_decode($action->pivot['action_value'])->note_text;

        $this->replyRepository->create([
            'body' => $body,
        ], $ticket, 'notes');

        return $ticket;
    }
}