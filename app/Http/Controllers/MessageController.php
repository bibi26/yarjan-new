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
    function conversationView($flag)
    {
        $users = [];
        $getMessages = Messages::_()->getConversations($flag, user()['user_id']);
        if (count($getMessages) == 0) {
            return view($this->manageView, ['error' => 'رکوردی یافت نشد!']);
        }
        $getUsers = Users::_()->getUsersInfo()->toArray();
        $getSessionUsers = Sessions::_()->lists();

        foreach ($getMessages as $key => $val) {
            if ($val->one_user_id == user()['user_id']) {
                $reciever_user_id = $val->two_user_id;
            } else {
                $reciever_user_id = $val->one_user_id;
            }
            $val->time = \Morilog\Jalali\Jalalian::forge($val->created_at)->ago();
            unset($val->one_user_id);
            unset($val->two_user_id);
            unset($val->created_at);
            foreach ($getUsers as $user) {
                if ($user['id'] == $reciever_user_id) {
                    $val->reciever = (object)$user;
                }
                if ($user['id'] == $reciever_user_id) {
                    $val->reciever = (object)$user;
                }
            }
            if (\File::exists(config("constants.upload.register.imageFolder") . $reciever_user_id . '_main_orginal' . '.jpg')) {
                $val->reciever->profile_image = config("constants.upload.register.imageFolder") . $reciever_user_id . '_main_orginal' . '.jpg';
            } elseif ($val->reciever->sex == 'f') {
                $val->reciever->profile_image = '/img/wman1.png';
            } elseif ($val->reciever->sex == 'm') {
                $val->reciever->profile_image = '/img/me-flat.png';
            }
            $val->reciever->online_status_icon = '/img/0offline.png';
            foreach ($getSessionUsers as $se) {
                if ($reciever_user_id== $se['user_id']) {
                    if ($se->last_activity + config('constants.userOnlinetime') <= time()) {
                        $val->reciever->online_status_icon = '/img/0online.png';
                    }
                }
            }
        }

        return view($this->manageView, ['messages' => $getMessages, 'flag' => $flag]);


    }

    function getRecieverInfo($user_id)
    {
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

    function conversations($conversation_id = '', $reciever_id = '', Request $request)
    {
        if ($request->ajax()) {

            $validator = Validator::make($request->all(), [
                'page_number' => ['required', 'integer'],
                'conversation_id' => ['required', 'integer'],
                'reciever_user_id' => ['required', 'integer'],
            ]);
            if ($validator->fails()) {
                return responseHandler(true,  $validator->errors()->all());
            }
            $reciever_id = $request['reciever_user_id'];

            $getMessages = Messages::_()->getConversation($request['conversation_id'], $this->limit, $request['page_number'] * $this->limit);

        } else {
            $pageNumber = 0;
            $getMessages = Messages::_()->getConversation($conversation_id, $this->limit, $pageNumber);

        }


        foreach ($getMessages as $key => $val) {
            $getMessages[$key]['time'] = \Morilog\Jalali\Jalalian::forge($val['created_at'])->ago();
        }

        $messages = [];
        if (count($getMessages) > 0) {
            foreach ($getMessages as $message) {
                if ($message['is_read'] == 0) {
                    $messages[] = $message['id'];
                }
            }
            if (count($messages) > 0) {
                Messages::_()->read($messages);
            }
        }
        $content = view("partials.conversationsPartial", ['messages' => array_reverse($getMessages->toArray()), 'reciever' => $this->getRecieverInfo($reciever_id), 'limit' => $this->limit,'count'=>count($getMessages), 're' => false])->render();
        if ($request->ajax()) {
            return response([
                'messages' => $content,
                'count' => $getMessages->count(),
                'limit' => $this->limit,
            ]);
        }
        return view($this->conversationView, ['content' => $content, 'reciever' => $this->getRecieverInfo($reciever_id), 'conversation_id' => $conversation_id, 'limit' => $this->limit,'count'=>count($getMessages)]);


    }


    function freeMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reciever_user_id' => ['required'],
            'text' => ['required', 'max:3000'],
        ]);
        if ($validator->fails()) {
            return responseHandler(true,'' ,$validator->errors()->all());

        }
        $result = Messages::_()->store(user()['user_id'], $request['reciever_user_id'], $request['text'], 0);
        if ($result['error']) {
            return responseHandler(true,'' ,$validator->errors()->all());

        }
        return responseHandler(false,'' );

    }

    function realMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reciever_user_id' => ['required'],
            'text' => ['required', 'max:3000'],
        ]);
        if ($validator->fails()) {
            return responseHandler(true, $validator->errors()->all() );
        }
        $store = Messages::_()->store(user()['user_id'], $request['reciever_user_id'], $request['text'], 1);
        if ($store['error']) {
            return responseHandler(true, 'خطای سیستمی' );
        }
        $getMessages = [[
            'id' => $store['result'],
            'sender_user_id' => user()['user_id'],
            'text' => $request['text'],
            'time' => \Morilog\Jalali\Jalalian::forge(now())->ago(),
        ]];
        $content = view("partials.conversationsPartial", ['messages' => $getMessages, 'reciever' => $this->getRecieverInfo($request['reciever_user_id']), 're' => true])->render();
        event(new \App\Events\NewMessage($content, $request['reciever_user_id']));

        return response([
            'hasErr' => false,
            'content' => view("partials.conversationsPartial", ['messages' => $getMessages, 'reciever' => $this->getRecieverInfo($request['reciever_user_id']), 're' => false])->render()
        ]);
    }

    function deleteMessage(Request $request){
        $validator = Validator::make($request->all(), [
            'message_id' => ['required','integer'],
        ]);
        if ($validator->fails()) {
            return responseHandler(true, $validator->errors()->all() );

        }
        $checkMessage = Messages::_()->checkMessage($request['message_id']);
        if (empty($checkMessage)) {
            return responseHandler(true, 'کاربر مورد نظر اجازه حذف ندارد' );

        }

        $result = Messages::_()->del($request['message_id']);
        if ($result['error']) {
            return responseHandler(true, 'خطای سیستمی');
        }
        return responseHandler(false);
    }

}
