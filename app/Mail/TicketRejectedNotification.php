<?php namespace App\Mail;

use App;
use Common\Mail\MailTemplates;
use Common\Settings\Settings;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TicketRejectedNotification extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * @var string
     */
    public $siteName;

    /**
     * Address email should be sent to.
     *
     * @var string
     */
    private $address;

    /**
     * Create a new message instance.
     * @param string $address
     */
    public function __construct($address)
    {
        $this->address = $address;
        $this->siteName = App::make(Settings::class)->get('branding.site_name');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $template = App::make(MailTemplates::class)->getByAction('ticket_rejected_notification');

        return $this->to($this->address)
            ->subject($template['subject'])
            ->view($template['html_view'])
            ->text($template['plain_view']);
    }
}
