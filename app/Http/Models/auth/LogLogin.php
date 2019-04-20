<?php

namespace App\Http\Models\auth;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class LogLogin extends Model
{
    public $timestamps = true;

    protected $fillable = [
        'file',
        'user_id',
        'status',
        'msg',
        'ip',
        'browser'
    ];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new LogLogin;
        }
        return self::$_instance;
    }

    function addLog($file,$user_id, $status, $msg)
    {
        return LogLogin::create([
            'file' => $file,
            'user_id' => $user_id,
            'status' => $status,
            'msg' => $msg,
            'ip' => \Request::ip(),
            'browser' => $_SERVER['HTTP_USER_AGENT']
        ]);
    }
}
