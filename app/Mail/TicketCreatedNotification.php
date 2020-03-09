<?php namespace App\Mail;

use App;
use App\Ticket;
use Common\Mail\MailTemplates;
use Common\Settings\Settings;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TicketCreatedNotification extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Ticket model instance.
     *
     * @var Ticket
     */
    public $ticket;

    /**
     * @var string
     */
    public $siteName;

    /**
     * Create a new message instance.
     *
     * @param Ticket $ticket
     */
    public function __construct(Ticket $ticket)
    {
        $this->ticket = $ticket;
        $this->siteName = App::make(Settings::class)->get('branding.site_name');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $template = App::make(MailTemplates::class)->getByAction('ticket_created_notification', [
            'ticket_subject' => $this->ticket->subject
        ]);

        return $this->to($this->ticket->user->email)
            ->subject($template['subject'])
            ->view($template['html_view'])
            ->text($template['plain_view']);
    }
}
