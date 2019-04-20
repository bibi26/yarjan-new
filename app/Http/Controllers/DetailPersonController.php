<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Http\Request;
use App\Http\Models\auth\Users;
use App\Http\Models\Sessions;
use App\Http\Models\Visits;
use Carbon\Carbon;

class DetailPersonController extends Controller
{
    private $limit = 10;
    private $view = 'detailPerson';
    function detailPersonView($user_id)
    {
        $sessions=[];
        Visits::_()->store($user_id);
        $getUser = Users::_()->getUser($user_id);
        if (\File::exists(config("constants.upload.register.imageFolder") . $getUser['id'] . '_main_orginal' . '.jpg')) {
            $getUser['profile_image'] = config("constants.upload.register.imageFolder") . $getUser['id'] . '_main_orginal' . '.jpg';
        } elseif ($getUser['sex'] == 'f') {
            $getUser['profile_image'] = '/img/wman1.png';
        } elseif ($getUser['sex'] == 'm') {
            $getUser['profile_image'] = '/img/me-flat.png';
        }



        $getSessionUser = Sessions::_()->edit($user_id);
        if(!empty($getSessionUser)) {
            $getSessionUser = $getSessionUser->toArray();
            $sessions[$getSessionUser['user_id']] = [
                'onlineOroffline' => $getSessionUser['last_activity'] + config('constants.userOnlinetime') <= time() ? false : true,
                'lastActivity' => $getSessionUser['last_activity']
            ];
            $getUser['last_visit'] = empty($sessions[$getSessionUser['user_id']]['lastActivity']) ? '' : \Morilog\Jalali\Jalalian::forge($sessions[$getSessionUser['user_id']]['lastActivity'])->ago();
        }else{
            $getUser['last_visit'] = '';
        }


        return view($this->view,['person' => $getUser]);
    }



}


