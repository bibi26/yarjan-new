<?php

namespace App\Http\Models;

use App\Http\Models\auth\Users;
use App\Http\Models\Conversations;
use Request;
use DB;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Messages extends Model
{

    public $timestamps = true;
    protected $fillable = [
        'conversation_id','sender_user_id', 'reciever_user_id', 'text','is_free'];
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
        return $this->belongsTo(Users::class, 'reciever_user_id', 'id');
    }

    function store( $conversation_id,$reciever_user_id='',$text, $free)
    {
        try {
            $getConversation=Conversations::_()->getId($reciever_user_id)->first();
            if(empty($getConversation)){
              $addConversation=  Conversations::create([
                    'one_user_id'=>user()['user_id'],
                    'two_user_id'=>$reciever_user_id
                ]);
                $conversation=$addConversation->id;

            }else{
                $conversation=$conversation_id;
            }
           $result= $this->create(
                [
                    "conversation_id" => $conversation,
                    "sender_user_id" => user()['user_id'],
                    "text" => $text,
                    "is_free" => $free
                ]);
            return  modelResponse(false,'',$result->id);
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return  modelResponse(true, __('errors.errSystem'));
        }
    }

    function getConversations($flag = '', $user_id)
    {
        if ($flag == 'all') {
            $q = "(one_user_id={$user_id} or two_user_id={$user_id})";
        } else if ($flag == 'outbox') {
            $q = "m1.sender_user_id={$user_id}";
        } else if ($flag == 'inbox') {
            $q = "(one_user_id={$user_id} or two_user_id={$user_id}) and m1.sender_user_id <> {$user_id}";
        }
        return DB::select(" 
SELECT m1.conversation_id,m1.text,m1.is_read,m1.sender_user_id,m1.created_at,one_user_id,two_user_id FROM messages m1 LEFT JOIN messages m2
 ON (m1.conversation_id = m2.conversation_id AND m1.id < m2.id)
 join conversations on m1.conversation_id=conversations.id
where {$q} and m2.id IS NULL   order by  m1.id desc
");
    }

    function getConversation($conversation_id, $limit, $offset)
    {
        return Messages::where('conversation_id', $conversation_id)
            ->where('is_delete',0)
            ->limit($limit)
            ->offset($offset)
            ->orderBy('id', 'desc')
            ->get();
    }

    function read($ids)
    {
        try {
            return Messages::whereIn('id', $ids)
                ->update([
                    'is_read'=>1,
                    'read_at'=>  Carbon::now(),
                    'read_by'=>user()['user_id'],
                ]);
            return  modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return  modelResponse(true, __('errors.errSystem'));
        }
    }

    function del($id)
    {
        try {
            return Messages::where('id', $id)
                ->update([
                    'is_delete'=>1,
                    'delete_at'=>  Carbon::now(),
                    'delete_by'=>user()['user_id'],
                ]);
            return  modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return  modelResponse(true, __('errors.errSystem'));
        }

    }


    function checkMessage($id)
    {
        return Messages::where(['id'=> $id,'sender_user_id'=>user()['user_id']])->first();
    }

}
