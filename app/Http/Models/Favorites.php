<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Favorites extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'favoritor_user_id', 'favorited_user_id', 'favorited'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Favorites;
        }
        return self::$_instance;

    }

    function isFavoritedUser($favorited_user_id)
    {
        return $this->where([
            "favoritor_user_id" => user()['user_id'],
            "favorited_user_id" => $favorited_user_id
        ])->latest()->first();

    }

    function store($favorited_user_id, $blacked)
    {
        try {
            $this->create(
                [
                    "favoritor_user_id" => user()['user_id'],
                    "favorited_user_id" => $favorited_user_id,
                    "favorited" => $blacked
                ]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            dd($e->getMessage());
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    function myFavorites()
    {
       return DB::table('favorites AS m1')->select('m1.*')
            ->leftJoin('favorites as m2', function ($join) {
                $join->on('m1.favorited_user_id', '=', 'm2.favorited_user_id');
                $join->on('m1.id', '<', 'm2.id');
            })
           ->whereNull('m2.id')
           ->where( "m1.favoritor_user_id" , user()['user_id'])
           ->where( "m1.favorited" , 1)
           ->get();

    }

}
