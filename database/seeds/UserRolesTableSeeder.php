<?php

use Illuminate\Database\Seeder;

class UserRolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['id' => 1, 'user_id' => 26000,'role_id'=>1],
            ['id' => 2, 'user_id' => 26001,'role_id'=>2],
            ['id' => 3, 'user_id' => 26002,'role_id'=>2],

        ];

        foreach ($roles as $role) {
            \App\Http\Models\auth\UserRoles::create($role);
        }

    }
}
