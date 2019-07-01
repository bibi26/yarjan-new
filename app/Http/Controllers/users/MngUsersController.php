<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;

use App\Http\Models\BlackLists;
use App\Http\Models\Favorites;
use Yajra\Datatables\Datatables;
use Validator;

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
        return view($this->view);
    }

    function list()
    {
        $users = Users::_()->getUsersInfo();
        return Datatables::of($users)
            ->addColumn('action', function ($users) {
                return '<a href="' . url($users->id . '/step1') . '" class="btn btn-xs btn-danger">ویرایش</a>
                <a href="' . url('/detailPerson/' . $users->id) . '" class="btn btn-xs btn-primary">بررسی</a>';
            })
            ->addColumn('full_name', function ($users) {
                return $users->fname . ' ' . $users->lname;
            })
            ->addColumn('created_at', function ($users) {
                return \Morilog\Jalali\Jalalian::forge($users->created_at)->format('H:m:i Y-m-d ');
            })
            ->addColumn('location', function ($users) {
                return $users->provinces->name . ' ' . $users->cities->name;
            })
            ->addColumn('step', function ($users) {
                if ($users->step5 == 1) {
                    return '5';
                } elseif ($users->step4 == 1) {
                    return '4';
                } elseif ($users->step3 == 1) {
                    return '3';
                } elseif ($users->step2 == 1) {
                    return '2';
                } elseif ($users->step1 == 1) {
                    return '1';
                } else {
                    return '0';
                }
            })->addColumn('confirm', function ($users) {
                return $users->confirm;
            }) ->order(function ($query) {

            })
            ->make(true);
    }

    function confirm(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'status' => ['required'],
            'user_id' => ['required','integer'],
            'description' => ['required_if:status,==,reject']
        ]);
        if ($validator->fails()) {
            return responseHandler(true,$validator->errors()->all());
        }
        $result = Users::_()->confirm($request);
        if ($result['error']) {
            return responseHandler(true,'خطای سیستمی');
        }
        return responseHandler(false);
    }

    function deactive(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'status' => ['required'],
            'user_id' => ['required','integer'],
            'description' => ['required_if:status,==,reject']
        ]);
        if ($validator->fails()) {
            return responseHandler(true,$validator->errors()->all());
        }
        $result = Users::_()->deactive($request);
        if ($result['error']) {
            return responseHandler(true,'خطای سیستمی');
        }
        return responseHandler(false);
    }
}


