<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Session\Session;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Http\Request;
use App\Http\Models\auth\Users;
use App\Http\Models\Visits;
use App\Http\Models\Sessions;
use Carbon\Carbon;

class ShowPersonsController extends Controller
{
    private $limit = 10;
    private $view = 'showPersons';

    function showPersonsView(Request $request)
    {
        $sessions= [];
        $visits= [];
        $onlinUsers = [];

        $getSessionUsers = Sessions::_()->lists();
        $getVisitUsers = Visits::_()->lists()->toArray();
        foreach ($getVisitUsers as $key => $val) {
            $visits[$val['visitor_user']] =$val['visitCount'];
        }
        if ($request->ajax()) {
            $pageNumber = $request['page_number'];
            $getUsers = Users::_()->getUsers($this->limit, ($pageNumber - 1) * $this->limit);
        } else {
            $pageNumber = 0;
            $getUsers = Users::_()->getUsers($this->limit, $pageNumber);
        }
        $totalCount = $getUsers['count'];
        $getUsers = $getUsers['total']->toArray();
        foreach ($getSessionUsers as $key => $val) {
            $sessions[$val->user_id] = [
                'onlineOroffline' => $val->last_activity + config('constants.userOnlinetime') <= time() ? false : true,
                'lastActivity' => $val->last_activity
            ];
        }
        foreach ($getUsers as $key => $val) {
            $getUsers[$key]['online_status'] = empty($sessions[$val['id']]['onlineOroffline']) ? '' : $sessions[$val['id']]['onlineOroffline'];
            $getUsers[$key]['last_visit'] = empty($sessions[$val['id']]['lastActivity']) ? '' : \Morilog\Jalali\Jalalian::forge($sessions[$val['id']]['lastActivity'])->ago();
            $getUsers[$key]['visitCount'] =empty($visits[$val['id']]) ? 0 : $visits[$val['id']];
            if (\File::exists(config("constants.upload.register.imageFolder") . $getUsers[$key]['id'] . '_main_orginal' . '.jpg')) {
                $getUsers[$key]['profile_image'] = config("constants.upload.register.imageFolder") . $getUsers[$key]['id'] . '_main_orginal' . '.jpg';
            } elseif ($getUsers[$key]['sex'] == 'f') {
                $getUsers[$key]['profile_image'] = '/img/wman1.png';
            } elseif ($getUsers[$key]['sex'] == 'm') {
                $getUsers[$key]['profile_image'] = '/img/me-flat.png';
            }
            if ($getUsers[$key]['online_status'] == true) {

                $getUsers[$key]['online_status_icon'] = '/img/0online.png';
                $getUsers[$key]['online_status_label'] = "<b style='color:green;'>آنلاین</b>";
            } elseif ($getUsers[$key]['online_status'] == false) {

                $getUsers[$key]['online_status_icon'] = '/img/0offline.png';
                $getUsers[$key]['online_status_label'] = "<b style='color:red;'>آفلاین</b>";
            } else {

                $getUsers[$key]['online_status_icon'] = '/img/0offline.png';
                $getUsers[$key]['online_status_label'] = "<b style='color:green;'>آفلاین</b>";

            }
        }

        if ($request->ajax()) {
            return response([
                'persons' => $getUsers,
                'count' => $totalCount
            ]);
        }


//       foreach ($getUsers as $key => $val){
//            if(isset( $sessions[$val['id']=['onlineOroffline']) && $sessions[$val['id']]['onlineOroffline']==true) {
//                $getUsers[$key]['onlineStatus'] = empty($sessions[$val['id']]['onlineOroffline']) ? '' : $sessions[$val['id']]['onlineOroffline'];
//                $onlinUsers[]=$getUsers[$key];
//            }
//        }
        return view($this->view, ['persons' => $getUsers, 'count' => $totalCount]);
//        return view($this->view, ['persons' => $onlinUsers]);
    }

}


