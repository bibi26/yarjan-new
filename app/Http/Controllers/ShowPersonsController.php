<?php

namespace App\Http\Controllers;

use App\Http\Models\BlackLists;
use App\Http\Models\Favorites;

use Illuminate\Http\Request;
use App\Http\Models\auth\Users;
use App\Http\Models\Visits;
use App\Http\Models\Sessions;
use App\Http\Models\Conversations;

class ShowPersonsController extends Controller
{
    private $limit = 10;
    private $view = 'showPersons';
    private $detailView = 'personInfo.detail.main';


    function showPersonsView(Request $request, $flag = '')
    {
        $sessions = [];
        $visits = [];
        $iVisited = [];
        $onlineUsers = [];
        $data = '';
        $getSessionUsers = Sessions::_()->lists();
        $getIvisited = Visits::_()->iVisited();
        $getVisited = Visits::_()->visitCount();

        if (!empty($getVisited)) {
            foreach ($getVisited->toArray() as $key => $val) {
                $visits[$val['visited_user_id']] = $val['visitCount'];
            }
        }

        if (!empty($getIvisited)) {
            foreach ($getIvisited->toArray() as $key => $val) {
                $iVisited[] = $val['visited_user_id'];
            }
        }
        if ($flag == 'visits') {
            $myVisitors = [];
            $getMyVisitors = Visits::_()->myVisitors();
            if (!empty($getMyVisitors)) {
                foreach ($getMyVisitors->toArray() as $row) {
                    $myVisitors[] = $row['visitor_user_id'];
                }
                $data = $myVisitors;
            }
        }

        if ($flag == 'favorites') {
            $myFavorites = [];
            $getMyFavorites = Favorites::_()->myFavorites();
            if (!empty($getMyFavorites)) {
                foreach ($getMyFavorites->toArray() as $row) {
                    $myFavorites[] = $row->favorited_user_id;
                }
                $data = $myFavorites;
            }
        }
        if ($flag == 'blacks') {
            $myBlacks = [];
            $getMyBlacks = BlackLists::_()->myBlacks();
            if (!empty($getMyBlacks)) {
                foreach ($getMyBlacks->toArray() as $row) {
                    $myBlacks[] = $row->blacked_user_id;
                }
                $data = $myBlacks;
            }
        }
        foreach ($getSessionUsers as $key => $val) {
            if ($val->last_activity + config('constants.userOnlinetime') <= time()) {
                $sessions[$val->user_id] = [
                    'onlineOroffline' => false,
                    'lastActivity' => $val->last_activity
                ];
            } else {
                $sessions[$val->user_id] = [
                    'onlineOroffline' => true,
                    'lastActivity' => $val->last_activity
                ];
                $onlineUsers[] = $val->user_id;
            }
        }
        if ($flag == 'onlines') {
            $data = $onlineUsers;
        }

        if ($request->ajax()) {
            $pageNumber = $request['page_number'];
            $getUsers = Users::_()->lists($flag, $data, user()['sex'], $this->limit, ($pageNumber - 1) * $this->limit);
        } else {
            $pageNumber = 0;
            $getUsers = Users::_()->lists($flag, $data, user()['sex'], $this->limit, $pageNumber);
        }
        $totalCount = $getUsers->count();
        $getUsers = $getUsers->toArray();

        foreach ($getUsers as $key => $val) {
            if (in_array($val['id'], $onlineUsers)) {
                $getUsers[$key]['is_online'] = $sessions[$val['id']]['onlineOroffline'];
            } else {
                $getUsers[$key]['is_online'] = false;
            }
            $getUsers[$key]['last_visit'] = empty($sessions[$val['id']]['lastActivity']) ? '' : \Morilog\Jalali\Jalalian::forge($sessions[$val['id']]['lastActivity'])->ago();
            $getUsers[$key]['visitCount'] = empty($visits[$val['id']]) ? 0 : $visits[$val['id']];
            $getUsers[$key]['i_visited'] = in_array($val['id'], $iVisited) ? 'بازدید شده' : '';
            if (\File::exists(config("constants.upload.register.imageFolder") . $getUsers[$key]['id'] . '_main_orginal' . '.jpg')) {
                $getUsers[$key]['profile_image'] = config("constants.upload.register.imageFolder") . $getUsers[$key]['id'] . '_main_orginal' . '.jpg';
            } elseif ($getUsers[$key]['sex'] == 'f') {
                $getUsers[$key]['profile_image'] = '/img/wman1.png';
            } elseif ($getUsers[$key]['sex'] == 'm') {
                $getUsers[$key]['profile_image'] = '/img/me-flat.png';
            } else {
                $getUsers[$key]['profile_image'] = '/img/no-image.png';
            }
            if ($getUsers[$key]['is_online']) {

                $getUsers[$key]['online_status_icon'] = '/img/0online.png';
                $getUsers[$key]['online_status_label'] = "<b style='color:green;'>آنلاین</b>";
            } elseif ($getUsers[$key]['is_online'] == false) {

                $getUsers[$key]['online_status_icon'] = '/img/0offline.png';
                $getUsers[$key]['online_status_label'] = "<b style='color:red;'>آفلاین</b>";
            }
        }
        $content = view("partials.personsPartial", ['persons' => $getUsers, 'count' => $totalCount, 'flag' => $flag])->render();
        if ($request->ajax()) {
            return response([
                'persons' => $content,
                'count' => count($getUsers),
                'flag' => $flag
            ]);
        }

        return view($this->view, ['content' => $content, 'flag' => $flag, 'count' => count($getUsers),]);
    }

    function detailPersonView($user_id)
    {
        $imBlacked = BlackLists::_()->imBlacked($user_id);
        if ($imBlacked == true) {
            return view($this->detailView, ['eFix' => 'دسترسی به کاربر زیر امکان پذیر نمی باشد . شما در بلک لیست کابر قرار دارید.']);
        }
        $sessions = [];
        Visits::_()->store($user_id);
        $getUser = Users::_()->getUserById($user_id);

        if (user()['role'] != 'admin') {
            if ($getUser['status'] != 2 || $getUser['confirm'] != 'accept' || $getUser['active'] == 0 || $getUser['sex'] == user()['sex']) {
                return view($this->detailView, ['eFix' => 'دسترسی غیر مجاز']);

            }
        }

        if (empty($getUser)) {
            return view($this->detailView, ['eFix' => 'کاربر یافت نشد']);
        }
        if (\File::exists(config("constants.upload.register.imageFolder") . $getUser['id'] . '_main_orginal' . '.jpg')) {
            $getUser['profile_image'] = config("constants.upload.register.imageFolder") . $getUser['id'] . '_main_orginal' . '.jpg';
        } elseif ($getUser['sex'] == 'f') {
            $getUser['profile_image'] = '/img/wman1.png';
        } elseif ($getUser['sex'] == 'm') {
            $getUser['profile_image'] = '/img/me-flat.png';
        } else {
            $getUser['profile_image'] = '/img/no-image.png';
        }

        $isBlackedUser = BlackLists::_()->isBlackedUser($user_id);
        if (empty($isBlackedUser)) {
            $getUser['blacked'] = 0;
        } elseif ($isBlackedUser->toArray()['blacked'] == 0) {
            $getUser['blacked'] = 0;
        } else {
            $getUser['blacked'] = 1;
        }

        $isFavoritedUser = Favorites::_()->isFavoritedUser($user_id);
        if (empty($isFavoritedUser)) {
            $getUser['favorited'] = 0;
        } elseif ($isFavoritedUser->toArray()['favorited'] == 0) {
            $getUser['favorited'] = 0;
        } else {
            $getUser['favorited'] = 1;
        }


        $getSessionUser = Sessions::_()->show($user_id);
        if (!empty($getSessionUser)) {
            $getSessionUser = $getSessionUser->toArray();
            $sessions[$getSessionUser['user_id']] = [
                'onlineOroffline' => $getSessionUser['last_activity'] + config('constants.userOnlinetime') <= time() ? false : true,
                'lastActivity' => $getSessionUser['last_activity']
            ];
            $getUser['last_visit'] = empty($sessions[$getSessionUser['user_id']]['lastActivity']) ? '' : \Morilog\Jalali\Jalalian::forge($sessions[$getSessionUser['user_id']]['lastActivity'])->ago();
        } else {
            $getUser['last_visit'] = '';
        }

        $getConversationId = Conversations::_()->getId($user_id);
        return view($this->detailView, ['person' => $getUser, 'conversation_id' => !empty($getConversationId) ? $getConversationId['id'] : '']);
    }


    function blackList($flag, $blacked_user_id, $blacked)
    {
        $result = BlackLists::_()->store($blacked_user_id, $blacked);
        if ($result['error']) {
            if ($flag == 'm') {
                return \Redirect::to("/show_persons/blacks")->with('ePop', 'خطای سیستمی');
            }
            return \Redirect::to("/detailPerson/{$blacked_user_id}")->with('ePop', 'خطای سیستمی');
        }
        if ($blacked == 0) {
            if ($flag == 'm') {
                return \Redirect::to("/show_persons/blacks")->with('ePop', 'کاربر با موفقیت از لیست سیاه حذف گردید');
            }
            return \Redirect::to("/detailPerson/{$blacked_user_id}")->with('ePop', 'کاربر با موفقیت از لیست سیاه حذف گردید');
        }
        if ($flag == 'm') {
            return \Redirect::to("/show_persons/blacks")->with('sPop', 'کاربر با موفقیت به لیست سیاه افزوده شد');
        }
        return \Redirect::to("/detailPerson/{$blacked_user_id}")->with('sPop', 'کاربر با موفقیت به لیست سیاه افزوده شد');
    }

    function favorite($flag, $favorited_user_id, $favorited)
    {
        $result = Favorites::_()->store($favorited_user_id, $favorited);
        if ($result['error']) {
            if ($flag == 'm') {
                return \Redirect::to("/show_persons/favorites")->with('ePop', 'خطای سیستمی');
            }
            return \Redirect::to("/detailPerson/{$favorited_user_id}")->with('ePop', 'خطای سیستمی');
        }
        if ($favorited == 0) {
            if ($flag == 'm') {
                return \Redirect::to("/show_persons/favorites")->with('sPop', 'کاربر با موفقیت از لیست علاقه مندی حذف گردید');
            }
            return \Redirect::to("/detailPerson/{$favorited_user_id}")->with('sPop', 'کاربر با موفقیت از لیست علاقه مندی حذف گردید');
        }

        if ($flag == 'm') {
            return \Redirect::to("/show_persons/favorites")->with('sPop', 'کاربر با موفقیت به لیست علاقه مندی افزوده شد');
        }
        return \Redirect::to("/detailPerson/{$favorited_user_id}")->with('sPop', 'کاربر با موفقیت به لیست علاقه مندی افزوده شد');

    }

    function violationReport(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'violation_user_id' => ['required'],
            'reason_violation' => ['required', 'min:5', 'max:3000'],
        ]);
        if ($validator->fails()) {
            return responseHandler(true, $validator->errors()->all());
        }
        $result = ViolationReports::_()->store($request['violation_user_id'], $request['reason_violation']);
        if ($result['error']) {
            return responseHandler(true, 'خطا در ثبت گزارش تخلف');
        }
        return responseHandler(false);

    }

}


