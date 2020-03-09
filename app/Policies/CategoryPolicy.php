<?php namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
{
    use HandlesAuthorization;

    public function show(User $user)
    {
        return $user->hasPermission('categories.view');
    }

    public function index(User $user)
    {
        return $user->hasPermission('categories.view');
    }

    public function store(User $user)
    {
        return $user->hasPermission('categories.create');
    }

    public function update(User $user)
    {
        return $user->hasPermission('categories.update');
    }

    public function destroy(User $user)
    {
        return $user->hasPermission('categories.delete');
    }
}
