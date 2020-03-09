<?php namespace App\Services\Triggers\Actions;

use App\Action;
use App\Ticket;

interface TriggerActionInterface {

    /**
     * Perform specified action on ticket.
     *
     * @param Ticket $ticket
     * @param Action $action
     * @return Ticket
     */
    public function perform(Ticket $ticket, Action $action);
}