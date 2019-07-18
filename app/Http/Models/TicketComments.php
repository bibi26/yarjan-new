<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class TicketComments extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'user_id', 'comment','ticket_id'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new TicketComments;
        }
        return self::$_instance;

    }

    public function comment()
    {
        return $this->belongsTo(Tickets::class,'ticket_id','id');
    }

    public function lists($ticket_id)
    {
        return $this->where(['user_id'=>user()['user_id'],'ticket_id'=>$ticket_id])->get();
    }

    function store($data)
    {
        try {
          $this->create(
                [
                    "user_id" => user()['user_id'],
                    "comment" => $data['comment'],
                    "ticket_id" => $data['ticket_id'],
                ]);
            return  modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return  modelResponse(true, __('errors.errSystem'));
        }
    }


}
