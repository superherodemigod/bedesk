<?php namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ActionPolicy
{
    use HandlesAuthorization;

    public function index(User $user)
    {
        return $user->hasPermission('actions.view');
    }
}