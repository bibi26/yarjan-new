<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class TicketAgentAnswers extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'user_id', 'category_id','subject'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new TicketAgentAnswers;
        }
        return self::$_instance;

    }
//
//    public function lists($ticket_id)
//    {
//        return $this->where(['user_id'=>user()['user_id']])->get();
//    }

//    function store($data)
//    {
//        try {
//          $this->create(
//                [
//                    "user_id" => user()['user_id'],
//                    "comment" => $data['comment'],
//                    "ticket_id" => $data['ticket_id'],
//                ]);
//            return  modelResponse();
//        } catch (\Exception $e) {
//            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
//            return  modelResponse(true, __('errors.errSystem'));
//        }
//    }


}
