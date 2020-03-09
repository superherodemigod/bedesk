<?php

use App\User;
use Common\Auth\Roles\Role;
use Illuminate\Database\Seeder;

class GroupsTableSeeder extends Seeder
{
    /**
     * @var Role
     */
    private $role;

    /**
     * @var User
     */
    private $user;

    /**
     * @param Role $role
     * @param User $user
     */
    public function __construct(Role $role, User $user)
    {
        $this->user = $user;
        $this->role = $role;
    }

    public function run()
    {
        if (is_null($this->role->where('name', 'customers')->orWhere('default', 1)->first())) {
            $this->role->create([
                'name'        => 'customers',
                'permissions' => json_encode($this->getCustomerPermissions()),
                'default'     => 1,
            ]);
        }

        if (is_null($this->role->where('name', 'agents')->first())) {
            $this->role->create([
                'name'        => 'agents',
                'permissions' => json_encode(
                    array_merge($this->getCustomerPermissions(), $this->getAgentPermissions())
                )
            ]);
        }
    }

    /**
     * Get default permissions for customers role.
     *
     * @return array
     */
    private function getCustomerPermissions()
    {
        return [
            'categories.view' => 1,
            'articles.view'   => 1,
            'tags.view'       => 1,
            'tickets.create'  => 1,
            'files.create'    => 1,
            'pages.view'      => 1,
        ];
    }

    /**
     * @return array
     */
    private function getAgentPermissions()
    {
        return [
            'files.view'            => 1,
            'tickets.view'          => 1,
            'tickets.update'        => 1,
            'tickets.delete'        => 1,
            'replies.view'          => 1,
            'replies.create'        => 1,
            'replies.update'        => 1,
            'replies.delete'        => 1,
            'users.view'            => 1,
            'access.admin'          => 1,
            'canned_replies.view'   => 1,
            'canned_replies.create' => 1,
            'actions.view'          => 1,
            'conditions.view'       => 1,
            'triggers.view'         => 1,
            'triggers.create'       => 1,
        ];
    }
}
