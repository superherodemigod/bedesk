<?php namespace App\Events;

use App\Reply;
use App\Ticket;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TicketReplyCreated implements ShouldQueue, ShouldBroadcast
{
    use SerializesModels, InteractsWithSockets;

    /**
     * @var int
     */
    public $creatorId;

    /**
     * @var string
     */
    public $replyType;

    /**
     * @var int
     */
    public $replyId;

    /**
     * @param Ticket $ticket
     * @param Reply $reply
     * @internal param Reply $reply
     */
    public function __construct(Ticket $ticket, Reply $reply)
    {
        $this->dontBroadcastToCurrentUser();

        $this->creatorId = $ticket->user_id;
        $this->replyId = $reply->id;
        $this->replyType = $reply->type;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return [new PrivateChannel('tickets.global'), new PrivateChannel("App.User.{$this->creatorId}")];
    }

    /**
     * Determine if this event should broadcast.
     *
     * @return bool
     */
    public function broadcastWhen()
    {
        return $this->replyType !== 'drafts';
    }
}
