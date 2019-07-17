@extends('home')
@section('content')
    <div class="row">
        <div class=" col-lg-12 col-md-12  col-sm-12 col-xs-12 ">
            <table class="table" border="2">
                <thead>
                <tr>
                    <th>امکانات</th>
                    <th>عضویت عادی</th>
                    <th>عضویت ویژه</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="feature">تشکیل پروفایل</td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">مشاهده 5 بازدیدکنندگان پروفایل خود</td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">مشاهده 24 بازدیدکنندگان پروفایل خود</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">افزودن 5 پروفایل به لیست علاقه مندی ها</td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">افزودن 40 پروفایل به لیست علاقه مندی ها</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">آگاهی از دریافت پیام جدید از طریق ایمیل</td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">نمایش اطلاعات تماس خود به اعضای ویژه (در صورت تمایل)</td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">مشاهده اطلاعات تماس اعضای ویژه (اگر اجازه داده اند)</td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">ایجاد آلبوم عکس</td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">ارسال پیام علاقه مندی</td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">ارسال پیام شخصی</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">نمایش اطلاعات تماس خود به همه اعضا (در صورت تمایل)</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">مشاهده اطلاعات تماس همه اعضا (اگر اجازه داده اند)</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">آشنایی انحصاری با فرد مقابل</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">سامانه گوش بزنگ (اعتبار پیامکی لازم است)</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">جستجوی پیشرفته</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">نمایش زنده ورود کاربران آنلاین به سایت</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">گفتگوی آنلاین (چت)</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">خرید بسته های پیامکی</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">انتخاب کاور برای پروفایل</td>
                    <td><i class="fa fa-times ico-no fa-lg"></i></td>
                    <td><i class="fa fa-check ico-yes fa-lg"></i></td>
                </tr>
                <tr>
                    <td class="feature">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td style="text-align: center;"><a class="btn btn-danger btn-send pull-left " style="background-color:  #FF0019;" href="javascript:void(0);"
                           onclick="nextStep3();"><span>پرداخت <i
                                    class="fa fa-chevron-left"></i>&nbsp;</span></a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <style>
        thead th {
            height: 50px !important;
            background-color: #00CCFC;
            color: white;
            font-size: 18px;
            text-align: center !important;
        }

        .ico-no {
            color: #FF0019;
        }

        .ico-yes {
            color: #00cc00;
        }

        tr :nth-child(2), tr :nth-child(3) {
            text-align: center;
        }
    </style>
@stop

