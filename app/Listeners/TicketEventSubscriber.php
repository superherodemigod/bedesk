<?php namespace App\Listeners;

use App\Events\TicketCreated;
use App\Events\TicketUpdated;
use App\Mail\TicketCreatedNotification;
use App\Ticket;
use Common\Settings\Settings;
use App\Services\Triggers\TriggersCycle;
use Illuminate\Mail\Mailer;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Events\Dispatcher;

class TicketEventSubscriber implements ShouldQueue
{
    /**
     * TriggersCycle instance.
     *
     * @var TriggersCycle
     */
    private $triggersCycle;

    /**
     * @var Mailer
     */
    private $mailer;
    /**
     * @var Settings
     */
    private $settings;

    /**
     * @param TriggersCycle $triggersCycle
     * @param Mailer $mailer
     * @param Settings $settings
     */
    public function __construct(TriggersCycle $triggersCycle, Mailer $mailer, Settings $settings)
    {
        $this->mailer = $mailer;
        $this->settings = $settings;
        $this->triggersCycle = $triggersCycle;
    }

    /**
     * Handle ticket created event.
     *
     * @param TicketCreated $event
     */
    public function onTicketCreated(TicketCreated $event)
    {
        $ticket = app(Ticket::class)->find($event->ticketId);
        $this->triggersCycle->runAgainstTicket($ticket);

        if ($this->settings->get('tickets.send_ticket_created_notification')) {
            $this->mailer->queue(new TicketCreatedNotification($ticket));
        }
    }

    /**
     * Handle ticket updated event.
     *
     * @param TicketUpdated $event
     */
    public function onTicketUpdated(TicketUpdated $event)
    {
        $this->triggersCycle->runAgainstTicket($event->updatedTicket, $event->originalTicket);
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            'App\Events\TicketCreated',
            'App\Listeners\TicketEventSubscriber@onTicketCreated'
        );

        $events->listen(
            'App\Events\TicketUpdated',
            'App\Listeners\TicketEventSubscriber@onTicketUpdated'
        );
    }

}