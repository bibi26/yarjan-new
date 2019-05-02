<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Visits extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'visited_user_id', 'visitor_user_id'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Visits;
        }
        return self::$_instance;

    }

    function iVisited()
    {
        return  $this->select('visited_user_id')->where('visitor_user_id',user()['user_id'])->distinct('visited_user_id')->get();
    }

    function visitCount()
    {
        return  $this->select(DB::Raw('visited_user_id, COUNT(visited_user_id) as visitCount'))->groupBy('visited_user_id')->get();
    }


    function myVisitors()
    {
        return $this->select( DB::raw('distinct visitor_user_id'))->where('visited_user_id', user()['user_id'])->get();
    }

    function store($visited_user)
    {
        try {
          Visits::create(
                [
                    "visited_user_id" => $visited_user,
                    "visitor_user_id" => user()['user_id'],
                ]);

            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            dd($e->getMessage());
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }


}
