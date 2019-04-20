<?php

namespace App\Http\Models\model;

use DB;
use Illuminate\Database\Eloquent\Model;

class Models extends Model
{

    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Models;
        }
        return self::$_instance;
    }

    public function addImage($images)
    {

        DB::beginTransaction();

        try {
            foreach ($images as $img)
            {

                DB::table('model_uploads')
                    ->insert(['user_id'=>user()['user_id'],'name'=>$img]);
            }
            DB::commit();

            return ['hasErr'=>false,'msg'=>'' ];
        } catch (\Exception $e) {
            DB::rollback();

            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
        return true;
        
    }

}
