<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Provinces extends Model
{
    public $timestamps = true;

    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Provinces;
        }
        return self::$_instance;
    }

    public function city()
    {
        return $this->hasMany(Provinces::class);
    }
}
