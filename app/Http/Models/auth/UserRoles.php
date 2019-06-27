<?php

namespace App\Http\Models\auth;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class UserRoles extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'user_id',
        'role_id'
    ];

    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new UserRoles;
        }
        return self::$_instance;
    }

//    function user_role(){
//        $this->belongsTo(SignIn::class,'user_id','id');
//    }

    public function addRole($input)
    {
        try {
            UserRoles::updateOrCreate(['user_id' => $input["user_id"],'role_id'=>2], [
                'user_id' =>  $input["user_id"],
                'role_id'=>2
            ]);
            return  modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return  modelResponse(true, __('errors.errSystem'));
        }
    }
}
