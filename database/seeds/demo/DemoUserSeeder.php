<?php

use App\User;
use Common\Auth\Roles\Role;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use Illuminate\Filesystem\Filesystem;

class DemoUserSeeder extends Seeder
{
    /**
     * @var User
     */
    private $user;

    /**
     * @var Filesystem
     */
    private $fs;

    /**
     * @var Faker
     */
    private $faker;

    /**
     * @var Role
     */
    private $role;

    /**
     * DemoSeeder constructor.
     * @param User $user
     * @param Role $role
     * @param Filesystem $fs
     * @param Faker $faker
     */
    public function __construct(User $user, Role $role, Filesystem $fs, Faker $faker)
    {
        $this->fs = $fs;
        $this->user = $user;
        $this->faker = $faker;
        $this->role = $role;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->seedSpecialDemoUsers();
        $userIds = $this->seedDemoCustomers();
        $this->attachCustomerGroupToUsers($userIds);
    }

    /**
     * Seed special users (agent, admin) for demo site.
     */
    private function seedSpecialDemoUsers()
    {
        $password = Hash::make('demo');

        $this->user->insert([
            ['email' => 'admin@demo.com', 'permissions' => '{"superAdmin": 1, "admin": 1}', 'password' => $password, 'first_name' => $this->faker->firstName, 'last_name' => $this->faker->lastName],
            ['email' => 'agent@demo.com', 'permissions' => '', 'password' => $password, 'first_name' => $this->faker->firstName, 'last_name' => $this->faker->lastName]
        ]);

        $agentGroup = $this->role->where('name', 'agents')->first();
        $agentUser = $this->user->where('email', 'agent@demo.com')->first();
        $agentUser->roles()->attach($agentGroup->id);
    }

    /**
     * Seed example customers for demo site.
     *
     * @return Collection
     */
    private function seedDemoCustomers()
    {
        $users = collect([]);
        $password = Hash::make('demo');

        for ($i = 0; $i <= 30; $i++) {
            $email = $i === 0 ? 'customer@demo.com' : $this->faker->email;

            $users->push([
                'email' => $email,
                'first_name' => $this->faker->firstName,
                'last_name' => $this->faker->lastName,
                'avatar' => str_replace('http://', 'https://', $this->faker->imageUrl(64, 64)),
                'password' => $password,
            ]);
        }

        $this->user->insert($users->toArray());

        return $this->user->whereIn('email', $users->pluck('email'))->get()->pluck('id');
    }

    /**
     * Attach customer role to example users.
     *
     * @param Collection $userIds
     */
    private function attachCustomerGroupToUsers($userIds)
    {
        $customerGroup = $this->role->where('name', 'customers')->first();

        $pivot = $userIds->map(function ($id) use ($customerGroup) {
            return ['user_id' => $id, 'role_id' => $customerGroup->id];
        })->toArray();

        DB::table('user_role')->insert($pivot);
    }
}
