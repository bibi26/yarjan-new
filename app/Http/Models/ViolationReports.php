<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class ViolationReports extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'reporter_user_id','violation_user_id', 'reason'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new ViolationReports;
        }
        return self::$_instance;

    }

    function store($violation_user_id,$reason)
    {
        try {
            ViolationReports::create(
                [
                    "reporter_user_id" => user()['user_id'],
                    "violation_user_id" =>$violation_user_id,
                    "reason" => $reason,
                ]);

            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

}
