<?php

namespace App\Http\Models\auth;

use App\Http\Models\Cities;
use Illuminate\Foundation\Auth\User;
use Request;
use DB;
use App\BaseModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Http\Models\Provinces;
use Carbon\Carbon;
use Illuminate\Support\Facades\Input;

class Users extends BaseModel
{

    public $timestamps = true;

    protected $fillable = [
        'username', 'password', 'verify_code', 'email', 'fname', 'lname', 'nick_name', 'sex', 'birth_date', 'age', 'province', 'city', 'username',
        'mobile', 'job_status', 'job', 'marriage', 'education', 'field', 'my_income',
        'family_income', 'house', 'car', 'child_count', 'age_older_child', 'step', 'weight', 'height', 'skin_color',
        'health_condition', 'immigration', 'face', 'style', 'nationality', 'life_style', 'i_am', 'you_are',
        's_age_from', 's_age_to', 's_education_from', 's_education_to', 's_marriage_single', 's_marriage_deceased_spouse',
        's_marriage_divorced', 's_location_fellow_citizen', 's_location_fellow_province', 's_location_homeland',
        's_location_abroad', 's_job_status', 's_height_from', 's_height_to', 's_my_income', 's_house', 's_car',
        's_health_condition', 's_child', 's_immigration'];

    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Users;
        }
        return self::$_instance;
    }

    public function provinces()
    {
        return $this->belongsTo(Provinces::class, 'province_id', 'id');
    }

    public function cities()
    {
        return $this->belongsTo(Cities::class, 'city_id', 'id');
    }

    public function getActivetUser()
    {
        return Users::with(['provinces', 'cities'])
            ->where('active', 1)
            ->where('status', 2)
//            ->where('confirm', 'accept')
            ->pluck('id');
    }

    public function getCurrentUser()
    {
        return Users::with(['provinces', 'cities'])->where('id', user()['user_id'])->first();
    }


    public function getUserbyUsername($username)
    {
        return Users::where(['username' => $username])->first();
    }

    public function getUserById($user_id)
    {
        return Users::with(['provinces', 'cities'])->where('id', $user_id)->first();
    }


    public function getUsersInfo()
    {
        return Users::select('users.*', 'roles.name as roleName')->with(['provinces', 'cities'])
            ->leftJoin('user_roles', function ($join) {
                $join->on('users.id', '=', 'user_roles.user_id');
            })
            ->leftJoin('roles', function ($join) {
                $join->on('roles.id', '=', 'user_roles.role_id');
            })
            ->orderByRaw(" FIELD(confirm,'unknown' , 'accept', 'reject')  ")
            ->get();
    }


    public function getUserInfo($username)
    {
        return Users::select('users.*', 'roles.name as roleName')
            ->leftJoin('user_roles', function ($join) {
                $join->on('users.id', '=', 'user_roles.user_id');
            })
            ->leftJoin('roles', function ($join) {
                $join->on('roles.id', '=', 'user_roles.role_id');
            })
            ->where('username', '=', $username)
            ->first();
    }

    public function lists( $isOffline,$data = '', $sex = '', $limit = 100000000, $offset = 0)
    {

        $total = Users::with(['provinces', 'cities'])
            ->where('id', '<>', user()['user_id'])
            ->where('sex', '<>', $sex)
            ->where('confirm', 'accept');
        if (count($data)) {
            $total->whereIn('id', $data);
        }
        if (count($isOffline)) {
            $total->whereNotIn('id', $isOffline);
        }
        $age_from = Input::get('age_from');
        if (isset($age_from)) {
            $total->where('age', '>=', $age_from);
        }

        $age_to = Input::get('age_to');
        if (isset($age_to)) {
            $total->where('age', '<=', $age_to);
        }
        $marriage = Input::get('marriage');

        if (isset($marriage)) {
            $total->where('marriage', $marriage);
        }

        $province = Input::get('province');
        if (isset($province)) {
            $total->where('province_id', $province);
        }

        $city = Input::get('city');
        if (isset($city)) {
            $total->where('city_id', $city);
        }

        $education_from= Input::get('education_from');
        if (isset($education_from)) {
            $total->where('education', '>=', $education_from);
        }

        $education_to = Input::get('education_to');
        if (isset($education_to)) {
            $total->where('education', '<=', $education_to);
        }

        $health_condition = Input::get('health_condition');
        if (isset($health_condition)) {
            $q = '';
            foreach ($health_condition as $condition) {
                $q .= "health_condition='{$condition}' OR ";
            }
            $q = substr($q, 0, -3);

            $total->whereRaw("($q)");
        }

        $height_from = Input::get('height_from');
        if (isset($height_from)) {
            $total->where('height', '>=', $height_from);
        }

        $height_to = Input::get('height_to');
        if (isset($height_to)) {
            $total->where('height', '<=', $height_to);
        }

        $weight_from = Input::get('weight_from');
        if (isset($weight_from)) {
            $total->where('weight', '>=', $weight_from);
        }

        $weight_to = Input::get('weight_to');
        if (isset($weight_to)) {
            $total->where('weight', '<=', $weight_to);
        }

        $skin_color = Input::get('skin_color');
        if (isset($skin_color)) {
            $q = '';
            foreach ($skin_color as $color) {
                $q .= "skin_color='{$color}' OR ";
            }
            $q = substr($q, 0, -3);

            $total->whereRaw("($q)");
        }
        $face = Input::get('face');
        if (isset($face)) {
            $total->where('face', $face);
        }

        $style = Input::get('style');
        if (isset($style)) {
            $total->where('style', $style);
        }

        $house = Input::get('house');
        if (isset($house)) {
            $total->where('house', $house);
        }
        $car = Input::get('car');
        if (isset($car)) {
            $total->where('car', $car);
        }

        $my_income_from = Input::get('my_income_from');
        if (isset($my_income_from)) {
            $total->where('my_income', '>=', $my_income_from);
        }

        $my_income_to = Input::get('my_income_to');
        if (isset($my_income_to)) {
            $total->where('my_income', '<=', $my_income_to);
        }


        $data=$total->orderBy('id', 'desc')->limit($limit)->offset($offset)->get();
        $count=$total->count();
       return modelResponse('','', $data,$count);

    }

    public function addUser($input)
    {
        try {
            Users::updateOrCreate(['username' => $input["email"]], [
                'fname' => $input["fname"],
                'lname' => $input["lname"],
                'nick_name' => $input["nick_name"],
                'sex' => $input["sex"],
                'birth_date' => $input["birth_date"],
                'age' => $input["age"],
                'province_id' => $input["province"],
                'city_id' => $input["city"],
                'email' => $input["email"],
                'username' => $input["email"],
                'mobile' => $input["mobile"],
                'password' => \Hash::make($input["pass1"]),
                'verify_code' => Str::random(20)
            ]);
            return modelResponse(true, __('errors.errSystem'));
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));

        }
    }

    public function checkVerifyCode($cerify_code)
    {
        return Users::where(['verify_code' => $cerify_code])->first();
    }

    public function confirmUser($cerify_code)
    {
        try {
            Users::where('verify_code', $cerify_code)->update(['status' => 1]);
            return modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function sendVerificationCode($user_id)
    {
        try {
            Users::where('id', $user_id)->update(['verify_code' => Str::random(20)]);
            return modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function resetPass($request)
    {
        try {
            Users::where('verify_code', $request['verifyCode'])->update(['password' => \Hash::make($request["pass1"])]);
            return modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function step1($input, $editInitInfo)
    {
        $dataStep0 = [
            'fname' => $input["fname"],
            'lname' => $input["lname"],
            'nick_name' => $input["nick_name"],
            'sex' => $input["sex"],
            'birth_date' => $input["birth_date_year"] . '-' . $input["birth_date_month"] . '-' . $input["birth_date_day"],
            'age' => $input["age"],
            'province_id' => $input["province"],
            'city_id' => $input["city"],
            'mobile' => $input["mobile"],
            "confirm" => 'unknown',
            "confirm_by" => '',
            "confirm_at" => '',
            "confirm_desc" => ''
        ];
        $dataStep1 = [
            "job_status" => $input["job_status"],
            "job" => $input["job"],
            "marriage" => $input["marriage"],
            "education" => $input["education"],
            "field" => $input["field"],
            "my_income" => $input["my_income"],
            "family_income" => $input["family_income"],
            "house" => $input["house"],
            "car" => $input["car"],
            "child_count" => $input["child_count"],
            "age_older_child" => $input["age_older_child"],
            "step1" => 1
        ];
        $data = $dataStep1;
        if ($editInitInfo == true) {
            $data = array_merge($dataStep0, $dataStep1);
        }
        try {
            Users::where('id', $input['user_id'])
                ->update($data);
            return modelResponse();
        } catch (\Exception $e) {
            dd($e->getMessage());
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function step2($input)
    {
        $data = [
            "username" => $input['username'],
            "weight" => $input["weight"],
            "height" => $input["height"],
            "skin_color" => $input["skin_color"],
            "health_condition" => $input["health_condition"],
            "immigration" => $input["immigration"],
            "face" => $input["face"],
            "style" => $input["style"],
            "nationality" => $input["nationality"],
            "life_style" => $input["life_style"],
            "step2" => 2
        ];
        try {
            Users::where('id', $input['user_id'])
                ->update($data);
            return modelResponse();
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function step3($input)
    {
        $data = [
            "username" => $input['username'],
            "i_am" => $input["i_am"],
            "you_are" => $input["you_are"],
            "step3" => 1,
            "confirm" => 'unknown',
            "confirm_by" => '',
            "confirm_at" => '',
            "confirm_desc" => ''
        ];
        try {
            Users::where('id', $input['user_id'])
                ->update($data);
            return modelResponse();
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function step4($input)
    {
        $data = [
            "username" => $input['username'],
            "s_age_from" => $input["s_age_from"],
            "s_age_to" => $input["s_age_to"],
            "s_age_from" => $input["s_age_from"],
            "s_age_to" => $input["s_age_to"],
            "s_height_from" => $input["s_height_from"],
            "s_height_to" => $input["s_height_to"],
            "s_education_from" => $input["s_education_from"],
            "s_education_to" => $input["s_education_to"],
            "s_my_income" => $input["s_my_income"],
            "s_house" => $input["s_house"],
            "s_car" => $input["s_car"],
            "s_health_condition" => $input["s_health_condition"],
            "s_child" => $input["s_child"],
            "s_immigration" => $input["s_immigration"],
            "s_job_status" => $input["s_job_status"],
            "step4" => 1
        ];
        if (!empty($input['s_marriage_status'])) {
            array_search('single', $input['s_marriage_status']) !== false ? $data['s_marriage_single'] = 1 : $data['s_marriage_single'] = 0;
            array_search('deceased_spouse', $input['s_marriage_status']) !== false ? $data['s_marriage_deceased_spouse'] = 1 : $data['s_marriage_deceased_spouse'] = 0;
            array_search('divorced', $input['s_marriage_status']) !== false ? $data['s_marriage_divorced'] = 1 : $data['s_marriage_divorced'] = 0;
        } else {
            $data['s_marriage_single'] = 0;
            $data['s_marriage_deceased_spouse'] = 0;
            $data['s_marriage_divorced'] = 0;
        }

        if (!empty($input['s_location'])) {
            array_search('fellow_citizen', $input['s_location']) !== false ? $data['s_location_fellow_citizen'] = 1 : $data['s_location_fellow_citizen'] = 0;
            array_search('fellow_province', $input['s_location']) !== false ? $data['s_location_fellow_province'] = 1 : $data['s_location_fellow_province'] = 0;
            array_search('homeland', $input['s_location']) !== false ? $data['s_location_homeland'] = 1 : $data['s_location_homeland'] = 0;
            array_search('abroad', $input['s_location']) !== false ? $data['s_location_abroad'] = 1 : $data['s_location_abroad'] = 0;
        } else {
            $data['s_location_fellow_citizen'] = 0;
            $data['s_location_fellow_province'] = 0;
            $data['s_location_homeland'] = 0;
            $data['s_location_abroad'] = 0;
        }


        try {
            Users::where('id', $input['user_id'])
                ->update($data);
            return modelResponse();
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function step5($input)
    {
        $data = [
            "id" => $input['user_id'],
            "step5" => 1,
        ];


        try {
            Users::where('username', $input['username'])
                ->update($data);
            return modelResponse();
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function step5ResetConfirm($input)
    {
        $data = [
            "username" => $input['user_id'],
            "confirm" => 'unknown',
            "confirm_by" => '',
            "confirm_at" => '',
            "confirm_desc" => ''
        ];
        try {
            Users::where('user_id', $input['user_id'])
                ->update($data);
            return modelResponse();
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }


    public function confirm($input)
    {
        try {
            Users::where('id', $input['user_id'])->update([
                'confirm' => $input['status'],
                'confirm_at' => Carbon::now(),
                'confirm_by' => user()['user_id'],
                'confirm_desc' => $input['description']
            ]);
            return modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    public function deactive($input)
    {
        $status = $input['status'] == 'yes' ? 0 : 1;
        try {
            Users::where('id', $input['user_id'])->update([
                'active' => $status,
                'active_at' => Carbon::now(),
                'active_by' => user()['user_id'],
                'active_desc' => $input['description']
            ]);
            return modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

}
