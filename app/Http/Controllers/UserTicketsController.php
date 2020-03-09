<?php namespace App\Http\Controllers;

use App\User;
use App\Ticket;
use Common\Core\Controller;
use Illuminate\Http\JsonResponse;

class UserTicketsController extends Controller
{
    /**
     * @var User
     */
    private $user;

    /**
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * @param int $userId
     * @return JsonResponse
     */
    public function index($userId)
    {
        $this->authorize('index', [Ticket::class, $userId]);

        $pagination = $this->user->findOrFail($userId)
            ->tickets()
            ->with('tags', 'latest_reply')
            ->withCount('replies')
            ->paginate(15);

        //remove html tags from replies
        $pagination->each(function($ticket) {
            if ($ticket->latest_reply) {
                $ticket->latest_reply->body = str_limit(strip_tags($ticket->latest_reply->body), 335);
            }
        });

        return $this->success(['pagination' => $pagination]);
    }
}
