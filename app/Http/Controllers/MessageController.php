<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Models\auth\Users;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Validator;
use App\Http\Models\Messages;
use App\Http\Models\Sessions;

class MessageController extends Controller
{
    private $manageView = 'message.manage.main';
    private $conversationView = 'message.conversation';
    private $limit = 10;

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    function messageView($flag)
    {
        $users = [];
        $getMessages = Messages::_()->getc($flag, user()['user_id'], $this->limit, 0);
        if ($getMessages->count() == 0) {
            return view($this->manageView, ['error' => 'رکوردی یافت نشد!']);
        }
        foreach ($getMessages->toArray() as $val) {
            if ($flag == 'all' || $flag == 'inbox') {
                array_push($users, $val['sender_user_id']);
            }
            if ($flag == 'outbox') {
                array_push($users, $val['reciever_user_id']);
            }
        }

        $getLastMessage = Messages::_()->lastMessage($users, $flag);
        $getSessionUsers = Sessions::_()->lists();
        foreach ($getMessages as $key => $val) {
            dd($val->toArray());
            if (\File::exists(config("constants.upload.register.imageFolder") . $val['reciever_user_id'] . '_main_orginal' . '.jpg')) {
                $getMessages[$key]['profile_image'] = config("constants.upload.register.imageFolder") . $val['reciever_user_id'] . '_main_orginal' . '.jpg';
            } elseif ($val['users']['sex'] == 'f') {
                $getMessages[$key]['profile_image'] = '/img/wman1.png';
            } elseif ($val['users']['sex'] == 'm') {
                $getMessages[$key]['profile_image'] = '/img/me-flat.png';
            }


            foreach ($getLastMessage as $rv) {
                if ($flag == 'outbox') {
                    if ($val['reciever_user_id'] == $rv->reciever_user_id) {
                        $getMessages[$key]['text'] = $rv->text;
                        $getMessages[$key]['time'] = \Morilog\Jalali\Jalalian::forge($rv->created_at)->ago();
                    }
                }
                if ($flag == 'all' || $flag == 'inbox') {
                    if ($val['sender_user_id'] == $rv->sender_user_id) {
                        $getMessages[$key]['text'] = $rv->text;
                        $getMessages[$key]['time'] = \Morilog\Jalali\Jalalian::forge($rv->created_at)->ago();
                    }
                }
            }
            $getMessages[$key]['online_status_icon'] = '/img/0offline.png';
            foreach ($getSessionUsers as $se) {
                if ($val['reciever_user_id'] == $se['user_id']) {
                    if ($se->last_activity + config('constants.userOnlinetime') <= time()) {
                        $getMessages[$key]['online_status_icon'] = '/img/0online.png';
                    }
                }
            }
        }
        return view($this->manageView, ['messages' => $getMessages->toArray(), 'flag' => $flag]);


    }

   function getRecieverInfo($user_id){
       $getReceiverInfo = Users::_()->getUserById($user_id);
       $getSessionUsers = Sessions::_()->lists();

       if (\File::exists(config("constants.upload.register.imageFolder") . $user_id . '_main_orginal' . '.jpg')) {
           $getReceiverInfo['receiver_image'] = config("constants.upload.register.imageFolder") . $user_id . '_main_orginal' . '.jpg';
       } elseif ($getReceiverInfo['sex'] == 'f') {
           $getReceiverInfo['receiver_image'] = '/img/wman1.png';
       } elseif ($getReceiverInfo['sex'] == 'm') {
           $getReceiverInfo['receiver_image'] = '/img/me-flat.png';
       }
       if (\File::exists(config("constants.upload.register.imageFolder") . user()['user_id'] . '_main_orginal' . '.jpg')) {
           $getReceiverInfo['sender_image'] = config("constants.upload.register.imageFolder") . user()['user_id'] . '_main_orginal' . '.jpg';
       } elseif ($getReceiverInfo['sex'] == 'f') {
           $getReceiverInfo['sender_image'] = '/img/wman1.png';
       } elseif ($getReceiverInfo['sex'] == 'm') {
           $getReceiverInfo['sender_image'] = '/img/me-flat.png';
       }

       $getReceiverInfo['online_status_icon'] = '/img/0offline.png';
       foreach ($getSessionUsers as $se) {
           if ($user_id == $se['user_id']) {
               if ($se->last_activity + config('constants.userOnlinetime') > time()) {
                   $getReceiverInfo['online_status_icon'] = '/img/0online.png';
               }
           }
       }
return $getReceiverInfo;
   }

    function conversations($user_id = '', Request $request)
    {
        if ($request->ajax()) {
            $validator = Validator::make($request->all(), [
                'page_number' => ['required', 'integer'],
                'reciever_user_id' => ['required', 'integer'],
            ]);
            if ($validator->fails()) {
                return response([
                    'hasErr' => true,
                    'error' => $validator->errors()->all()
                ]);
            }
            $user_id = $request['user_id'];
            $pageNumber = $request['page_number'];
            $getMessages = Messages::_()->getc('', $user_id, $this->limit, ($pageNumber - 1) * $this->limit);

        } else {
            $pageNumber = 0;
            $getMessages = Messages::_()->getc('', $user_id, $this->limit, $pageNumber);

        }


        foreach ($getMessages as $key => $val) {
            $getMessages[$key]['time'] = \Morilog\Jalali\Jalalian::forge($val['created_at'])->ago();
        }
       ;
        $content= view("partials.conversationsPartial", ['messages' =>  array_reverse($getMessages->toArray()), 'reciever' => $this->getRecieverInfo($user_id),'re'=>false])->render();
        if ($request->ajax()) {
            return response([
                'messages' => $content,
                'count' => $getMessages->count(),
            ]);
        }
        return view($this->conversationView, ['content' =>$content, 'reciever' =>  $this->getRecieverInfo($user_id)]);


    }


    function freeMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reciever_user_id' => ['required'],
            'text' => ['required', 'max:3000'],
            'free' => ['required'],
        ]);
        if ($validator->fails()) {
            return response([
                'hasErr' => true,
                'error' => $validator->errors()->all()
            ]);
        }
        $result = Messages::_()->store(user()['user_id'], $request['reciever_user_id'], $request['text'], 0);
        if ($result['hasErr']) {
            return response([
                'hasErr' => true,
                'error' => 'خطای سیستمی'
            ]);
        }
        return response([
            'hasErr' => false,
            'error' => ''
        ]);
    }

    function realMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reciever_user_id' => ['required'],
            'text' => ['required', 'max:3000'],
        ]);
        if ($validator->fails()) {
            return response([
                'hasErr' => true,
                'error' => $validator->errors()->all()
            ]);
        }
        $result = Messages::_()->store(user()['user_id'], $request['reciever_user_id'], $request['text'], 1);
        if ($result['hasErr']) {
            return response([
                'hasErr' => true,
                'error' => 'خطای سیستمی'
            ]);
        }
        $getMessages=[[
            'sender_user_id'=>user()['user_id'] ,
            'text'=>$request['text'],
            'time'=>\Morilog\Jalali\Jalalian::forge(now())->ago(),
        ]];
        $content= view("partials.conversationsPartial", ['messages' => $getMessages, 'reciever' => $this->getRecieverInfo($request['reciever_user_id']),'re'=>true])->render();
        event( new \App\Events\NewMessage($content,$request['reciever_user_id']));

        return response([
            'hasErr' => false,
            'content' => view("partials.conversationsPartial", ['messages' => $getMessages, 'reciever' => $this->getRecieverInfo($request['reciever_user_id']),'re'=>false])->render()
        ]);
    }


}
