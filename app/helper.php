<?php

function generateRandomString($length = 10, $char = 'all')
{
    if ($char == 'string') {
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } elseif ($char == 'number') {
        $characters = '0123456789';
    } elseif ($char == 'all') {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function myLog($err, $type = 'notify')
{
    return \Log::channel($type)->error($err);
}

function eq()
{
    return \DB::enableQueryLog();
}

function ge()
{
    dd(\DB::getQueryLog());
}

function vd($e)
{
    var_dump($e);
    die;
}

function pr($e)
{
    print "<pre>" . print_r($e, true) . "</pre>";
    die;
}

function user()
{
    $user = unserialize(\Cookie::get('LOGEDIN'));
    if ($user) {
        return $user;
    } else {
        return null;
    }
}


function educationStatus($value, $array = false)
{
    if ($array) {
        return ['1' => 'زیر دیپلم', '2' => 'دیپلم', '3' => 'فوق دیپلم', '4' => 'لیسانس', '5' => 'فوق لیسانس', '6' => 'دکترای عمومی', '7' => 'دکترای تخصصی', '8' => 'فوق تخصص', '9' => 'حوزوی'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "1":
            echo "زیر دیپلم";
            break;
        case "2":
            echo "دیپلم";
            break;
        case "3":
            echo "فوق دیپلم";
            break;
        case "4":
            echo "لیسانس";
            break;
        case "5":
            echo "فوق لیسانس";
            break;
        case "6":
            echo "دکترای عمومی";
            break;
        case "7":
            echo "دکترای تخصصی";
            break;
        case "8":
            echo "فوق تخصص";
            break;
        case "9":
            echo "حوزوی";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function skinColorStatus($value, $array = false)
{
    if ($array) {
        return ['white' => 'سفید', 'bright_brunetee' => 'سبزه روشن', 'dark_brunetee' => 'سبزه تیره', 'black' => 'سیاه'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "white":
            echo "سفید";
            break;
        case "bright_brunetee":
            echo "سبزه روشن";
            break;
        case "dark_brunetee":
            echo "سبزه تیره";
            break;
        case "black":
            echo "سیاه";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function religionStatus($value, $array = false)
{
    if ($array) {
        return ['shia' => 'اسلام-شيعه', 'suni' => 'اسلام-سني', 'christian' => 'مسيحي', 'jewish' => 'يهودي', 'etc' => 'ساير'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "shia":
            echo "اسلام-شيعه";
            break;
        case "suni":
            echo "اسلام-سني";
            break;
        case "christian":
            echo "مسيحي";
            break;
        case "jewish":
            echo "يهودي";
            break;
        case "etc":
            echo "ساير";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function beliefStatus($value, $array = false)
{
    if ($array) {
        return ['religious_high' => 'مذهبي مقيد', 'religious_usual' => 'مذهبي معمولي', 'religious_no' => 'غير مذهبي'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "religious_high":
            echo "مذهبي مقيد";
            break;
        case "religious_usual":
            echo "مذهبي معمولي";
            break;
        case "religious_no":
            echo "غير مذهبي";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function incomeStatus($value, $array = false)
{
    if ($array) {
        return ['0' => 'بدون درآمد', '1' => 'زیر 2 میلیون تومان', '2' => 'بين 2 تا 5 میلیون تومان', '3' => 'بين 5 تا 10 میلیون تومان', '4' => 'بیش از 10 میلیون تومان'];

    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "0":
            echo "بدون درآمد";
            break;
        case "1":
            echo "زیر 2 میلیون تومان";
            break;
        case "2":
            echo "بين 2 تا 5 میلیون تومان";
            break;
        case "3":
            echo "بين 5 تا 10 میلیون تومان";
            break;
        case "4":
            echo "بیش از 10 میلیون تومان";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function houseStatus($value, $array = false)
{
    if ($array) {
        return ['0' => 'بدون مسکن شخصي', '1' => 'داراي مسکن شخصي'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "0":
            echo "بدون مسکن شخصي";
            break;
        case "1":
            echo "داراي مسکن شخصي";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function carStatus($value, $array = false)

{
    if ($array) {
        return ['1' => 'بدون اتومبيل', '2' => 'اتومبیل کمتر از 30 میلیون تومان', '3' => 'داراي اتومبيل بين 30 تا 60 ميليون تومان', '4' => 'داراي اتومبيل بين 60 تا 100 ميليون تومان', '5' => 'داراي اتومبيل بين 100 تا 200 ميليون تومان', '6' => 'داراي اتومبيل بين 200 تا 400 ميليون تومان', '7' => 'اتومبیل بیشتر از 400 میلیون تومان'];

    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "1":
            echo "بدون اتومبیل";
            break;
        case "2":
            echo "کمتر از 30 میلیون تومان";
            break;
        case "3":
            echo "بين 30 تا 60 میلیون تومان";
            break;
        case "4":
            echo "بين 60 تا 100 میلیون تومان";
            break;
        case "5":
            echo "بين 100 تا 200 میلیون تومان";
            break;
        case "6":
            echo "بين 200 تا 400 میلیون تومان";
            break;
        case "7":
            echo "بيش از 400 ميليون تومان";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function healthConditionStatus($value, $array = false)
{
    if ($array) {
        return ['healthful' => 'سالم', 'special_disease' => 'دارای بیماری خاص (دیابت ، هپاتیت و ...)', 'defective' => 'دارای نقص عضو'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "healthful":
            echo "سالم";
            break;
        case "special_disease":
            echo "دارای بیماری خاص (دیابت ، هپاتیت و ...)";
            break;
        case "defective":
            echo "دارای نقص عضو";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function immigrationStatus($value, $array = false)
{
    if ($array) {
        return ['0' => 'ندارم', '1' => 'دارم'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "0":
            echo "ندارم";
            break;
        case "1":
            echo "دارم";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function jobStatus($value, $array = false)
{
    if ($array) {
        return ['unemployed' => 'بیکار', 'employed' => 'شاغل', 'student' => 'دانشجو'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "unemployed":
            echo "بیکار";
            break;
        case "employed":
            echo "شاغل";
            break;
        case "student":
            echo "دانشجو";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function marriageStatus($value, $array = false)
{
    if ($array) {
        return ['single' => 'مجرد', 'deceased_spouse' => 'همسر فوت شده', 'divorced' => 'طلاق گرفته'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "single":
            echo "مجرد";
            break;
        case "deceaed_wife":
            echo "همسر فوت شده";
            break;
        case "divorced":
            echo "طلاق گرفته";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function nationalityStatus($value, $array = false)
{
    if ($array) {
        return ['fars' => 'فارس', 'tork' => 'ترک', 'kurd' => 'کرد', 'lor' => 'لر', 'baloch' => 'بلوچ', 'mazani' => 'مازندرانی', 'gilak' => 'گیلک', 'arab' => 'عرب', 'etc' => 'سایر'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "fars":
            echo "فارس";
            break;
        case "tork":
            echo "ترک";
            break;
        case "kurd":
            echo "کرد";
            break;
        case "lor":
            echo "لر";
            break;
        case "baloch":
            echo "بلوچ";
            break;
        case "mazani":
            echo "مازندرانی";
            break;
        case "gilak":
            echo "گیلک";
            break;
        case "arab":
            echo "عرب";
            break;
        case "etc":
            echo "سایر";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function lifeStyleStatus($value, $array = false)
{
    if ($array) {
        return ['dependent' => 'همراه خانواده', 'independent' => 'مستقل (مجردی)'];

    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "dependent":
            echo "همراه خانواده";
            break;
        case "independent":
            echo "مستقل (مجردی)";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function sexStatus($value, $array = false)
{
    if ($array) {
        return ['f' => 'زن', 'm' => 'مرد'];

    }
    switch ($value) {
        case "f":
            echo "زن";
            break;
        case "m":
            echo "مرد";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}


function childStatus($value, $array = false)
{
    if ($array) {
        return ['0' => 'نداشته باشد', '1' => 'داشته باشد'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "0":
            echo "نداشته باشد";
            break;
        case "1":
            echo "داشته باشد";
            break;
        case "":
            echo "تعیین نشده";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function confirm($value ,$array = false)
{
    if ($array) {
        return ['unknown' => 'نامشخص', 'accept' => 'تایید', 'reject' => 'رد'];
    }
    switch ($value) {
        case "unknown":
            echo "نامشخص";
            break;
        case "accept":
            echo "تایید";
            break;
        case "reject":
            echo "رد";
            break;
        default :
            echo 'نامشخص';
            break;
    }
}

function persianNum($number)
{
    $number = str_replace("1", "۱", $number);
    $number = str_replace("2", "۲", $number);
    $number = str_replace("3", "۳", $number);
    $number = str_replace("4", "۴", $number);
    $number = str_replace("5", "۵", $number);
    $number = str_replace("6", "۶", $number);
    $number = str_replace("7", "۷", $number);
    $number = str_replace("8", "۸", $number);
    $number = str_replace("9", "۹", $number);
    $number = str_replace("0", "۰", $number);
    return $number;
}




 function modelResponse( $error = false, $message = '',$data='',$count=0)
{
    if (!empty($error) && $error == true) {
        $messages = $message;
    }

    return [
        'error' => !empty($messages) ? true : false,
        'message' => !empty($messages) ? $messages : '',
        'count' => !empty($count) ? $count : 0,
        'result' => !empty($data) ? $data : ''
    ];
}

 function responseHandler($error = false, $message = '',$data=[],$count=0)
{
    $messages = '';
    if (!empty($error) && $error == true) {
        $messages = $message;
    }

    $responseRecord = [
        'error' => !empty($messages) ? true : false,
        'message' => !empty($messages) ? $messages : [],
        'count' => (!empty($count)) ?$count : 0,
        'result' => (!empty($data)) ? $data : []
    ];

    return response()->json($responseRecord);
}

