<?php

namespace App\Http\Models\auth;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class ForgetPass extends Model
{
    public function auth($username)
    {
        return DB::table('users')->where(['username' =>$username])->first();
    }

    public function sendVerifyCode($input)
    {
        return DB::table('users')->where('username', $input['username'])->update(['verify_code' => generateRandomString(20)]);
    }

    public function logLogin($input, $user_id, $status, $msg,$file)
    {
        $data = array(
            'file' => $file,
            'user_id' => $user_id,
            'username' => $input['username'],
            'status' => $status,
            'msg' => $msg,
            'ip' => Request::ip(),
            'browser' => $_SERVER['HTTP_USER_AGENT'],
        );
        return DB::table('log_login')
            ->insert($data);

    }
}
