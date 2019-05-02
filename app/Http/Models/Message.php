<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'sender_user_id','reciever_user_id','text', 'free'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Message;
        }
        return self::$_instance;

    }

    function store($sender_user_id,$reciever_user_id,$text,$free)
    {
        try {
            $this->create(
                [
                    "sender_user_id" =>$sender_user_id,
                    "reciever_user_id" => $reciever_user_id,
                    "text" =>$text,
                    "free" =>$free
                ]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }    }
}
