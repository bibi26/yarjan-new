<?php
use Illuminate\Database\Seeder;

class PackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $packages= [
            ['code' => 12, 'name' => 'عضویت ویژه 12 ماهه','price'=>600000,'description'=>'برابر 365 روز و معادل هر ماه 50,000تومان'],
            ['code' => 6, 'name' => 'عضویت ویژه 6 ماهه','price'=>500000,'description'=>'برابر 180 روز و معادل هر ماه 83,000تومان'],
            ['code' => 3, 'name' => 'عضویت ویژه 3 ماهه','price'=>300000,'description'=>'برابر 30 روز و معادل هر ماه 100,000تومان'],
            ['code' => 1, 'name' => 'عضویت ویژه 1 ماهه','price'=>120000,'description'=>'برابر 1 روز و معادل هر ماه 120,000تومان']
        ];

        foreach ($packages as $package) {
        \App\Http\Models\Packages::create($package);
        }
    }

}
