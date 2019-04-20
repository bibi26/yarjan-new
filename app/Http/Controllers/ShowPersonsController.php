<?php

namespace App\Http\Controllers;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\Request;
use App\Http\Models\auth\Users;
use Carbon\Carbon;

class ShowPersonsController extends Controller
{

    private $view = 'showPersons';

    function showPersonsView()
    {
        $getUsers = Users::_()->getUsers()->toArray();
        $getUsersOnline=Users::_()->getUsersOnline();
        $usersOnline=[];
        foreach ($getUsersOnline as $key => $val){
            $usersOnline[$val->user_id]=   $val->last_activity + 300 <= time()?false:true;
        }
        foreach ($getUsers as $key => $val){
            $getUsers[$key]['onlineStatus']=empty($usersOnline[$val['id']])?'':$usersOnline[$val['id']];
        }
        return view($this->view, ['persons' => $getUsers]);
    }

}
