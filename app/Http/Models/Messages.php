<?php

namespace App\Http\Models;

use App\Http\Models\auth\Users;
use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'sender_user_id', 'reciever_user_id', 'text'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Messages;
        }
        return self::$_instance;

    }

    public function users()
    {
        return $this->belongsTo(Users::class, 'sender_user_id', 'id');
    }

    function store($sender_user_id, $reciever_user_id, $text, $free)
    {
        try {
            $this->create(
                [
                    "sender_user_id" => $sender_user_id,
                    "reciever_user_id" => $reciever_user_id,
                    "text" => $text,
                    "free" => $free
                ]);
            return ['hasErr' => false, 'msg' => ''];
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    function getc($flag='',$user_id,$limit,$offset)
    {
        if ($flag == 'outbox') {
            return $this
                ->select('id','reciever_user_id', 'sender_user_id')
                ->with('users')
                ->where('delete', 0)
                ->where('sender_user_id',$user_id)
                ->distinct('reciever_user_id')
                ->limit($limit)
                ->offset($offset)
                ->orderBy('id','desc')
                ->get();

        }else if($flag=='all' || $flag=='inbox') {
            return $this
                ->select('id','reciever_user_id', 'sender_user_id')
                ->with('users')
                ->where('delete', 0)
                ->where('reciever_user_id', $user_id)
                ->distinct('sender_user_id')
                ->limit($limit)
                ->offset($offset)
                ->orderBy('id','desc')
                ->get();
        }else{
            $re=[
                $user_id.user()['user_id'],
                user()['user_id'].$user_id
            ];
            return $this
                ->select('*')
                ->with('users')
                ->where('delete', 0)
                ->whereIn(DB::Raw("CONCAT(reciever_user_id,sender_user_id)"),$re)
                ->limit($limit)
                ->offset($offset)
                ->orderBy('id','desc')
                ->get();
        }
    }


    function lastMessage($users, $flag)
    {



        if ($flag == 'outbox') {
            return DB::table('messages AS m1')->select('m1.*')
                ->leftJoin('messages as m2', function ($join) {
                    $join->on('m1.reciever_user_id', '=', 'm2.reciever_user_id');
                    $join->on('m1.id', '<', 'm2.id');
                })
                ->whereNull('m2.id')
                ->whereIn("m1.reciever_user_id", $users)
                ->where("m1.delete", 0)
                ->get();
        }

        if($flag=='all' || $flag=='inbox') {
            return DB::table('messages AS m1')->select('m1.*')
                ->leftJoin('messages as m2', function ($join) {
                    $join->on('m1.sender_user_id', '=', 'm2.sender_user_id');
                    $join->on('m1.id', '<', 'm2.id');
                })
                ->whereNull('m2.id')
                ->whereIn("m1.sender_user_id", $users)
                ->where("m1.delete", 0)
                ->get();
        }
    }

    function last()
    {
//        array_push($users,user()['user_id']);
        return $this
            ->where("reciever_user_id", user()['user_id'])
            ->orWhere("sender_user_id", user()['user_id'])
            ->where("delete", 0)
            ->distinct("sender_user_id", 'reciever_user_id')
            ->orderBy('id', 'DESC')
            ->get();
    }
}
