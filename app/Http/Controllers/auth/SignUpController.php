<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Models\auth\Users;
use App\Http\Models\auth\UserRoles;
use App\Http\Models\auth\Log_login;
use Validator;
use App\Http\Models\Provinces;
use jDate;
use Carbon\Carbon;

class SignUpController extends Controller
{

    private $signUpView = 'auth/signUp';
    private $verifyView = 'auth/verify';

    function view()
    {
        $provinces = Provinces::all();
        return view($this->signUpView, compact('provinces', $provinces));
    }

    function store(Request $request)
    {

        $this->validate($request, [
            'fname' => 'required',
            'lname' => 'required',
            'sex' =>  'required',
            'birth_date_year' =>  'required',
            'birth_date_month' => 'required',
            'birth_date_day' => 'required',
            'email' => 'required',
            'province' =>  'required',
            'city' =>  'required',
            'mobile' =>  'required',
            'email' =>  'required',
            'pass1' => 'required',
            'pass2' =>  'required',
            'accept_terms' =>  'required',
        ], ['accept_terms.required' => 'لطفا مطالعه و موافقت نمایید.']);

        $v = \Verta::getGregorian($request["birth_date_year"],$request["birth_date_month"],$request["birth_date_day"]);
//        dd($request["birth_date_year"], $request["birth_date_month"] ,$request["birth_date_day"]);
        $date = Carbon::parse("{$v[0]}-{$v[1]}-{$v{2}} 00:00:00");
        $now = Carbon::now();
        $diff = $date->diffInYears($now);
        $request['birth_date']= $request["birth_date_year"] . '-' . $request["birth_date_month"] . '-' . $request["birth_date_day"];
        $request['age']=$diff;
        $res_add_user = Users::_()->addUser($request);
        if ($res_add_user ['error']) {
            return back()->with('error', $res_add_user['message']);
        }

        $res_data = Users::_()->getUserbyUsername($request['email']);
        if (!isset($res_data->id) || empty($res_data->id)) {
            return back()->with('error', 'خطای سیستمی');
        }
        $request['user_id'] = $res_data->id;
        $res_add_role = UserRoles::_()->addRole($request);
        if ($res_add_role ['error']) {
            return back()->with('error', $res_add_user['message']);
        }

        return back()->with('success', __('errors.sendVerifyCode'));
    }

    function checkVerifyCode($verify_code = '')
    {
        if (!isset($verify_code) || $verify_code == '') {
            return view($this->verifyView)->with('error', __('errors.noVerifyCode'));
        }
        $res_check = Users::_()->checkVerifyCode($verify_code);
        if (!isset($res_check->id)) {
            return view($this->verifyView)->with('error', __('errors.incorrect'));
        }
        if ($res_check->status == 1) {
            return view($this->verifyView)->with('error', __('errors.usedVerificationCode'));
        }
        $res_confirm = Users::_()->confirmUser($verify_code);
        if ($res_confirm['error'] == true) {
            return view($this->verifyView)->with('error', $res_confirm['message']);
        }
        return view($this->verifyView)->with('error', __('errors.successForgetPass'));
    }
}
