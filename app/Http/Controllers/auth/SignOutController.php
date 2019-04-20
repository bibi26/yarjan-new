<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;

class SignOutController extends Controller
{
   function signOut()
    {
        if (\Cookie::get('LOGEDIN')==TRUE)
        {
     $cookie = \Cookie::forget('LOGEDIN');
//     return response('view')->withCookie($cookie);
             return \Redirect::to('/')->cookie($cookie);
        }
        else{
            die("cookie dosent exists!");
        }
    }

}
