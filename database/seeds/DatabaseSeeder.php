<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(ProvincesTableSeeder::class);
        // $this->call(CitiesTableSeeder::class);
         $this->call(UsersTableSeeder::class);
         $this->call(RolesTableSeeder::class);
         $this->call(UserRolesTableSeeder::class);
         $this->call(MessagesTableSeeder::class);
         $this->call(PackagesTableSeeder::class);
         $this->call(SmsPlanesTableSeeder::class);

    }
}
