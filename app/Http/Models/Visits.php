<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Visits extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'visited_user', 'visitor_user'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Visits;
        }
        return self::$_instance;

    }

    function lists()
    {
        return  $this->select(DB::Raw('visitor_user, COUNT(*) as visitCount'))->groupBy('visitor_user')->get();
    }

    function store($visited_user)
    {
        try {
          Visits::create(
                [
                    "visited_user" => $visited_user,
                    "visitor_user" => user()['user_id'],
                ]);

            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }


}
