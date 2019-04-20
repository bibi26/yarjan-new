<?php
namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Http\Models\auth\LogLogin;
use App\Http\Models\auth\UserRoles;
use Illuminate\Http\Request;
use App\Http\Models\auth\Users;
use Validator;
use Illuminate\Support\Facades\Lang;
class SignInController extends Controller
{

    function view()
    {

        return view('auth/signIn');
    }

    function store(Request $request)
    {
        $this->validate($request, [
            'username' => ["required", "email"],
            'pass' => ["required", "min:6"],
        ]);

        $res_login = Users::_()->getUserInfo($request['username']);

        if (!isset($res_login->id) or !\Hash::check($request['pass'], $res_login->password)) {
            $msg_incorrect = Lang::get('errors.failLogin') ;
            LogLogin::_()->addLog("signIn",NULL,'incorrect',$msg_incorrect);
            return back()->withInput()->with('error', $msg_incorrect);
        }
        if (isset($res_login['id']) && $res_login['status'] == 0) {
            $msg_incorrect = Lang::get('errors.noAgree');
            LogLogin::_()->addLog("signIn",NULL,config('constants.UserLogErrCode.noAgree'),$msg_incorrect);
            return back()->withInput()->with('error', $msg_incorrect);
        }

        if (isset($res_login['id']) && $res_login['status'] == 1 && $res_login['id'] == 0) {
            $msg_inactive = Lang::get('errors.noActive');
            LogLogin::_()->addLog("signIn",$res_login['id'],config('constants.UserLogErrCode.noActive'),$msg_inactive);
            return back()->withInput()->with('error', $msg_inactive);
        }

        if ($res_login['roleName']==null) {
            $msg_no_role =Lang::get('errors.noRole');
            LogLogin::_()->addLog("signIn",$res_login['id'],config('constants.UserLogErrCode.noRole'),$msg_no_role);
            return back()->withInput()->with('error', $msg_no_role);
        }

        LogLogin::_()->addLog("signIn",$res_login['id'],config('constants.UserLogErrCode.successLogin'),'successLogin');
        $session_login = array(
            'user_type' => 'user',
            'user_id' => $res_login['id'],
            'username' => $request['username'],
            'role' => $res_login['roleName'],
        );
        session('ff','key');
        $cookie = cookie('LOGEDIN', serialize($session_login), config('constants.cookieAliveTime'));
        return \Redirect::to('/step1')->cookie($cookie);
    }

}
