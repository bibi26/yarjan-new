<?php

namespace App\Http\Controllers\personInfo;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Validator;
use App\Http\Models\Provinces;
use App\Http\Models\Cities;
use App\Http\Models\auth\Users;

class NewPersonInfoController extends Controller
{
    private $view = 'personInfo.new.main';

    function hasAccess($user_id){
        if( $user_id!=user()['user_id'])
        {
            if(user()['role']!='admin'){
                return back()->withInput()->with('error', 'دسترسی غیر مجاز');
            }
        }
        return true;
    }
    function step1View($user_id)
    {
    $this->hasAccess($user_id);
        $getUser = Users::_()->getUserbyUserId($user_id);

        if ($getUser->step1 == 1) {
            return view($this->view, ['step' => 1, 'userInfo' => $getUser]);
        }
        return view($this->view, ['step' => 1]);
    }

    function step2View($user_id)
    {
        $this->hasAccess($user_id);
        $getUser = Users::_()->getUserbyUserId($user_id);
        if ($getUser->step2 == 1) {
            return view($this->view, ['step' => 2, 'userInfo' => $getUser]);
        }
        return view($this->view, ['step' => 2]);
    }

    function step3View($user_id)
    {
        $this->hasAccess($user_id);
        $getUser = Users::_()->getUserbyUserId($user_id);
        if ($getUser->step3 == 1) {
            return view($this->view, ['step' => 3, 'userInfo' => $getUser]);
        }
        return view($this->view, ['step' => 3]);
    }

    function step4View($user_id)
    {
        $this->hasAccess($user_id);
        $getUser = Users::_()->getUserbyUserId($user_id);
        if ($getUser->step4 == 1) {
            return view($this->view, ['step' => 4, 'userInfo' => $getUser]);
        }
        return view($this->view, ['step' => 4]);
    }

    function step5View($user_id)
    {
        $this->hasAccess($user_id);
        $getUser = Users::_()->getUserbyUserId($user_id);
        if ($getUser->step4 == 1) {
            return view($this->view, ['step' => 5, 'userInfo' => $getUser]);
        }
        return view($this->view, ['step' => 5]);
    }

    public function step1(Request $request)
    {
        $this->hasAccess($request['user_id']);

        $this->validate($request, [
            'user_id' => "required",
            'job_status' => "required",
            'job' => "required",
            'marriage' => "required",
            'education' => "required",
            'field' => "required",
            'my_income' => "required",
            'family_income' => "required",
            'house' => "required",
            'car' => "required",
            "child_count" => "required_if:marriage,==,DIVORCED,DECEASED_WIFE",
            "age_older_child" => "required_if:marriage,==,DIVORCED,DECEASED_WIFE"
        ], [
            'child_count.required_if' => 'فیلد تعداد فرزند الزامی است.',
            'age_older_child.required_if' => 'فیلد سن فرزند بزرگتر الزامی است.'
        ]);
        $getUser = Users::_()->getUserbyUserId($request['user_id']);
        $request['username']=$getUser->username;
        $res_add_user = Users::_()->step1($request);

        if ($res_add_user ['error']) {
            return back()->with('error', $res_add_user['msg']);
        }

        return \Redirect::to("/{$request['user_id']}/step2");
    }

    public function step2(Request $request)
    {
        $this->hasAccess($request['user_id']);

        $this->validate($request, [
            'user_id' => "required",
            'weight' => "required",
            'height' => "required",
            'skin_color' => "required",
            'health_condition' => "required",
            'immigration' => "required",
            'face' => "required",
            'style' => "required",
            "nationality" => "required",
            "life_style" => "required"
        ]);
        $getUser = Users::_()->getUserbyUserId($request['user_id']);
        $request['username']=$getUser->username;
        $res_add_user = Users::_()->step2($request);
        if ($res_add_user ['error']) {
            return back()->with('error', $res_add_user['msg']);
        }
        return \Redirect::to("/{$request['user_id']}/step3");
    }

    public function step3(Request $request)
    {
        $this->hasAccess($request['user_id']);

        $this->validate($request, [
            'user_id' => "required",
            'i_am' => "required",
            'you_are' => "required"
        ]);
        $getUser = Users::_()->getUserbyUserId($request['user_id']);
        $request['username']=$getUser->username;
        $res_add_user = Users::_()->step3($request);
        if ($res_add_user ['error']) {
            return back()->with('error', $res_add_user['msg']);
        }
        return \Redirect::to("/{$request['user_id']}/step4");
    }

    public function step4(Request $request)
    {
        $this->hasAccess($request['user_id']);

        $getUser = Users::_()->getUserbyUserId($request['user_id']);
        $request['user_id']=$request['user_id'];
        $request['username']=$getUser->username;
        $res_add_user = Users::_()->step4($request);
        if ($res_add_user ['error']) {
            return back()->with('error', $res_add_user['msg']);
        }
        return \Redirect::to("/{$request['user_id']}/step5");
    }

    public function step5(Request $request)
    {
        $this->hasAccess($request['user_id']);

        $getUser = Users::_()->getUserbyUserId($request['user_id']);
        $request['user_id']=$request['user_id'];
        $request['username']=$getUser->username;
        $res_add_user = Users::_()->step5($request);
        if ($res_add_user ['error']) {
            return back()->with('error', $res_add_user['msg']);
        }
        return \Redirect::route('cartable');
    }


    function upload_img(Request $request)
    {
        if (!isset($request['user_id'])) {
            return responseHandler(true,'شناسه کاربر وجود ندارد');
        }
        $request['type'] == 'main' ? $f = 'fileMain' : $f = 'fileAdditional';
        $_imgWidth = config("constants.upload.register.imageWidth");
        $_imgHeight = config("constants.upload.register.imageHeight");

        $validator = Validator::make($request->all(), [
            'fileAdditional' => [ 'mimes:jpeg,jpg' , 'max:' . config("constants.upload.register.fileSizeKiloByte")]
        ]);
        if ($validator->fails()) {
            return responseHandler(true,$validator->errors()->all());
        }
        try {
            $fileinfo = getimagesize($request->file($f));
            $width = $fileinfo[0];
            $height = $fileinfo[1];
            if ($width < $_imgWidth || $height < $_imgHeight) {
                return responseHandler(true, "فایل " . " بارگذاری نشد. اندازه عکس بسیار کوچک است (حداقل " . $_imgWidth . " در " . $_imgHeight . " پیکسل)");
            }
        } catch (\Exception $e) {
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
        }

        $f == 'fileMain' ? $fileName = $request['user_id'] . '_main_orginal' . '.jpg' : $fileName = $request['user_id'] . '_additional_orginal_' . md5(mt_rand(1000, 10000000)) . ".jpg";
        try {
            $request->file($f)->move(config("constants.upload.register.imageFolder"), $fileName);
        } catch (\Exception $e) {
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
            return responseHandler(true,'خطا در آپلود فایل!');

        }
        return response([
            'error' => false,
            'initialPreview' => [asset(config("constants.upload.register.imageFolder") . $fileName . "?" . mt_rand(1000, 100000))],
            'initialPreviewConfig' => [['url' => 'delete_img', 'key' => $fileName, 'extra' => ['_token' => csrf_token()]]],
            'append' => $f == 'fileMain' ? FALSE : TRUE
        ]);


    }


    function delete_img(Request $request)
    {
        if (!isset($request['user_id'])) {
            return responseHandler(true,  'شناسه کاربر وجود ندارد');
        }
        $fileName = request('key');
        $file_path = 'storage/images/' . $fileName; // app_path("public/test.txt");

        if (\File::exists($file_path)) {
            try {
                \File::delete($file_path);
            } catch (\Exception $e) {
                \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
                return responseHandler(true,  'خطا در حذف فایل!');
            }
        } else {
            $msg = 'فایل یافت نشد!';
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $msg);
            return responseHandler(true,  $msg);
        }
        return responseHandler(false);

    }


}
