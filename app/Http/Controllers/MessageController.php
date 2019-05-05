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
        $getMessages = Messages::_()->getc($flag, user()['user_id'],100,0);
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

    function conversationView($user_id)
    {
        $getUserInfo = Users::_()->getUserById($user_id);
        $getMessages = Messages::_()->getc('', $user_id,100,0);
        $getSessionUsers = Sessions::_()->lists();

        if (\File::exists(config("constants.upload.register.imageFolder") . $user_id . '_main_orginal' . '.jpg')) {
            $getUserInfo['receiver_image'] = config("constants.upload.register.imageFolder") . $user_id . '_main_orginal' . '.jpg';
        } elseif ($getUserInfo['sex'] == 'f') {
            $getUserInfo['receiver_image'] = '/img/wman1.png';
        } elseif ($getUserInfo['sex'] == 'm') {
            $getUserInfo['receiver_image'] = '/img/me-flat.png';
        }

        if (\File::exists(config("constants.upload.register.imageFolder") . user()['user_id'] . '_main_orginal' . '.jpg')) {
            $getUserInfo['sender_image'] = config("constants.upload.register.imageFolder") . user()['user_id'] . '_main_orginal' . '.jpg';
        } elseif ($getUserInfo['sex'] == 'f') {
            $getUserInfo['sender_image'] = '/img/wman1.png';
        } elseif ($getUserInfo['sex'] == 'm') {
            $getUserInfo['sender_image'] = '/img/me-flat.png';
        }

                    $getUserInfo['online_status_icon'] = '/img/0offline.png';
        foreach ($getSessionUsers as $se) {
            if ($user_id == $se['user_id']) {
                if ($se->last_activity + config('constants.userOnlinetime') > time()) {
        $getUserInfo['online_status_icon'] = '/img/0online.png';
                }
            }
        }


        foreach ($getMessages as $key => $val) {
            $getMessages[$key]['time'] = \Morilog\Jalali\Jalalian::forge($val['created_at'])->ago();

        }
        return view($this->conversationView, ['messages' => $getMessages, 'reciever' => $getUserInfo]);

    }

    function getConversation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'page_number' => ['required','integer'],
            'user_id' => ['required', 'integer'],
        ]);
        if ($validator->fails()) {
            return response([
                'hasErr' => true,
                'error' => $validator->errors()->all()
            ]);
        }
        $result = Messages::_()->get('',$request['user_id'],$this->limit,($request['page_number'] - 1) * $this->limit);
        if (empty($result)) {
            return response([
                'hasErr' => true,
                'error' => 'خطای سیستمی'
            ]);
        }
        return response([
            'hasErr' => false,
            'count' => $result->count(),
            'result' =>$result
        ]);
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
        return response([
            'hasErr' => false,
            'error' => ''
        ]);
    }
}
