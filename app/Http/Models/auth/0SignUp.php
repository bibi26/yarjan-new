<?php

namespace App\Http\Models\auth;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class SignUp extends Model
{
    public function checkUniq($email)
    {

        return DB::table('users')->where(['username'=> $email,'status'=>1])->count();
    }
    public function sendVerifyCode($input)
    {
        $data_user = [
            'username' => $input["email"],
            'password' => \Hash::make($input["pass1"]),
            'verify_code' => generateRandomString(20)
        ];

        foreach ($data_user as $key => $val)
        {
            $insert_user[] = "'" . $val . "'";
        }

        foreach ($data_user as $key => $val)
        {
            $update_user[] = $key . "='" . $val . "'";
        }

        DB::select("INSERT INTO users (" . implode(', ', array_keys($data_user)) . ") VALUES (" . implode(', ', $insert_user) . ") ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id), " . implode(', ', $update_user));
        $user_id= DB::getPdo()->lastInsertId();

        $data_role = [
            'role_id' => 2,
            'user_id' => $user_id
        ];

        foreach ($data_role as $key => $val)
        {
            $insert_role[] = "'" . $val . "'";
        }

        foreach ($data_role as $key => $val)
        {
            $update_role[] = $key . "='" . $val . "'";
        }
        DB::select("INSERT INTO user_role (" . implode(', ', array_keys($data_role)) . ") VALUES (" . implode(', ', $insert_role) . ") ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id), " . implode(', ', $update_role));
        $role_id= DB::getPdo()->lastInsertId();
        return $role_id;
    }

    public function checkVerifyCode($cerify_code)
    {
        return DB::table('users')->where(['verify_code'=> $cerify_code])->first();
    }

    public function confirmUser($cerify_code)
    {
        return DB::table('users')->where('verify_code', $cerify_code)->update(['status' => 1]);
    }


}
