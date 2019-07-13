<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Conversations extends Model
{

    public $timestamps = true;
    protected $fillable = [
        'one_user_id','two_user_id'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Conversations;
        }
        return self::$_instance;
    }

    function getId($user_id)
    {
      $current_user_id=user()['user_id'];

        return $this->whereRaw("(one_user_id={$current_user_id} AND  two_user_id={$user_id}) OR (one_user_id={$user_id} AND  two_user_id={$current_user_id})")
            ->first();
    } 



}
