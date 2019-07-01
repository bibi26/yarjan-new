<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Http\Request;
use App\Http\Models\auth\Users;
use App\Http\Models\Sessions;
use App\Http\Models\Visits;
use App\Http\Models\ViolationReports;
use App\Http\Models\BlackLists;
use App\Http\Models\Favorites;
use Carbon\Carbon;
use Validator;
use  Session;

class DetailPersonController extends Controller
{
    private $view = 'personInfo.detail.main';


    function detailPersonView($user_id)
    {
        $sessions = [];
        Visits::_()->store($user_id);
        $getUser = Users::_()->getUserById($user_id);

        if (user()['role'] != 'admin') {
            if ($getUser['status'] != 2 || $getUser['confirm'] != 'accept' || $getUser['active'] == 0) {
                return back()->with('error', 'دسترسی غیر مجاز');
            }
        }

        if (empty($getUser)) {
            return back()->with('error', 'کاربر یافت نشد');

        }
        if (\File::exists(config("constants.upload.register.imageFolder") . $getUser['id'] . '_main_orginal' . '.jpg')) {
            $getUser['profile_image'] = config("constants.upload.register.imageFolder") . $getUser['id'] . '_main_orginal' . '.jpg';
        } elseif ($getUser['sex'] == 'f') {
            $getUser['profile_image'] = '/img/wman1.png';
        } elseif ($getUser['sex'] == 'm') {
            $getUser['profile_image'] = '/img/me-flat.png';
        }else{
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
        return view($this->view, ['person' => $getUser]);
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

    function blackList($blacked_user_id, $blacked)
    {
        $result = BlackLists::_()->store($blacked_user_id, $blacked);
        if ($result['error']) {
            return back()->with('error', 'خطای سیستمی');
        }
        if ($blacked == 0) {
            return back()->with('success', 'کاربر با موفقیت از لیست سیاه حذف گردید');

        }
        return back()->with('success', 'کاربر با موفقیت به لیست سیاه افزوده شد');
    }

    function favorite($favorited_user_id, $favorited)
    {
        $result = Favorites::_()->store($favorited_user_id, $favorited);
        if ($result['error']) {
            return back()->with('error', 'خطای سیستمی');
        }
        if ($favorited == 0) {
            return back()->with('success', 'کاربر با موفقیت از لیست علاقه مندی حذف گردید');
        }
        return back()->with('success', 'کاربر با موفقیت به لیست علاقه مندی افزوده شد');
    }

    function table()
    {
        return view('table');
    }


}


