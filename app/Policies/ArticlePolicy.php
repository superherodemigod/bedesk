<?php namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ArticlePolicy
{
    use HandlesAuthorization;

    public function index(User $user)
    {
        return $user->hasPermission('articles.view');
    }

    public function show(User $user)
    {
        return $user->hasPermission('articles.view');
    }

    public function store(User $user)
    {
        return $user->hasPermission('articles.create');
    }

    public function update(User $user)
    {
        return $user->hasPermission('articles.update');
    }

    public function destroy(User $user)
    {
        return $user->hasPermission('articles.delete');
    }
}
