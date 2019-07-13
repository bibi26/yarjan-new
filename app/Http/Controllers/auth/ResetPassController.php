<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Http\Models\auth\Users;

class ResetPassController extends Controller
{
    protected $resetPassView = 'auth/resetPass';
    private $verifyView = 'auth/verify';


//    function view()
//    {
//        return view($this->resetPassView);
//    }

    function store(Request $request)
    {
        $this->validate($request, [
            'verifyCode' => ["required"],
            'pass1' => ["required", "min:6", "same:pass2"],
            'pass2' => ["required"]]);

        $res_check = Users::_()->checkVerifyCode($request['verifyCode']);
        if (!isset($res_check->id)) {
            return view($this->resetPassView)->with('eFix', __('errors.incorrect'));
        }

        if ($res_check->status == 0) {
            return view($this->resetPassView)->with('eFix', __('errors.noAgree'));
        }

        if ($res_check->active == 0) {
            return view($this->resetPassView)->with('eFix', __('errors.noActive'));
        }

        $res_data = Users::_()->resetPass($request);
        if ($res_data ['error']) {
            return back()->with('eFix', $res_data['message']);
        }

        return view($this->verifyView)->with('success',__('errors.successResetPass'));

    }


    function checkVerifyCode($verify_code = '')
    {
        if (!isset($verify_code) || $verify_code == '') {
            return view($this->verifyView)->with('eFix', __('errors.noVerifyCode'));
        }

        $res_check = Users::_()->checkVerifyCode($verify_code);
        if (!isset($res_check->id)) {
            return view($this->verifyView)->with('eFix', __('errors.incorrect'));

        }

        if ($res_check->status == 0) {
            return view($this->verifyView)->with('eFix', __('errors.noAgree'));
        }

        if ($res_check->active == 0) {
            return view($this->verifyView)->with('eFix', __('errors.noActive'));
        }
        return view($this->resetPassView)->with('x', 'gg');


    }
}
