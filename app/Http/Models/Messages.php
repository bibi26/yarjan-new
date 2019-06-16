<?php

namespace App\Http\Models;

use App\Http\Models\auth\Users;
use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{

    public $timestamps        = true;
    protected $fillable       = [
        'sender_user_id', 'reciever_user_id', 'text'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null)
        {
            self::$_instance = new Messages;
        }
        return self::$_instance;
    }

    public function users()
    {
        return $this->belongsTo(Users::class, 'reciever_user_id', 'id');
    }

    function store($sender_user_id, $reciever_user_id, $text, $free)
    {
        try
        {
            $this->create(
                    [
                        "sender_user_id" => $sender_user_id,
                        "reciever_user_id" => $reciever_user_id,
                        "text" => $text,
                        "is_free" => $free
            ]);
            return ['hasErr' => false, 'msg' => ''];
        }
        catch (\Exception $e)
        {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return ['hasErr' => true, 'msg' => \Lang::get('errors.errSystem')];
        }
    }

    function getc($flag = '', $user_id, $limit, $offset)
    {
        if ($flag == 'outbox')
        {
            return $this
<<<<<<< HEAD
                            ->select('id', 'reciever_user_id', 'sender_user_id')
                            ->with('users')
                            ->where('is_delete', 0)
                            ->where('sender_user_id', $user_id)
                            ->distinct('reciever_user_id')
                            ->limit($limit)
                            ->offset($offset)
                            ->orderBy('id', 'desc')
                            ->get();
        }
        else if ($flag == 'all' || $flag == 'inbox')
        {
            return $this
                            ->select('id', 'reciever_user_id', 'sender_user_id')
                            ->with('users')
                            ->where('is_delete', 0)
                            ->where('reciever_user_id', $user_id)
                            ->distinct('sender_user_id')
                            ->limit($limit)
                            ->offset($offset)
                            ->orderBy('id', 'desc')
                            ->get();
        }
        else
        {
            $re = [
                $user_id . user()['user_id'],
                user()['user_id'] . $user_id
            ];
=======
                ->select('id','reciever_user_id', 'sender_user_id')
                ->with('users')
                ->where('is_delete', 0)
                ->where('sender_user_id',$user_id)
                ->distinct('reciever_user_id')
                ->limit($limit)
                ->offset($offset)
                ->orderBy('id','desc')
                ->get();

        }else if($flag=='all' || $flag=='inbox') {        
//SELECT m1.c_id,m1.message,m1.sender_id,one_id,two_id FROM messages m1 LEFT JOIN messages m2
// ON (m1.c_id = m2.c_id AND m1.id < m2.id)
// join conversations on m1.c_id=conversations.id
//where (one_id=1 or two_id=1) and m2.id IS NULL
//            return $this
//                ->select('id','reciever_user_id', 'sender_user_id')
//                ->with('users')
//                ->where('is_delete', 0)
//                ->where('reciever_user_id', $user_id)
//                ->distinct('sender_user_id')
//                ->limit($limit)
//                ->offset($offset)
//                ->orderBy('id','desc')
//                ->get();
            
           return DB::select(" 
SELECT m1.conversation_id,m1.text,m1.sender_user_id,one_user_id,two_user_id FROM messages m1 LEFT JOIN messages m2
 ON (m1.conversation_id = m2.conversation_id AND m1.id < m2.id)
 join conversations on m1.conversation_id=conversations.id
where (one_user_id={$user_id} or two_user_id={$user_id}) and m2.id IS NULL
");
        }else{
>>>>>>> 1c7424fc8e865c67f38fc1b2b673609374e2eeb5
            return $this
                            ->select('*')
                            ->with('users')
                            ->where('is_delete', 0)
                            ->whereIn(DB::Raw("CONCAT(reciever_user_id,sender_user_id)"), $re)
                            ->limit($limit)
                            ->offset($offset)
                            ->orderBy('id', 'desc')
                            ->get();
        }
    }

    function lastMessage($users, $flag)
    {

        if ($flag == 'outbox')
        {
            return DB::table('messages AS m1')->select('m1.*')
                            ->leftJoin('messages as m2', function ($join)
                            {
                                $join->on('m1.reciever_user_id', '=', 'm2.reciever_user_id');
                                $join->on('m1.id', '<', 'm2.id');
                            })
                            ->whereNull('m2.id')
                            ->whereIn("m1.reciever_user_id", $users)
                            ->where("m1.is_delete", 0)
                            ->get();
        }

        if ($flag == 'all' || $flag == 'inbox')
        {
            dd( DB::table('messages AS m1')->select('m1.*')
                ->leftJoin('messages as m2', function ($join) {
                    $join->on('m1.sender_user_id', '=', 'm2.sender_user_id');
                    $join->on('m1.id', '<', 'm2.id');
                })
                ->whereNull('m2.id')
                ->whereIn("m1.sender_user_id", $users)
                ->where("m1.is_delete", 0)
                ->groupBy("m1.reciever_user_id")
                ->toSql());
//            dd(DB::table('messages')
//                            ->where("sender_user_id", user()['user_id'])
//                            ->distinct('reciever_user_id')
//                            ->toSql());
        }
    }

    function last()
    {
//        array_push($users,user()['user_id']);
        return $this
                        ->where("reciever_user_id", user()['user_id'])
                        ->orWhere("sender_user_id", user()['user_id'])
                        ->where("is_delete", 0)
                        ->distinct("sender_user_id", 'reciever_user_id')
                        ->orderBy('id', 'DESC')
                        ->get();
    }

}
