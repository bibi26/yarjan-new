<?php

namespace App\Http\Controllers\model;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Validator;
use App\Http\Models\Provinces;
use App\Http\Models\Cities;
use App\Http\Models\model\Models;


class ModelController extends Controller
{
    private $fillable = [
        'fname',
        'lname',
        'sex',
//        'birth_date_day',
//        'birth_date_month',
//        'birth_date_year',
        'mobile',
        'province',
        'city',
        'instagram',
        'height',
        'weight',
        'hair_color',
        'eye_color'
    ];

    function view()
    {
        $provinces = Provinces::all();
        return view('model.model', compact('provinces', $provinces));
    }

    function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fname' => "required",
            'lname' => "required",
            'sex' => ["required", "in:0,1"],
            'mobile' => ["required", "regex:/^09[0-9]{9}$/"],
            'province' => ["required", "between:1,31"],
            'city' => ["required"],
            'height' => ["required", "integer", "between:50,200"],
            'weight' => ["required", "integer", "between:20,150"],
            'hair_color' => ["required", "in:black,gray,gray_black,blond,brown_colorfull,brown_colorless,red"],
            'eye_color' => ["required", "in:black,blue,brown,gray,green"],
        ]);


        if (!$validator->passes()) {
            $validator->getMessageBag()->setFormat('<p class="msg_err">:message</p>');
            return response([
                'hasErr' => true,
                'msg' => $validator->errors()->all(),
            ]);
        }

        $images = [];
        foreach ($request->all() as $index => $value) {
            if (substr($index, 0, 10) == 'file_name_') {
                $images[] = $value;
            }
        }

        $res_insert = Models::_()->addImage($images);
        if ($res_insert['hasErr']) {
            return back()->with('error', $res_insert['msg']);
        }
$payload=$this->fillable;
//        $payload='bire'

        $res_insert = Models::insert($payload);
        if ($res_insert['hasErr']) {
            return back()->with('error', $res_insert['msg']);
        }
    }

    function upload_img_main(Request $request)
    {
        $_imgWidth = config("constants.upload.register.imageWidth");
        $_imgHeight = config("constants.upload.register.imageHeight");

        $rules = [
            'profile' => ['image', 'mimes:' . config("constants.upload.register.allowExtensionPHP"), 'max:' . config("constants.upload.register.fileSizeKiloByte")]
        ];

        $messages = [
            'profile.image' => '000000000 ',
            'profile.mimes' => '1111111111 ',
            'profile.max' => '222222222222 ',
        ];
        $validator = Validator::make($request->all(), $rules, $messages);

        try {
            $fileinfo = getimagesize($request->file('profile'));
        } catch (\Exception $e) {
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
            return response([
                'hasErr' => true,
                'msg' => "فایل معتبر نمی باشد!"
            ]);
        }
        $width = $fileinfo[0];
        $height = $fileinfo[1];
        if ($width < $_imgWidth || $height < $_imgHeight) {
            return response([
                'hasErr' => true,
                'msg' => "فایل " . $request->file('profile')->getClientOriginalName() . " بارگذاری نشد. اندازه عکس بسیار کوچک است (حداقل " . $_imgWidth . " در " . $_imgHeight . " پیکسل)"
            ]);
        }
        if ($validator->fails()) {
            return response([
                'hasErr' => true,
                'msg' => $validator->errors()->all()
            ]);
        }
        $file_name = user()['user_id'] . '_main_orginal' . '.jpg';
        try {
            $request->file('profile')->move('storage/images', $file_name);
        } catch (\Exception $e) {
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
            return response([
                'hasErr' => true,
                'msg' => 'خطا در آپلود فایل!'
            ]);
        }

        return response([
            'hasErr' => false,
            'msg' => '',
            'fileName' => $file_name,
        ]);
    }


    function upload_img_other(Request $request)
    {
        $_imgWidth = config("constants.upload.register.imageWidth");
        $_imgHeight = config("constants.upload.register.imageHeight");


        $rules = [
            'profile' => ['image', 'mimes:' . config("constants.upload.register.allowExtensionPHP"), 'max:' . config("constants.upload.register.fileSizeKiloByte")]
        ];

        $messages = [
            'profile.image' => '000000000 ',
            'profile.mimes' => '1111111111 ',
            'profile.max' => '222222222222 ',
        ];


        $validator = Validator::make($request->all(), $rules, $messages);
        try {
            $fileinfo = getimagesize($request->file('profile'));
        } catch (\Exception $e) {
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
            return response([
                'hasErr' => true,
                'msg' => "فایل معتبر نمی باشد!"
            ]);
        }
        $width = $fileinfo[0];
        $height = $fileinfo[1];
        if ($width < $_imgWidth || $height < $_imgHeight) {
            return response([
                'hasErr' => true,
                'msg' => "فایل " . $request->file('profile')->getClientOriginalName() . " بارگذاری نشد. اندازه عکس بسیار کوچک است (حداقل " . $_imgWidth . " در " . $_imgHeight . " پیکسل)"
            ]);
        }
        if ($validator->fails()) {
            return response([
                'hasErr' => true,
                'msg' => $validator->errors()->all()
            ]);
        }
        $file_name = user()['user_id'] . '_other_orginal_' . md5(mt_rand(1000, 10000000)) . ".jpg";
        try {
            $request->file('profile')->move('storage/images', $file_name);
        } catch (\Exception $e) {
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
            return response([
                'hasErr' => true,
                'msg' => 'خطا در آپلود فایل!'
            ]);
        }

        return response([
            'hasErr' => false,
            'msg' => '',
            'fileName' => $file_name,
        ]);
    }

    function delete_img_main(Request $request)
    {
        $file_name = request('fileName');
        $file_path = 'storage/images/' . $file_name; // app_path("public/test.txt");

        if (\File::exists($file_path)) {
            try {
                \File::delete($file_path);
            } catch (\Exception $e) {
                \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
                return response([
                    'hasErr' => true,
                    'msg' => 'خطا در حذف فایل!'
                ]);
            }
        } else {
            $msg = 'فایل یافت نشد!';
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $msg);
            return response([
                'hasErr' => true,
                'msg' => $msg
            ]);
        }
        return response([
            'hasErr' => false,
            'msg' => ''
        ]);
    }

    function delete_img_other(Request $request)
    {
        $file_name = request('fileName');
        $file_path = 'storage/images/' . $file_name; // app_path("public/test.txt");

        if (\File::exists($file_path)) {
            try {
                \File::delete($file_path);
            } catch (\Exception $e) {
                \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
                return response([
                    'hasErr' => true,
                    'msg' => 'خطا در حذف فایل!'
                ]);
            }
        } else {
            $msg = 'فایل یافت نشد!';
            \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $msg);
            return response([
                'hasErr' => true,
                'msg' => $msg
            ]);
        }
        return response([
            'hasErr' => false,
            'msg' => ''
        ]);
    }

}
