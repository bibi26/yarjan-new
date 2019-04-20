<?php

use Illuminate\Database\Seeder;

class ProvincesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $provinces = array(
            0 =>
                array(
                    'id' => 1,
                    'name' => 'تهران',
                ),
            1 =>
                array(
                    'id' => 2,
                    'name' => 'خراسان رضوی',
                ),
            2 =>
                array(
                    'id' => 3,
                    'name' => 'اصفهان',
                ),
            3 =>
                array(
                    'id' => 4,
                    'name' => 'آذربایجان شرقی',
                ),
            4 =>
                array(
                    'id' => 5,
                    'name' => 'البرز',
                ),
            5 =>
                array(
                    'id' => 6,
                    'name' => 'فارس',
                ),
            6 =>
                array(
                    'id' => 7,
                    'name' => 'خوزستان',
                ),
            7 =>
                array(
                    'id' => 8,
                    'name' => 'آذربایجان غربی',
                ),
            8 =>
                array(
                    'id' => 9,
                    'name' => 'قم',
                ),
            9 =>
                array(
                    'id' => 10,
                    'name' => 'کرمانشاه',
                ),
            10 =>
                array(
                    'id' => 11,
                    'name' => 'سیستان و بلوچستان',
                ),
            11 =>
                array(
                    'id' => 12,
                    'name' => 'گیلان',
                ),
            12 =>
                array(
                    'id' => 13,
                    'name' => 'کرمان',
                ),
            13 =>
                array(
                    'id' => 14,
                    'name' => 'همدان',
                ),
            14 =>
                array(
                    'id' => 15,
                    'name' => 'مرکزی',
                ),
            15 =>
                array(
                    'id' => 16,
                    'name' => 'یزد',
                ),
            16 =>
                array(
                    'id' => 17,
                    'name' => 'اردبیل',
                ),
            17 =>
                array(
                    'id' => 18,
                    'name' => 'هرمزگان',
                ),
            18 =>
                array(
                    'id' => 19,
                    'name' => 'قزوین',
                ),
            19 =>
                array(
                    'id' => 20,
                    'name' => 'زنجان',
                ),
            20 =>
                array(
                    'id' => 21,
                    'name' => 'لرستان',
                ),
            21 =>
                array(
                    'id' => 22,
                    'name' => 'کردستان',
                ),
            22 =>
                array(
                    'id' => 23,
                    'name' => 'گلستان',
                ),
            23 =>
                array(
                    'id' => 24,
                    'name' => 'مازندران',
                ),
            24 =>
                array(
                    'id' => 25,
                    'name' => 'خراسان شمالی',
                ),
            25 =>
                array(
                    'id' => 26,
                    'name' => 'بوشهر',
                ),
            26 =>
                array(
                    'id' => 27,
                    'name' => 'خراسان جنوبی',
                ),
            27 =>
                array(
                    'id' => 28,
                    'name' => 'ایلام',
                ),
            28 =>
                array(
                    'id' => 29,
                    'name' => 'چهارمحال و بختیاری',
                ),
            29 =>
                array(
                    'id' => 30,
                    'name' => 'سمنان',
                ),
            30 =>
                array(
                    'id' => 31,
                    'name' => 'کهگیلویه و بویراحمد',
                ),
        );

        foreach ($provinces as $province) {
            \App\Http\Models\Provinces::create($province);
        }
    }
}
