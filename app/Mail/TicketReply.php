<?php namespace App\Mail;

use App;
use Common\Files\FileEntry;
use Common\Mail\MailTemplates;
use Storage;
use App\Reply;
use App\Ticket;
use Swift_Message;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Services\Mail\TicketReferenceHash;
use Illuminate\Contracts\Queue\ShouldQueue;

class TicketReply extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Ticket model instance.
     *
     * @var Ticket
     */
    public $ticket;

    /**
     * @var Reply
     */
    public $reply;

    /**
     * @var string
     */
    public $reference;

    /**
     * TicketReply constructor.
     *
     * @param Ticket $ticket
     * @param Reply $reply
     */
    public function __construct(Ticket $ticket, Reply $reply)
    {
        $this->reply = $reply;
        $this->ticket = $ticket;
        $this->reference = App::make(TicketReferenceHash::class)->makeEmbedForEmail($reply);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $template = App::make(MailTemplates::class)->getByAction('ticket_reply', [
            'ticket_subject' => $this->ticket->subject
        ]);

        $this->to($this->ticket->user->email)
             ->subject($template['subject'])
             ->view($template['html_view'])
             ->text($template['plain_view']);

        $this->addHeaders();
        $this->addAttachments();

        return $this;
    }

    /**
     * Add ticket reference hash as email x-header.
     */
    private function addHeaders()
    {
        $this->withSwiftMessage(function(Swift_Message $swiftMessage) {
            $messageId = App::make(TicketReferenceHash::class)->makeMessageIdForEmail($this->reply);
            $swiftMessage->setId($messageId);
        });
    }

    /**
     * Add uploads from latest ticket reply to email.
     */
    private function addAttachments()
    {
        if ($this->reply->uploads->isEmpty()) return;

        $basePath = rtrim($this->reply->uploads->first()->getDisk()->getAdapter()->getPathPrefix());

        $this->reply->uploads->each(function(FileEntry $upload) use($basePath) {
            $this->attach($basePath.'/'.$upload->getStoragePath(), [
                'as'   => $upload->name,
                'mime' => $upload->mime,
            ]);
        });
    }
}
