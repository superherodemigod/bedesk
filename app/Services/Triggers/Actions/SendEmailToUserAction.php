<?php namespace App\Services\Triggers\Actions;

use App\Ticket;
use App\Action;
use App\Mail\NotifyUser;
use Common\Auth\UserRepository;
use Illuminate\Mail\Mailer;

class SendEmailToUserAction implements TriggerActionInterface {

    /**
     * @var Mailer
     */
    private $mailer;

    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * @param Mailer $mailer
     * @param UserRepository $userRepository
     */
    public function __construct(Mailer $mailer, UserRepository $userRepository)
    {
        $this->mailer = $mailer;
        $this->userRepository = $userRepository;
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
        $data = json_decode($action['pivot']['action_value'], true);

        $user = $this->userRepository->findOrFail($data['agent_id']);
        $ticket->load('latest_replies');
        $data['ticket'] = $ticket->toArray();
        $data['user'] = $user->toArray();

        $this->mailer->queue(new NotifyUser($data));

        return $ticket;
    }
}