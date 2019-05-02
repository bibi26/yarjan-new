<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Validator;
use App\Http\Models\Message;

class MessageController extends Controller
{
    private $view = '';

    function freeMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'reciever_user_id' =>['required'],
            'text' =>['required','max:3000'],
            'free' =>['required'],
        ]);
        if ($validator->fails()) {
            return response([
                'hasErr' => true,
                'error' => $validator->errors()->all()
            ]);
        }
        $result = Message::_()->store(user()['user_id'],$request['reciever_user_id'],$request['text'], 0);
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
            'reciever_user_id' =>['required'],
            'text' =>['required','max:3000'],
        ]);
        if ($validator->fails()) {
            return response([
                'hasErr' => true,
                'error' => $validator->errors()->all()
            ]);
        }
        $result = Message::_()->store(user()['user_id'],$request['reciever_user_id'],$request['text'], 1);
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
