<?php

return [
    'siteAddress' => 'www.modeling.ir',
    'siteTitle' => 'مدلینگ',
    'cpoyRightDate' => '2018',
    'upload' => [
        'register' => [
            'imageWidth' => 400,
            'imageHeight' => 400,
            'fileSizeByte' => 4000000,//4M=4000000
            'fileSizeKiloByte' => 4096,//4M=4000000
            'fileSizeSymbol' => '4M', //4M=4000000
            'allowExtensionJS' => '/(\.jpg|\.jpeg)$/i',
            'allowExtensionPHP' => 'jpeg,jpg',
            'loadingFile' => '/img/7070.gif',
            'imageFolder' => 'storage/images/',
        ]
    ],
    'cookieAliveTime'=>31556926,// where 31556926 is total seconds for a year.

'UserLogErrCode'=>[
        'incorrect'=>'incorrect',
        'noAgree'=>'noAgree',
        'noActive'=>'noActive',
        'successLogin'=>'successLogin',
        'sendVerifyCode'=>'sendVerifyCode',
        'noRole'=>'noRole'
    ],'userOnlinetime'=>300 //second
];


//MY CONSTANTS
//define("SMSAPI", "5477476A745277707470462B612B56417A4D6C6550642F3348483166654C3535");
//define("SMSLINE", "30006703323323");
//define("DOMAIN", (ENVIRONMENT == 'development') ? "iranmadre3.loc" : "iranmadre3.ir");
////define("DOMAIN",  "iranmadre3.ir");
//define("COOKIE_NAME", 'IRANMADRE3');
//define("SITE_URL", 'http://www.iranmadre3.ir');
//define("HOME_URL", 'main/');
//define("ERRPOINT", '__ERRPOINT__ ');
//
//if (isset($_COOKIE[COOKIE_NAME]))
//{
//    define("USERID", unserialize($_COOKIE[COOKIE_NAME])['USERID']);
//    define("USERNAME", unserialize($_COOKIE[COOKIE_NAME])['USERNAME']);
//    define("USERROLE", unserialize($_COOKIE[COOKIE_NAME])['USERROLE']);
//    define("FIRSTNAME", unserialize($_COOKIE[COOKIE_NAME])['FIRSTNAME']);
//    define("LASTNAME", unserialize($_COOKIE[COOKIE_NAME])['LASTNAME']);
//    define("BALANCE", unserialize($_COOKIE[COOKIE_NAME])['BALANCE']);
//}
//else
//{
//    define("USERID", NULL);
//}
