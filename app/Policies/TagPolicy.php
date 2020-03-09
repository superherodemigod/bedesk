<?php namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TagPolicy
{
    use HandlesAuthorization;

    public function index(User $user)
    {
        return $user->hasPermission('tags.view');
    }

    public function store(User $user)
    {
        return $user->hasPermission('tags.create');
    }

    public function update(User $user)
    {
        return $user->hasPermission('tags.update');
    }

    public function destroy(User $user)
    {
        return $user->hasPermission('tags.delete');
    }
}
