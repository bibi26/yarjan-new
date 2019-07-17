<?php
namespace App\Http\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
class SmsPlanes extends Model
{
    public $timestamps = true;

    protected $fillable = [
        'code',
        'name',
        'price',
        'description'
    ];

    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new SmsPlanes;
        }
        return self::$_instance;
    }

    function show($id)
    {
        return $this->where('code', $id)->first();
    }
}
