<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;

use App\Http\Models\BlackLists;
use App\Http\Models\Favorites;
use Yajra\Datatables\Datatables;

use Illuminate\Http\Request;
use App\Http\Models\auth\Users;
use App\Http\Models\Visits;
use App\Http\Models\Sessions;

class MngUsersController extends Controller
{
    private $limit = 10;
    private $view = 'users.mng';

    function mngUsersView()
    {
//        $sessions = [];
//        $visits = [];
//        $iVisited = [];
//        $onlineUsers = [];
//        $data = '';
//        $getSessionUsers = Sessions::_()->lists();
//        $getIvisited = Visits::_()->iVisited();
//        $getVisited = Visits::_()->visitCount();
//        $getUser = Users::_()->getUserById(user()['user_id']);
//        if (empty($getUser)) {
//            return view($this->view, ['error' => 'کاربر یافت نشد']);
//        }
//        $sex = $getUser->toArray()['sex'];
//        if (!empty($getVisited)) {
//            foreach ($getVisited->toArray() as $key => $val) {
//                $visits[$val['visited_user_id']] = $val['visitCount'];
//            }
//        }
//
//        if (!empty($getIvisited)) {
//            foreach ($getIvisited->toArray() as $key => $val) {
//                $iVisited[] = $val['visited_user_id'];
//            }
//        }
//        if ($flag == 'visits') {
//            $myVisitors = [];
//            $getMyVisitors = Visits::_()->myVisitors();
//            if (!empty($getMyVisitors)) {
//                foreach ($getMyVisitors->toArray() as $row) {
//                    $myVisitors[] = $row['visitor_user_id'];
//                }
//                $data = $myVisitors;
//            }
//        }
//
//        if ($flag == 'favorites') {
//            $myFavorites = [];
//            $getMyFavorites = Favorites::_()->myFavorites();
//            if (!empty($getMyFavorites)) {
//                foreach ($getMyFavorites->toArray() as $row) {
//                    $myFavorites[] = $row->favorited_user_id;
//                }
//                $data = $myFavorites;
//            }
//        }
//
//        if ($flag == 'blacks') {
//            $myBlacks = [];
//            $getMyBlacks = BlackLists::_()->myBlacks();
//            if (!empty($getMyBlacks)) {
//                foreach ($getMyBlacks->toArray() as $row) {
//                    $myBlacks[] = $row->blacked_user_id;
//                }
//                $data = $myBlacks;
//            }
//        }
//        foreach ($getSessionUsers as $key => $val) {
//            if ($val->last_activity + config('constants.userOnlinetime') <= time()) {
//                $sessions[$val->user_id] = [
//                    'onlineOroffline' => false,
//                    'lastActivity' => $val->last_activity
//                ];
//            } else {
//                $sessions[$val->user_id] = [
//                    'onlineOroffline' => true,
//                    'lastActivity' => $val->last_activity
//                ];
//                $onlineUsers[] = $val->user_id;
//            }
//        }
//        if ($flag == 'onlines') {
//            $data = $onlineUsers;
//        }
//
//        if ($request->ajax()) {
//            $pageNumber = $request['page_number'];
//            $getUsers = Users::_()->lists($flag, $data, $sex, $this->limit, ($pageNumber - 1) * $this->limit);
//        } else {
//            $pageNumber = 0;
//            $getUsers = Users::_()->lists($flag, $data, $sex, $this->limit, $pageNumber);
//        }
//
//        $totalCount = $getUsers->count();
//        $getUsers = $getUsers->toArray();
//
//        foreach ($getUsers as $key => $val) {
//            if (in_array($val['id'], $onlineUsers)) {
//                $getUsers[$key]['is_online'] = $sessions[$val['id']]['onlineOroffline'];
//            } else {
//                $getUsers[$key]['is_online'] = false;
//            }
//            $getUsers[$key]['last_visit'] = empty($sessions[$val['id']]['lastActivity']) ? '' : \Morilog\Jalali\Jalalian::forge($sessions[$val['id']]['lastActivity'])->ago();
//            $getUsers[$key]['visitCount'] = empty($visits[$val['id']]) ? 0 : $visits[$val['id']];
//            $getUsers[$key]['i_visited'] = in_array($val['id'], $iVisited) ? 'بازدید شده' : '';
//            if (\File::exists(config("constants.upload.register.imageFolder") . $getUsers[$key]['id'] . '_main_orginal' . '.jpg')) {
//                $getUsers[$key]['profile_image'] = config("constants.upload.register.imageFolder") . $getUsers[$key]['id'] . '_main_orginal' . '.jpg';
//            } elseif ($getUsers[$key]['sex'] == 'f') {
//                $getUsers[$key]['profile_image'] = '/img/wman1.png';
//            } elseif ($getUsers[$key]['sex'] == 'm') {
//                $getUsers[$key]['profile_image'] = '/img/me-flat.png';
//            }
//            if ($getUsers[$key]['is_online']) {
//
//                $getUsers[$key]['online_status_icon'] = '/img/0online.png';
//                $getUsers[$key]['online_status_label'] = "<b style='color:green;'>آنلاین</b>";
//            } elseif ($getUsers[$key]['is_online'] == false) {
//
//                $getUsers[$key]['online_status_icon'] = '/img/0offline.png';
//                $getUsers[$key]['online_status_label'] = "<b style='color:red;'>آفلاین</b>";
//            }
//        }
//
//        $content= view("partials.personsPartial", ['persons' => $getUsers, 'count' => $totalCount,'flag'=>$flag])->render();
//
//        if ($request->ajax()) {
//            return response([
//                'persons' => $content,
//                'count' => count($getUsers),
//                'flag' => $flag
//            ]);
//        }

        return view($this->view);
    }

    function list()
    {
        $users = Users::_()->getUsersInfo();
        return Datatables::of($users)
            ->addColumn('action', function ($users) {
                return '<a href="#edit-' . $users->id . '" class="btn btn-xs btn-primary"><i class="glyphicon glyphicon-edit"></i> Edit</a>';
            })
            ->addColumn('full_name', function ($users) {
             return  $users->fname .' ' .$users->lname;
            })
            ->addColumn('created_at', function ($users) {
             return  \Morilog\Jalali\Jalalian::forge($users->created_at)->format('%Y-%m-%d');;
//             return  \Morilog\Jalali\Jalalian::forge($users->created_at)->format('%Y-%m-%d H:i:s');;
            })

            ->addColumn('location', function ($users) {
             return  $users->provinces->name.' '.$users->cities->name;
            })
            ->make();
    }

}


