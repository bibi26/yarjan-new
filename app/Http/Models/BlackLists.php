<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class BlackLists extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'blacker_user_id','blacked_user_id','blacked'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new BlackLists;
        }
        return self::$_instance;

    }

    function isBlackedUser($blacked_user_id)
    {
          return  $this->where([
              "blacker_user_id" => user()['user_id'],
              "blacked_user_id" =>$blacked_user_id
          ])->latest()->first();

    }

    function store($blacked_user_id,$blacked)
    {
        try {
            $this->create(
                [
                    "blacker_user_id" => user()['user_id'],
                    "blacked_user_id" =>$blacked_user_id,
                    "blacked" =>$blacked
                ]);
            return  modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return  modelResponse(true, __('errors.errSystem'));
        }
    }

    function myBlacks()
    {
        return DB::table('black_lists AS m1')->select('m1.*')
            ->leftJoin('black_lists as m2', function ($join) {
                $join->on('m1.blacked_user_id', '=', 'm2.blacked_user_id');
                $join->on('m1.id', '<', 'm2.id');
            })
            ->whereNull('m2.id')
            ->where( "m1.blacker_user_id" , user()['user_id'])
            ->where( "m1.blacked" , 1)
            ->get();

    }


}
