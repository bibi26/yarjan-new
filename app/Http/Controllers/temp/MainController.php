<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\Main as MainModel;

use Validator;

class MainController extends Controller
{
    protected $MainModel;

    public function __construct()
    {
        $this->MainModel = new MainModel();
    }

    function about()
    {
        dd(phpinfo());
        return view('about');
    }
    function questionnaire()
    {
        return view('questionnaire');
    }

    function showContactUsView()
    {
        return view('contactUs');
    }

    function ContacUs(Request $request)
    {
        $input = array(
            "mobile" => request('mobile'),
            "email" => request('email'),
            "message" => request('message'),
            "captcha" => request('captcha')
        );
        $rules = [
            'mobile' => ["nullable", "regex:/^09[0-9]{9}+$/u"],
            'email' => ["nullable", "email"],
            'message' => ["required"],
            'captcha' => ["required", "captcha"]
        ];

        $messages = [
            'mobile.regex' => 'شماره همراه معتبر نمی باشد.',
            'email.email' => 'ایمیل معتبر نمی باشد.',
            'message.required' => 'پیام را وارد نمایید.',
            'captcha.required' => 'کد امنیتی را وارد نمایید.',
            'captcha.captcha' => 'کد امنیتی معتبر نمی باشد.'
        ];

        $this->validate($request, $rules, $messages);
        $res_contact = $this->MainModel->contactUs($input);
        if ($res_contact !== true)
        {
            \Log::channel('notify')->error("LINE => ".__LINE__." METHOD => ".__METHOD__." INFO => ".json_encode(\DB::getQueryLog()));
        }

        return back()->with('success', 'پیام شما با موفقیت ارسال شد!');
    }

    function refreshCaptcha()
    {
        return response([
            'captcha_image' => \Captcha::src()
        ]);
    }

}
