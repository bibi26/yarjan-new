<?php

namespace App\Http\Controllers\contact_us;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Models\contact_us\ContactUs ;
use Yajra\Datatables\Datatables;

use Validator;

class ContactUsController extends Controller
{
    private $newContactUs='contactUs.new';
    private $mngContactUs='contactUs.mng';
    function newView()
    {
        return view($this->newContactUs);
    }
    function mngView()
    {
        return view($this->mngContactUs);
    }


    function newStore(Request $request)
    {        return back()->with('sPop', 'پیام شما با موفقیت ارسال شد!');

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

        return back()->with('sPop', 'پیام شما با موفقیت ارسال شد!');
    }
    function mng()
    {
        $users = ContactUs::all();
        return Datatables::of($users)
            ->addColumn('created_at', function ($users) {
                return \Morilog\Jalali\Jalalian::forge($users->created_at)->format('Y-m-d H:m:i');
            })
            ->make();    }


    function refreshCaptcha()
    {
        return response([
            'captcha_image' => \Captcha::src()
        ]);
    }

}
