<?php namespace App\Services\Triggers\ValueOptions;

use Auth;
use Common\Auth\UserRepository;
use Illuminate\Support\Collection;

class AgentIdValueOptions implements ValueOptionsInterface  {

    /**
     * UserRepository Instance.
     *
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Get select options for agents:id value
     *
     * @return Collection
     */
    public function getOptions()
    {
        //get all current agents
        //TODO: fetch by 'tickets.update' permission on user and user roles via join
        $users = collect($this->userRepository->paginateUsers([
            'role_name' => 'agents',
            'per_page'   => 25,
        ])->items());

        //we need only agent display name and id
        $users = $users->map(function($user) {
            return ['name' => $user->display_name, 'value' => $user->id];
        });

        //add currently logged in user to options array
        $users->prepend(['name' => '(current user)', 'value' => Auth::user()->id]);

        return $users;
    }
}