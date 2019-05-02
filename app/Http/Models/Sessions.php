<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Sessions extends Model
{
    public $timestamps = true;
    protected $fillable = [];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Sessions;
        }
        return self::$_instance;

    }

    function lists()
    {
        return $this->all();
    }

    function show($id)
    {
       return $this->where('user_id',$id)->first();
    }


}
