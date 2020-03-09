<?php namespace App\Http\Controllers;

use App\Services\Files\EmailStore;
use App\Services\Ticketing\ReplyRepository;
use Common\Core\Controller;

class OriginalReplyEmailController extends Controller
{
    /**
     * ReplyRepository instance.
     *
     * @var ReplyRepository
     */
    private $repository;

    /**
     * EmailStore service instance.
     *
     * @var EmailStore
     */
    private $emailStore;

    /**
     * TicketsMailController constructor.
     *
     * @param EmailStore $emailStore
     * @param ReplyRepository $repository
     */
    public function __construct(EmailStore $emailStore, ReplyRepository $repository)
    {
        $this->repository = $repository;
        $this->emailStore = $emailStore;
    }

    /**
     * Get original email from which specified reply was created.
     *
     * @param int $replyId
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($replyId)
    {
        $reply = $this->repository->findOrFail($replyId);

        $this->authorize('show', $reply);

        $original = $this->emailStore->getEmailForReply($reply);

        if ( ! $original) return $this->error([], 404);

        return $this->success(['data' => $original]);
    }
}
