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
        return ['under_diploma' => 'زیر دیپلم', 'diploma' => 'دیپلم', 'above_diploma' => 'فوق دیپلم', 'licensee' => 'لیسانس', 'above_licensee' => 'فوق لیسانس', 'public_dr' => 'دکترای عمومی', 'private_dr' => 'دکترای تخصصی', 'above_dr' => 'فوق تخصص', 'hozavi' => 'حوزوی'];
    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "under_diploma":
            echo "زیر دیپلم";
            break;
        case "diploma":
            echo "دیپلم";
            break;
        case "above_diploma":
            echo "فوق دیپلم";
            break;
        case "licensee":
            echo "لیسانس";
            break;
        case "above_licensee":
            echo "فوق لیسانس";
            break;
        case "public_dr":
            echo "دکترای عمومی";
            break;
        case "private_dr":
            echo "دکترای تخصصی";
            break;
        case "above_dr":
            echo "فوق تخصص";
            break;
        case "hozavi":
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
        return ['white' => 'سفید', 'bright_brunetee' => 'سبزه روشن', 'dark_brunetee' => 'سبزه تیره', 'balk' => 'سیاه'];
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
        case "balk":
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
        return ['0' => 'بدون درآمد', '-2M' => 'زیر 2 میلیون تومان', '2M-5M' => 'بين 2 تا 5 میلیون تومان', '5M-10M' => 'بين 5 تا 10 میلیون تومان', '+10M' => 'بیش از 10 میلیون تومان'];

    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "0":
            echo "بدون درآمد";
            break;
        case "-2M":
            echo "زیر 2 میلیون تومان";
            break;
        case "2M-5M":
            echo "بين 2 تا 5 میلیون تومان";
            break;
        case "5M-10M":
            echo "بين 5 تا 10 میلیون تومان";
            break;
        case "+10M":
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
        return ['0' => 'بدون اتومبيل', '-30M' => 'اتومبیل کمتر از 30 میلیون تومان', '30M-60M' => 'داراي اتومبيل بين 30 تا 60 ميليون تومان', '60M-100M' => 'داراي اتومبيل بين 60 تا 100 ميليون تومان', '100M-200M' => 'داراي اتومبيل بين 100 تا 200 ميليون تومان', '200M-400M' => 'داراي اتومبيل بين 200 تا 400 ميليون تومان', '+400M' => 'اتومبیل بیشتر از 400 میلیون تومان'];

    }
    switch ($value) {
        case "-1":
            echo "مهم نیست";
            break;
        case "0":
            echo "بدون اتومبیل";
            break;
        case "-30M":
            echo "کمتر از 30 میلیون تومان";
            break;
        case "30M-60M":
            echo "بين 30 تا 60 میلیون تومان";
            break;
        case "60M-100M":
            echo "بين 60 تا 100 میلیون تومان";
            break;
        case "100M-200M":
            echo "بين 100 تا 200 میلیون تومان";
            break;
        case "200M-400M":
            echo "بين 200 تا 400 میلیون تومان";
            break;
        case "+400M":
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


