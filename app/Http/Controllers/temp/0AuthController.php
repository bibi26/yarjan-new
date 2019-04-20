<?php

namespace App\Http\Controllers;

use App\Http\Models\SignUp as AuthModel;
use App\Http\Models\Store as StoreModel;
use App\Mail\Mailtrap;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Request;
use Validator;

class AuthController extends Controller
{

    protected $AuthModel;

    public function __construct()
    {
//        $this->middleware('web', ['except' => 'logout']);
        $this->AuthModel = new AuthModel();
        $this->StoreModel = new StoreModel();
//        $this->wsdl = getenv('APP_ENV') == "production" ? "http://poswsapp.epishkhan.ir/?wsdl" : "http://poswsappdev.epishkhan.ir:5380/?wsdl";
    }


    function signUp()
    {
        $input = array(
            "mobile" => request('mobile'),
//            "email" => request('email'),
            "sex" => request('sex'),
            "province" => request('province'),
            "city" => request('city'),
            "first_name" => request('first_name'),
            "last_name" => request('last_name'),
            "height" => request('height'),
            "weight" => request('weight'),
            "birth_year" => request('birth_year'),
            "birth_month" => request('birth_month'),
            "birth_day" => request('birth_day'),
            "pass1" => request('pass1'),
            "pass2" => request('pass2')
        );
        $rules = [
            'mobile' => ["required", "regex:/^09[0-9]{9}+$/u"],
//            'email' => ["required", "email"],
            'sex' => ["required", "in:M,F"],
            'province' => ["required", "digits_between:1,32"],
            'city' => ["required", "numeric"],
            'first_name' => ["required"],
            'last_name' => ["required"],
            'height' => ["required", "digits_between:50,250"],
            'weight' => ["required", "digits_between:10,150"],
            'birth_year' => ["required", "min:4"],
            'birth_month' => ["required", "digits_between:1,12"],
            'birth_day' => ["required", "digits_between:1,31"],
            'pass1' => ["required"],
            'pass2' => ["required"],
        ];

        $messages = [
            'mobile.required' => 'شماره همراه را وارد نمایید.',
            'mobile.regex' => 'شماره همراه معتبر نمی باشد.',
//            'email.required' => 'ایمیل را وارد نمایید.',
//            'email.email' =>  'ایمیل معتبر نمی باشد.',
            'sex.required' => 'جنسیت را وارد نمایید.',
            'sex.in' => 'جنسیت  معتبر نمی باشد.',
            'province.required' => 'استان را وارد نمایید.',
            'province.digits_between' => 'استان معتبر نمی باشد.',
            'city.required' => 'شهرستان را وارد نمایید.',
            'city.numeric' => 'شهرستان معتبر نمی باشد.',
            'first_name.required' => 'نام را وارد نمایید.',
            'last_name.required' => 'نام خانوادگی را وارد نمایید.',
            'height.required' => 'قد را وارد نمایید.',
            'height.digits_between' => 'قد معتبر نمی باشد.',
            'weight.required' => 'وزن را وارد نمایید.',
            'weight.digits_between' => 'وزن معتبر نمی باشد.',
            'birth_year.required' => 'سال تاریخ تولد را وارد نمایید.',
            'birth_year.min' => 'سال تاریخ تولد معتبر نمی باشد.',
            'birth_month.required' => 'ماه تاریخ تولد را وارد نمایید.',
            'birth_month.digits_between' => 'ماه تاریخ تولد  معتبر نمی باشد.',
            'birth_day.required' => 'روز تاریخ تولد را وارد نمایید.',
            'birth_day.digits_between' => 'روز تاریخ تولد  معتبر نمی باشد.',
            'pass1.required' => 'رمز عبور را وارد نمایید.',
            'pass2.required' => 'تکرار رمز عبور را وارد نمایید.',
        ];

        $validator = Validator::make(Request::all(), $rules, $messages);

        $res_add_user = $this->AuthModel->addUser($input);

        if (!$validator->passes()) {
            $validator->getMessageBag()->setFormat('<p class="msg_err">:message</p>');
            return response([
                'hasErr' => true,
                'msg' => $validator->errors()->all(),
            ]);
        }
    }

    public function sendEmail()
    {
        $verificationCode = "dddd";
        $fullName = "ddssssssssssss";
        \Mail::to("amirian.tat@gmail.com")->send(new Mailtrap($verificationCode, $fullName));
    }

}
