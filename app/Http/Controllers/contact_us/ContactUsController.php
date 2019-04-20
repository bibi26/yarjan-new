<?php

namespace App\Http\Controllers\contact_us;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Models\contact_us\ContactUs ;

use Validator;

class ContactUsController extends Controller
{

    function view()
    {
        return view('contactUs');
    }

    function store(Request $request)
    {


        $this->validate($request,  [
            'mobile' => ["nullable", "regex:/^09[0-9]{9}+$/u"],
            'email' => ["nullable", "email"],
            'message' => ["required"],
            'captcha' => ["required", "captcha"]
        ]);


        try{
            ContactUs::create($request->all());
        }catch (\Exception $e){
            myLog($e->getFile().'|'.$e->getLine().'|'.$e->getMessage());
            return back()->with('error',$e->getMessage());
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
