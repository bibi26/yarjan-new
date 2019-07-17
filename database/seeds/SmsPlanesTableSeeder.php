<?php

use Illuminate\Database\Seeder;

class SmsPlanesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $SmsPlanes = [
            ['code' => 1000, 'name' => 'بسته پیامک 1000 تایی', 'price' => 80000],
            ['code' => 500, 'name' => 'بسته پیامک 500 تایی', 'price' => 35000],
            ['code' => 200, 'name' => 'بسته پیامک 200 تایی', 'price' => 20000],
            ['code' => 50, 'name' => 'بسته پیامک 50 تایی', 'price' => 10000]
        ];
        foreach ($SmsPlanes as $SmsPlane) {
            \App\Http\Models\SmsPlanes::create($SmsPlane);
        }
    }

}
