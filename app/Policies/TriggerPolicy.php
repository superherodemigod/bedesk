<?php namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TriggerPolicy
{
    use HandlesAuthorization;

    public function index(User $user)
    {
        return $user->hasPermission('triggers.view');
    }

    public function show(User $user)
    {
        return $user->hasPermission('triggers.view');
    }

    public function store(User $user)
    {
        return $user->hasPermission('triggers.create');
    }

    public function update(User $user)
    {
        return $user->hasPermission('triggers.update');
    }

    public function destroy(User $user)
    {
        return $user->hasPermission('triggers.delete');
    }
}