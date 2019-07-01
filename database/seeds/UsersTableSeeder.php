<?php

use Illuminate\Database\Seeder;
use Josh\Faker\Faker;
use App\Http\Models\Provinces;
use App\Http\Models\Cities;

class UsersTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    function fieldFaker()
    {

        return [
            0 => 'کامپیوتر',
            1 => 'برق',
            2 => 'ریاضی فیزیک',
            3 => 'تجربی',
            4 => 'معماری',
            5 => 'گرافیک',
            6 => 'علوم انسانی'
        ];
    }

    function nameSex()
    {

        return [
            'حمید' => 'm',
            'علی' => 'm',
            'المیرا' => 'f',
            'سحر' => 'f',
            'حسام' => 'm',
            'پروانه' => 'f',
            'ترانه' => 'f',
            'عطیه' => 'f',
            'شیما' => 'f',
            'لیلا' => 'f',
            'مهدی' => 'm',
            'پرستو' => 'f',
            'عباس' => 'm',
            'مریم' => 'f',
            'منیر' => 'f',
            'نگار' => 'f',
            'شایان' => 'm',
            'علیرضا' => 'm',
            'وحید' => 'm',
            'حسن' => 'm',
            'سجاد' => 'm',
            'شقایق' => 'f',
            'ریحانه' => 'f',
            'مرجان' => 'f',
            'شاهرخ' => 'm',
            'زهرا' => 'f'
        ];
    }

    function convert($array)
    {
        $data = [];
        foreach ($array as $key => $value) {
            $data[] = $key;
        }
        return $data;
    }

    function confirm()
    {
        switch (mt_rand(1, 3)) {
            case 1:
                return 'accept';
            case 2:
                return 'reject';
            case 3:
                return 'unknown';
        }
    }

    public function run()
    {
        $jobStatus = $this->convert(jobStatus('', true));
        $marriageStatus = $this->convert(marriageStatus('', true));
        $educationStatus = $this->convert(educationStatus('', true));
        $incomeStatus = $this->convert(incomeStatus('', true));
        $houseStatus = $this->convert(houseStatus('', true));
        $carStatus = $this->convert(carStatus('', true));
        $skinColorStatus = $this->convert(skinColorStatus('', true));
        $beliefStatus = $this->convert(beliefStatus('', true));
        $healthConditionStatus = $this->convert(healthConditionStatus('', true));
        $nationalityStatus = $this->convert(nationalityStatus('', true));
        $lifeStyleStatus = $this->convert(lifeStyleStatus('', true));
        $sexStatus = $this->convert(sexStatus('', true));
        for ($i = 0; $i < 30; $i++) {
            $province = Provinces::where('id', mt_rand(1, Provinces::count()))->get()->toArray()[0]['id'];
            $countCity = Cities::where('province_id', $province)->count();
            $itemsCity = Cities::where('province_id', $province)->where('id','like','%0000')->get()->toArray();
            $email = str_random(8);
            $city = $itemsCity[mt_rand(0, $countCity - 1)]['id'];
            $name = Faker::firstname();
            \App\Http\Models\auth\Users::insert([
                'username' => $email . '@gmail.com',
                'email' => $email . '@gmail.com',
                'password' => bcrypt('123456'),
                'status' => mt_rand(0, 2),
                'active' => mt_rand(0, 1),
                'confirm' => $this->confirm(),
                'mobile' => Faker::mobile(),
                'sex' => isset($this->nameSex()[$name]) ? $this->nameSex()[$name] : null,
                'province_id' => $province,
                'city_id' => $city,
                'fname' => $name,
                'lname' => Faker::lastname(),
                'age' => Faker::age(),
                'birth_date' => mt_rand(1350, 1375) . '-' . mt_rand(1, 12) . '-' . mt_rand(1, 30),
                'verify_code' => generateRandomString(40),
                'height' => mt_rand(50, 210),
                'weight' => mt_rand(40, 140),
                'job_status' => $jobStatus[mt_rand(0, count($jobStatus) - 1)],
                'job' => Faker::company(),
                'marriage' => $marriageStatus[mt_rand(0, count($marriageStatus) - 1)],
                'education' => $educationStatus[mt_rand(0, count($educationStatus) - 1)],
                'field' => $this->fieldFaker()[mt_rand(0, count($this->fieldFaker()) - 1)],
                'my_income' => $incomeStatus[mt_rand(0, count($incomeStatus) - 1)],
                'family_income' => $incomeStatus[mt_rand(0, count($incomeStatus) - 1)],
                'house' => $houseStatus[mt_rand(0, count($houseStatus) - 1)],
                'car' => $carStatus[mt_rand(0, count($carStatus) - 1)],
                'child_count' => mt_rand(1, 3),
                'age_older_child' => mt_rand(1, 30),
                'skin_color' => $skinColorStatus[mt_rand(0, count($skinColorStatus) - 1)],
                // 'belief' => $beliefStatus[mt_rand(0, count($beliefStatus) - 1)],
                'health_condition' => $healthConditionStatus[mt_rand(0, count($healthConditionStatus) - 1)],
                'immigration' => mt_rand(0, 1),
                'face' => mt_rand(1, 5),
                'style' => mt_rand(1, 5),
                'nationality' => $nationalityStatus[mt_rand(0, count($nationalityStatus) - 1)],
                'life_style' => $lifeStyleStatus[mt_rand(0, count($lifeStyleStatus) - 1)],
                'i_am' => Faker::address(),
                'you_are' => Faker::address(),
                'step1' => 1,
                'step2' => 1,
                'step3' => 1,
                'step4' => 1,
                'step5' => 1
//            $table->string('s_age_from')->nullable();
//            $table->string('s_age_to')->nullable();
//            $table->string('s_education_from')->nullable();
//            $table->string('s_education_to')->nullable();
//            $table->string('s_height_from')->nullable();
//            $table->string('s_height_to')->nullable();
//            $table->string('s_my_income')->nullable();
//            $table->string('s_house')->nullable();
//            $table->string('s_car')->nullable();
//            $table->string('s_job_status')->nullable();
//            $table->string('s_health_condition')->nullable();
//            $table->string('s_child')->nullable();
//            $table->string('s_immigration')->nullable();
//            $table->string('s_marriage_single')->nullable();
//            $table->string('s_marriage_deceased_spouse')->nullable();
//            $table->string('s_marriage_divorced')->nullable();
//            $table->string('s_location_fellow_citizen')->nullable();
//            $table->string('s_location_fellow_province')->nullable();
//            $table->string('s_location_abroad')->nullable();
//            $table->string('s_location_homeland')->nullable();
//            $table->string('step1')->nullable()->default("0");
//            $table->string('step2')->nullable()->default("0");
//            $table->string('step3')->nullable()->default("0");
//            $table->string('step4')->nullable()->default("0");
//            $table->string('step5')->nullable()->default("0");
            ]);
        }
    }

}
