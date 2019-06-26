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

class Users extends BaseModel
{

    public $timestamps = true;

    protected $fillable = [
        'username', 'password', 'verify_code', 'email', 'fname', 'lname','nick_name', 'sex', 'birth_date', 'age', 'province', 'city', 'username',
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
        return $this->belongsTo(Provinces::class,'province_id','id');
    }

    public function cities()
    {
        return $this->belongsTo(Cities::class,'city_id','id');
    }

    public function getCurrentUser()
    {
        return Users::with(['provinces','cities'])->where('id',user()['user_id'])->first();
    }

    public function getUserById($user_id)
    {
        return Users::with(['provinces','cities'])->where('id',$user_id)->first();
    }

    public function lists($flag='',$data='',$sex='',$limit=100000000,$offset=0)
    {

        if($flag=='visits' || $flag=='favorites' || $flag=='blacks' || $flag=='onlines'){
            $total=  Users::with(['provinces','cities'])->where('id','<>', user()['user_id'])->where('sex','<>', $sex)->where('confirm', 'accept')->whereIn('id',$data);
        }else{

            $total=  Users::with(['provinces','cities'])->where('id','<>', user()['user_id'])->where('sex','<>', $sex)->where('confirm', 'accept');
    }
       return $total->limit($limit)->offset($offset)->get();
    }

    public function getUserbyUserId($userId)
    {
        return Users::where(['id' => $userId])->first();
    }

    public function getUserbyUsername($username)
    {
        return Users::where(['username' => $username])->first();
    }

    public function addUser($input)
    {
        try {
            Users::updateOrCreate(['username' => $input["email"]], [
                'fname' => $input["fname"],
                'lname' => $input["lname"],
                'sex' => $input["sex"],
                'birth_date' => $input["birth_date"],
                'age' => $input["age"],
                'province' => $input["province"],
                'city' => $input["city"],
                'email' => $input["email"],
                'username' => $input["email"],
                'mobile' => $input["mobile"],
                'password' => \Hash::make($input["pass1"]),
                'verify_code' => Str::random(20)
            ]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
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
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    public function getUsersInfo()
    {
        return Users::select('users.*', 'roles.name as roleName')->with(['provinces','cities'])
            ->leftJoin('user_roles', function ($join) {
                $join->on('users.id', '=', 'user_roles.user_id');
            })
            ->leftJoin('roles', function ($join) {
                $join->on('roles.id', '=', 'user_roles.role_id');
            })
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

    public function sendVerificationCode($user_id)
    {
        try {
            Users::where('id', $user_id)->update(['verify_code' => Str::random(20)]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    public function resetPass($request)
    {
        try {
            Users::where('verify_code', $request['verifyCode'])->update(['password' => \Hash::make($request["pass1"])]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => $e->getMessage()];
        }
    }

    public function step1($input)
    {
        try {
            Users::updateOrCreate(
                ["username" => $input['username']],
                [
                    "username" => $input['username'],
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
                ]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    public function step2($input)
    {
        try {
            Users::updateOrCreate(
                ["username" => $input['username']],
                [
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
                ]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    public function step3($input)
    {
        try {
            Users::updateOrCreate(
                ["username" => $input['username']],
                [
                    "username" => $input['username'],
                    "i_am" => $input["i_am"],
                    "you_are" => $input["you_are"],
                    "step3" => 1
                ]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
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
            Users::updateOrCreate(
                ["username" => $input['username']],
                $data);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    public function step5($input)
    {
        $data = [
            "username" => $input['username'],
            "step5" => 1
        ];


        try {
            Users::updateOrCreate(
                ["username" => $input['username']],
                $data);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    public function confirm($request)
    {
        try {
            Users::where('id', $request['user_id'])->update([
                'confirm' => $request['status'],
                'confirm_date' =>  Carbon::now(),
                'confirm_by' => user()['user_id'],
                'confirm_desc' => $request['description']
            ]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

}
