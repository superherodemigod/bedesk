<?php namespace App\Http\Controllers;

use App\Services\Ticketing\ReplyRepository;
use Common\Core\Controller;

class DraftUploadsController extends Controller {

    /**
     * Reply repository instance.
     *
     * @var ReplyRepository
     */
    private $replyRepository;

    /**
     * TicketAttachmentsController constructor.
     *
     * @param ReplyRepository $replyRepository
     */
    public function __construct(ReplyRepository $replyRepository)
    {
        $this->replyRepository = $replyRepository;
    }

    /**
     * Detach specified upload from reply.
     *
     * @param integer $replyId
     * @param integer $uploadId
     *
     * @return int
     */
    public function detach($replyId, $uploadId)
    {
        $draft = $this->replyRepository->findOrFail($replyId);

        $this->authorize('destroy', [$draft, 'drafts']);

        $count = $this->replyRepository->detachUploads($draft, [$uploadId]);

        return $this->success(['data' => $count]);
    }
}
