<?php
namespace App\Http\Controllers;
use App;
use App\User;
use App\Role;
use Illuminate\Http\Request;
class MainController extends Controller
{


    function ttt(){
      session('key','val');
        dd(session()->all());
    }
}
