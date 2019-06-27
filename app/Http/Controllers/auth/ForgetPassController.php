<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Http\Models\auth\Users;
use App\Http\Models\auth\LogLogin;

class ForgetPassController extends Controller
{
    protected $forgetPassView ='auth/forgetPass';


    function view()
    {
        return view($this->forgetPassView);
    }

    function store(Request $request)
    {
        $this->validate($request,  [
            'username' => ["required", "email"],
        ]);

        $res_check_uniq = Users::_()->getUserbyUsername($request['username']);
        if (!isset($res_check_uniq->id)) {
            $msg_incorrect =__('errors.incorrect');
            LogLogin::_()->addLog("forgetPass",NULL,config('constants.UserLogErrCode.incorrect'),$msg_incorrect);
            return back()->withInput()->with('error', $msg_incorrect);
        }

        if (isset($res_check_uniq->id) && $res_check_uniq->status == 0) {
            $msg_incorrect = __('errors.noAgree');
            LogLogin::_()->addLog("forgetPass",$res_check_uniq->id,config('constants.UserLogErrCode.noAgree'),$msg_incorrect);
            return back()->withInput()->with('error', $msg_incorrect);
        }

        if (isset($res_check_uniq->id) && $res_check_uniq->status==1 && $res_check_uniq->active==0) {
            $msg_inactive=__('errors.noActive');
            LogLogin::_()->addLog("forgetPass",$res_check_uniq->id,config('constants.UserLogErrCode.noActive'),$msg_inactive);
            return back()->withInput()->with('error',$msg_inactive );
        }

        $res_send_code=Users::_()->sendVerificationCode($res_check_uniq->id);
        if ($res_send_code ['error']) {
            return back()->with('error', $res_send_code['message']);
        }
        LogLogin::_()->addLog("forgetPass",$res_check_uniq->id,config('constants.UserLogErrCode.sendVerifyCode'),'sendVerifyCode');

        return back()->with('success', __('errors.sendVerifyCode'));
    }



}
