@extends('welcome')
@section('content')
    <style>
        input[type="text"], input[type="email"], input[type="password"] {
            height: 34px;
        }
.msg_err{
    line-height: .8;
}
        .oaerror {
            margin: 0 auto; /* Centering Stuff */
            background-color: #FFFFFF; /* Default background */
            padding: 20px;
            border: 1px solid #eee;
            border-right-width: 5px;
            border-radius: 3px;
            margin: 0 auto;
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
        }

        .danger {
            border-right-color: #d9534f; /* Left side border color */
            background-color: #fdf7f7; /* Same color as the left border with reduced alpha to 0.1 */
        }

        .danger strong {
            color: #d9534f;
        }

        .warning {
            border-right-color: #f0ad4e;
            background-color: #fcf8f2;
        }

        .warning strong {
            color: #f0ad4e;
        }

        .info {
            border-right-color: #5bc0de;
            background-color: #f4f8fa;
        }

        .info strong {
            color: #5bc0de;
        }

        .success {
            border-right-color: #3C763D;
            background-color: #66ff33;
            color: #3C763D;
        }

        .success strong {
            color: #2b542c;
        }

        .contact-form .textarea {
            min-height: 220px;
            resize: none;
        }


        .form-control:focus {
            box-shadow: none;
            border-color: #FFA500;
        }

        .btn_sign_in {
            border-radius: 0px;
            border: 1px solid #00bfff;
            background: #00bfff;
            color: #fff;
        }

        .btn_sign_in:hover {
            border: 1px solid #00bfff;
            background: #fff;
            color: #00bfff;
            transition: background 0.5s;
        }

        .btn_sign_up {
            border-radius: 0px;
            border: 1px solid #FFA500;
            background: #FFA500;
            color: #fff;
        }

        .btn_sign_up:hover {
            border: 1px solid #FFA500;
            background: #fff;
            color: #FFA500;
            transition: background 0.5s;
        }
    </style>

    <div class="container">
    <div class='oaerror success' style="display: none;" id="dv_success"></div>
    <div class="row sign">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="row" style="-webkit-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             -moz-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;">
                <div class="col-lg-12" id="dv_sign">
                    <div class="row">
                        <div class="col-lg-12"
                             style="height: 40px;background-color: #FFA500;text-align: center;padding-top: 10px;">
                            <span style="font-weight: bold;color: white;font-size: 18px;">لطفا  ثبت نام نمایید</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <div style='text-align:center;color: red; font-size: 14px;min-height: 40px;padding-top: 10px;'
                                 id="alert_warn"></div>

                            <form class="form-horizontal" role="form" style="padding: 10px;" id="signUpForm">
<input type="hidden" name="_token" value="<?php echo csrf_token(); ?>"/>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="first_name" style="text-align: right;">نام
                                        :</label>
                                    <div class="col-lg-8">
                                        <input class="form-control input-sm " id="first_name" name="first_name"
                                               type="text">
                                        <div id="alert_first_name"
                                             style="display:none;color: red; font-weight: bold;"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="last_name" style="text-align: right;">
                                        فامیلی :</label>
                                    <div class="col-lg-8">
                                        <input class="form-control  input-sm " id="last_name" name="last_name"
                                               type="text">
                                        <div id="alert_last_name"
                                             style="display:none;color: red; font-weight: bold;"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="sex" style="text-align: right;">جنسیت
                                        :</label>
                                    <div class="col-lg-8">
                                        <select id="sex" name="sex" class="input-sm form-control">
                                            <option value="">انتخاب کنید</option>
                                            <option value="F">زن</option>
                                            <option value="M">مرد</option>
                                        </select>
                                        <div id="alert_sex" style="display:none;color: red; font-weight: bold;"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" style="text-align: right;">تاریخ تولد
                                        :</label>
                                    <div class="col-lg-8">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <select id="birth_date_day" name="birth_date_day"
                                                        class="input-sm form-control">
                                                    <option value="">روز</option>
                                                    <?php
                                                    for ($i = 1; $i <= 31; $i++)
                                                        for ($i = 1; $i <= 31; $i++) {

                                                            echo "<option value='{$i}' >" . $i . "</option>";
                                                        }
                                                    ?>
                                                </select>
                                            </div>
                                            <div class="col-lg-4">

                                                <select id="birth_date_month" name="birth_date_month"
                                                        class=" input-sm form-control">
                                                    <option value="">ماه</option>
                                                    <?php
                                                    for ($i = 1; $i <= 12; $i++) {

                                                        echo "<option value='{$i}'>" . $i . "</option>";
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                            <div class="col-lg-4">
                                                <select id="birth_date_year" name="birth_date_year"
                                                        class="input-sm form-control ">
                                                    <option value="">سال</option>
                                                    <?php
                                                    for ($i = 1330; $i <= 1380; $i++) {
                                                        echo "<option value='{$i}' >" . $i . "</option>";
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div id="alert_birth_date_day"
                                             style="display:none;color: red; font-weight: bold;"></div>
                                        <div id="alert_birth_date_month"
                                             style="display:none;color: red; font-weight: bold;"></div>
                                        <div id="alert_birth_date_year"
                                             style="display:none;color: red; font-weight: bold;"></div>


                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="provicne" style="text-align: right;">استان
                                        محل زندگی:</label>
                                    <div class="col-lg-8">
                                        <select id="province" name="province" class="input-sm form-control ">
                                            <option value="">انتخاب کنید</option>
                                            @if(isset($provinces))
                                            @foreach($provinces as $key)
                                                    <option value='{{$key->id}}' >{{$key->name}}</option>
                                            @endforeach
                                            @endif
                                        </select>
                                        <div id="alert_province"
                                             style="display:none;color: red; font-weight: bold;"></div>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="city" style="text-align: right;">شهرستان
                                        محل زندگی:</label>
                                    <div class="col-lg-8" id="dv_city">
                                        <select id="city" name="city" class="input-sm form-control ">
                                        </select>
                                        <div id="alert_city" style="display:none;color: red; font-weight: bold;"></div>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="mobile" style="text-align: right;">شماره
                                        همراه:</label>
                                    <div class="col-lg-8">
                                        <input type="text" class="form-control" id="mobile" name="mobile" maxlength="11"
                                               style="direction: ltr;" autofocus>
                                        <div id="alert_mobile"
                                             style="display:none;color: red; font-weight: bold;"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="pass1" style="text-align: right;"> رمز
                                        عبور:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" id="pass1" name="pass1" type="password"
                                               style="direction: ltr;">
                                        <div id="alert_pass1" style="display:none;color: red; font-weight: bold;"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="pass2" style="text-align: right;"> تکرار
                                        رمز عبور:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" id="pass2" name="pass2" type="password"
                                               style="direction: ltr;">
                                        <div id="alert_pass2" style="display:none;color: red; font-weight: bold;"></div>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-lg-12">
                                        <div class="checkbox">
                                            <label><input type="checkbox" id="accept_terms_checkbox"
                                                          name="accept_terms_checkbox" value="terms">کلیه <a
                                                        href="javascript:null;" data-toggle="modal"
                                                        data-target="#contact" data-original-title>قوانین سایت
                                                    یارجان</a> را مطالعه و می پذیرم.</label>
                                            <div id="alert_terms"
                                                 style="display:none;color: red; font-weight: bold;"></div>

                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <a class="btn btn-default btn-send pull-left btn_sign_up" href="javascript:void(0);"
                                       onclick="javascrit:send(false)"><span><i class="fa fa-user-plus"></i>&nbsp;</span>ثبت
                                        نام رایگان </a>
                                </div>
                                <div style="text-align: center;"><a href="<?php echo 'forgetPass'; ?>"><span><i
                                                    class="fa fa-question-circle"></i>&nbsp;</span>رمز عبور خود را
                                        فراموش کرده ام</a></div>
                            </form>
                            <div class="form-horizontal" role="form" style="padding: 10px;display: none;"
                                 id="dv_verify">
                                <p><i class="fa fa-2x fa-mobile-alt" style="color: #FFA500;"></i>&nbsp;لطفا شناسه ارسالی
                                    به موبایل خود را وارد نمایید:</p>
                                <br/>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="verify_code" style="text-align: right;">
                                        شناسه :</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" id="verify_code" name="verify_code" maxlength="6"
                                               style="direction: ltr;">
                                        <div id="alert_verify_code"
                                             style="display:none;color: red; font-weight: bold;"></div>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <a class="btn btn-default btn-send pull-left btn_sign_up" href="javascript:void(0);"
                                       onclick="javascrit:verify()"><span><i class="fa fa-mobile-alt"></i>&nbsp;</span>تایید</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="col-lg-8 col-md-8 col-sm-8 hidden-xs">
            <div class="row" style="    border-right: 10px solid transparent; ">
                <div class="col-lg-12" style="-webkit-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
                 -moz-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
                 box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;line-height: 2;text-align: justify;padding: 10px;">
                    <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>خدمات سایت
                        یارجان کاملا رایگان می باشد.</p>
                    <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span> سایت
                        همسریابی یارجان فقط در زمینه ازدواج دائم فعالیت دارد و در زمینه ازدواج موقت وصیغه و دوستیابی
                        هیچگونه فعالیتی ندارد . </p>
                    <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>شماره همراه
                        با صفر شروع می شود برای نمونه 09121234567

                </div>
            </div>
        </div>
    </div>
    </div>


    <div id="contact" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="contactLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="lbOnoff"></h4>
                </div>
                <div class="modal-body" id="okAlert2">

                    <div class="row" style="background-color:  #ffffff;padding: 15px;">
                        <div class="col-lg-12">
                            <div class="update-nag">
                                <div class="update-split pull-right"><i style="padding-top: 8px;"
                                                                        class="fa fa-balance-scale"></i></span></div>
                                <div class="update-text pull-right"
                                     style="background-color: #f5f6f5;width: 250px; text-align: right;padding: 8px;font-size: 18px;font-weight: bold;">
                                    قوانین سایت <b style="color:green;">یارجان</b></div>
                            </div>
                        </div>
                        <p><span class="check_rules">&check;&nbsp;</span> سایت همسریابی <b
                                    style="color:green;">یارجان</b> در چارچوب قوانین اینترنتی جمهوری اسلامی ایران فعالیت
                            میکند. </p>
                        <p><span class="check_rules">&check;&nbsp;</span>سایت همسریابی <b
                                    style="color:green;">یارجان</b> به عنوان یک شبکه احتماعی به هیچ عنوان در زمینه های
                            دوست یابی و ازدواج موقت فعالیت نمیکند، بلکه یک پایگاه داده در زمینه ازدواج دایم است. </p>
                        <p><span class="check_rules">&check;&nbsp;</span>حق حریم خصوصی کلیه اعضای سایت محفوظ بوده و
                            اطلاعات شخصی آنها در اختیار کسی قرار نخواهد گرفت. </p>
                        <p><span class="check_rules">&check;&nbsp;</span>چنانچه کاربری بخواهد در این سایت در زمینه هایی
                            غیر از همسریابی دایم فعالیت کند ، پروفایل وی مسدود خواهد شد.
                        <p>
                        <h3>پذیرش قوانین</h3>
                        <p>
                            ثبت نام در سایت و استفاده از خدمات آن به معنای پذیرش و موافقت با کلیه قوانین سایت میباشد.
                            چنانچه شما موافق قوانین و مقررات سایت نمی باشید در سایت ثبت نام ننمایید.
                            چنانچه شما دارای سن کمتر از 18 سال میباشید و یا نیت و درخواستی غیر از ازدواج شرعی و قانونی
                            از فعالیت یار جان را دارید (مثلا تبلیغات - استخدام منشی و دوستی و ...) نباید قوانین را
                            پذیرفته و در سایت ثبت نام نمایید.
                        </p>
                        <h3>استفاده از خدمات سایت</h3>
                        <p>
                            1- شما پس از تشکیل نمایه (پروفایل) میتوانید در میان کاربران سایت (جنس مخالف) جستجو نمایید.
                            پس از انتخاب فرد مورد نظر به وی درخواست آشنایی ارسال نمایید تا ایشان نیز پس از مطالعه
                            پروفایل شما، تمایل یا عدم تمایل خود را اعلام نماید.

                        </p>
                        <p>
                            2- در صورتی که دو نفر مایل به آشنایی بیشتر باشند میتوانند اقدام به ارسال پیام شخصی نمایند.
                            ارسال پیام شخصی از امکانات اعضای ویژه است.
                        </p>
                        <p>
                            3- در صورتی که شما عضو ویژه باشید، گیرنده پیام میتواند به پیام شما با متن دلخواه، پاسخ دهد.
                        </p>
                        <p>
                            4- در صورتی که مایل باشید میتوانید با تهیه بسته های پیامکی، پیامهای خود به کاربران را از
                            طریق پیامک (اس ام اس) اطلاع رسانی نمایید. این امکان خصوصا برای فردی که مدتیست به سایت مراجعه
                            نکرده و شما مایلید با وی آشنا شوید مفید خواهد بود.
                        </p>
                        <p>
                            5- ما پیامک ها را به صورتی آنی و به شکل مطلوب ارسال میکنیم، اما تحویل آن به مقصد بر عهده
                            مخابرات است.
                        </p>
                        <p>
                            6- در صورتی که شما سرویسی را خریداری نمایید، پس از فعال شدن سرویس به هیج عنوان امکان استرداد
                            وجه وجود ندارد.
                        </p>
                        <p>
                            7- در صورتی که مسوولین سایت به صحت برخی از اطلاعات پروفایل شما مشکوک شوند، مختارند تا
                            پروفایل را بحالت تعلیق درآورده و درخواست مدراک مثبته نمایند.</p>
                        <h3>تخلف کاربر</h3>
                        <p>موارد زیر تخلف بوده و منجر به اخطار و یا انسداد پروفایل میگردد:</p>
                        <div style="padding-right: 20px;">
                            <p> 1. داشتن سن پایین تر از 18 سال</p>
                            <p>2. داشتن اهدافی غیر از ازدواج شرعی و قانونی</p>
                            <p>3. داشتن تاهل آقایان بدون رضایت همسر اول یا تاهل بانوان</p>
                            <p>4. ارسال پیامهای تبلیغاتی و سیاسی در سایتn</p>
                            <p>5. توهین و تحقیر به اعضای سایت و یا قومیت هاسال</p>
                            <p>6. ثبت اطلاعات نادرست اعم از نوشتاری و تصویری</p>
                            <p>7. ارسال اسپم هرزنامه</p>
                            <p>8. هرگونه درخواست مبلغ ، شارژ موبایل و ...</p>
                            <p>9. گذاشتن شماره تماس ، آدرس ایمیل و هرگونه امکان ارتباطی دیگر در پروفایل بغیر از بخش های
                                مخصوص آن</p>
                            <p>10. پرکردن فرم ثبت نام با کلمات و واژه های نامربوط و تصادفی</p>
                            <p>11. بیان و نوشتن کلمات یا جملات محرک جنسی در پیام ها یا نمایه</p>
                        </div>
                        <br>
                        <p>
                            - با توجه به فضای مجازی اینترنت ، اثبات برخی موارد تخلف بعضا دشوار میباشد، با این حال
                            مسئولین سایت چنانچه ظن قوی به تخلف شما پیدا کنند مختارند تا از ادامه فعالیت شما جلوگیری بعمل
                            آورند
                        </p>
                        <p>
                            - در صورت انسداد پروفایل شما توسط مسوولین سایت، تمام سرویسهای شما قطع و چنانچه بابت آنها
                            پرداختی انجام داده اید، قابل استرداد نمیباشد.

                        </p>
                        <p>
                            -چنانچه پروفایل شما در گذشته مسدود شده باشد، حق استفاده مجدد از سایت را نخواهید داشت و در
                            صورت مشاهده، بدون تذکر قبلی پروفایل جدید شما بسته خواهد شد.
                        </p>
                        <h3>سلب مسئولیت</h3>
                        <p>
                            ما تمام تلاش خود را میکنیم تا محیط امنی را برای شما فراهم کنیم، اما تحقیق و بررسی اصلی در
                            مورد صحت و سقم اطلاعات کاربران بر عهده خود شماست.
                            ما هیچگونه مسئولیتی را در مقابل اطلاعات غلط، سوء استفاده و یا فریب احتمالی را نمی پذیریم.
                        </p>
                        <h3>حریم خصوصی</h3>
                        <p>
                            ما اطلاعات شخصی شما مانند ایمیل و شماره تماس را در اختیار دیگران قرار نمیدهیم.
                            اطلاعات تماس شما به صورت پیش فرض به کاربران سایت نمایش داده نمیشود مگر اینکه در بخش تنظیمات
                            سایت به نحو دیگری آنرا تغییر دهید.
                            در صورت درخواست مقامات قضایی، ما اطلاعات لازم را در اختیار ایشان قرار خواهیم داد.
                        </p>
                        <h3>تغییر قوانین</h3>
                        <p>
                            قوانین سایت ممکن است به مرور زمان دستخوش تغییراتی شود، لذا شما موظفید تا به این صفحه مراجعه
                            و آخرین تغییرات را مطالعه نمایند.
                            در صورت تغییر قوانین در بخش اخبار سایت اطلاع رسانی صورت خواهد گرفت.
                        </p>


                    </div>
                </div>
                <div class="modal-footer">
                    <button data-dismiss="modal" type="button" class="btn btn-danger"
                            style="background-color: #fd265a;">بستن
                    </button>
                </div>
            </div>
        </div>
    </div>


    <style>
        .check_rules {
            font-size: 18px;
            font-weight: bold;
            color: red;
        }

        p {
            line-height: 2;
            padding-right: 20px;
            text-align: justify;
        }

        .update-nag {
            display: inline-block;
            font-size: 14px;
            text-align: left;
            background-color: #fff;
            height: 35px;
            -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .2);
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
            margin-bottom: 10px;
        }


        .update-nag > .update-split {
            background: red;
            width: 33px;
            float: left;
            color: #fff !important;
            height: 100%;
            text-align: center;
        }

        .update-nag > .update-split > .glyphicon {
            position: relative;
            top: calc(50% - 9px) !important; /* 50% - 3/4 of icon height */
        }

        .update-nag > .update-split.update-success {
            background: #5cb85c !important;
        }

        .update-nag > .update-split.update-danger {
            background: #d9534f !important;
        }

        .update-nag > .update-split.update-info {
            background: #5bc0de !important;
        }


        .update-nag > .update-text {
            line-height: 19px;
            padding-top: 11px;
            padding-left: 45px;
            padding-right: 20px;
        }
    </style>
    <script>
        $("#province").change(function (event) {
            $("#city").prop("disabled", true);

            var selected = $('#province').val();
            event.preventDefault();
            $.ajax({
                url: 'getCity',
                data: {'provinceId': selected,'_token':_TOKEN},
                type: 'post',
                success: function (data, textStatus) {
                    var items;
                    items += "<option selected value=''>شهرستان </option>";
                    $.each(data.msg, function (index, item) {
                        items += "<option value='" + item.id + "'>" + item.name + "</option>";
                    });
                    $("#city").html(items);
                    $("#city").prop("disabled", false);

                },
                error: function (xhr, textStatus, errorThrown) {
                    $("#city").prop("disabled", false);
                    alert('request failed');
                }
            });

        });

        function send(debug) {
            var first_name = $("#first_name");
            var alert_first_name = $("#alert_first_name");
            var last_name = $("#last_name");
            var alert_last_name = $("#alert_last_name");
            var sex = $("#sex");
            var alert_sex = $("#alert_sex");
            var birth_date_day = $("#birth_date_day");
            var alert_birth_date_day = $("#alert_birth_date_day");
            var birth_date_month = $("#birth_date_month");
            var alert_birth_date_month = $("#alert_birth_date_month");
            var birth_date_year = $("#birth_date_year");
            var alert_birth_date_year = $("#alert_birth_date_year");
            var province = $("#province");
            var alert_province = $("#alert_province");
            var city = $("#city");
            var alert_city = $("#alert_city");
            var mobile = $("#mobile");
            var alert_mobile = $("#alert_mobile");
            var pass1 = $("#pass1");
            var alert_pass1 = $("#alert_pass1");
            var pass2 = $("#pass2");
            var alert_pass2 = $("#alert_pass2");
            var alert_terms = $("#alert_terms");
            var mo = true, p1 = true, p2 = true, terms = true, fn = true, ln = true, sx = true, bd = true, bm = true,
                by = true, pv = true, ct = true;
          if(debug) {
              if (first_name.val() == '') {
                  first_name.css('border', '1px solid #F00');
                  alert_first_name.show();
                  alert_first_name.text("لطفا نام راوارد نمایید!");
                  $("#first_name").focus();
                  fn = false;
              } else {
                  first_name.css('border', '1px solid #CCCCCC');
                  alert_first_name.text("");
                  alert_first_name.hide();
                  $("#first_name").focus();
              }

              if (last_name.val() == '') {
                  last_name.css('border', '1px solid #F00');
                  alert_last_name.show();
                  alert_last_name.text("لطفا نام خانوادگی را وارد نمایید!");
                  $("#last_name").focus();
                  ln = false;
              } else {
                  last_name.css('border', '1px solid #CCCCCC');
                  alert_last_name.text("");
                  alert_last_name.hide();
                  $("#last_name").focus();
              }

              if (sex.val() == '') {
                  sex.css('border', '1px solid #F00');
                  alert_sex.show();
                  alert_sex.text("لطفا جنسیت را انتخاب نمایید!");
                  $("#sex").focus();
                  sx = false;
              } else {
                  sex.css('border', '1px solid #CCCCCC');
                  alert_sex.text("");
                  alert_sex.hide();
                  $("#sex").focus();
              }

              if (birth_date_day.val() == '') {
                  birth_date_day.css('border', '1px solid #F00');
                  alert_birth_date_day.show();
                  alert_birth_date_day.text("لطفا روز تاریخ تولد را انتخاب نمایید!");
                  $("#birth_date_day").focus();
                  bd = false;
              } else {
                  birth_date_day.css('border', '1px solid #CCCCCC');
                  alert_birth_date_day.text("");
                  alert_birth_date_day.hide();
                  $("#birth_date_day").focus();
              }

              if (birth_date_month.val() == '') {
                  birth_date_month.css('border', '1px solid #F00');
                  alert_birth_date_month.show();
                  alert_birth_date_month.text("لطفا ماه تاریخ تولد را انتخاب نمایید!");
                  $("#birth_date_month").focus();
                  bm = false;
              } else {
                  birth_date_month.css('border', '1px solid #CCCCCC');
                  alert_birth_date_month.text("");
                  alert_birth_date_month.hide();
                  $("#birth_date_month").focus();
              }

              if (birth_date_year.val() == '') {
                  birth_date_year.css('border', '1px solid #F00');
                  alert_birth_date_year.show();
                  alert_birth_date_year.text("لطفا سال تاریخ تولد را انتخاب نمایید!");
                  $("#birth_date_year").focus();
                  by = false;
              } else {
                  birth_date_year.css('border', '1px solid #CCCCCC');
                  alert_birth_date_year.text("");
                  alert_birth_date_year.hide();
                  $("#birth_date_year").focus();
              }

              if (province.val() == '') {
                  province.css('border', '1px solid #F00');
                  alert_province.show();
                  alert_province.text("لطفا استان را انتخاب نمایید!");
                  $("#province").focus();
                  pv = false;
              } else {
                  province.css('border', '1px solid #CCCCCC');
                  alert_province.text("");
                  alert_province.hide();
                  $("#province").focus();
              }

              if (province.val() == '') {
                  city.css('border', '1px solid #F00');
                  alert_city.show();
                  alert_city.text("لطفا شهر را  انتخاب نمایید!");
                  $("#city").focus();
                  ct = false;
              } else {
                  city.css('border', '1px solid #CCCCCC');
                  alert_city.text("");
                  alert_city.hide();
                  $("#city").focus();
              }

              if (mobile.val() == '' || !mobile.val().match(/^09\d{9}$/)) {
                  mobile.css('border', '1px solid #F00');
                  alert_mobile.show();
                  alert_mobile.text("شماره همراه معتبر نمی باشد!");
                  $("#mobile").focus();
                  mo = false;
              } else {
                  mobile.css('border', '1px solid #CCCCCC');
                  alert_mobile.text("");
                  alert_mobile.hide();
                  $("#mobile").focus();
              }
              if (pass1.val() == '') {
                  pass1.css('border', '1px solid #F00');
                  alert_pass1.show();
                  alert_pass1.text("لطفا رمز عبور را وارد نمایید!");
                  $("#mobile").focus();
                  p1 = false;
              } else if (pass1.val().length < 6) {
                  pass1.css('border', '1px solid #F00');
                  alert_pass1.show();
                  alert_pass1.text("رمز عبور می بایست حداقل 6 کاراکتر باشد.!");
                  $("#mobile").focus();
                  p1 = false;
              } else {
                  pass1.css('border', '1px solid #CCCCCC');
                  alert_pass1.text("");
                  alert_pass1.hide();
                  $("#mobile").focus();

              }

              if (pass2.val() == '') {
                  pass2.css('border', '1px solid #F00');
                  alert_pass2.show();
                  alert_pass2.text("لطفا تکرار رمز عبور را وارد نمایید!");
                  $("#mobile").focus();
                  p2 = false;
              } else if (pass1.val() != pass2.val()) {
                  pass2.css('border', '1px solid #F00');
                  alert_pass2.show();
                  alert_pass2.text(" رمز عبور با تکرار آن مطابقت ندارد!");
                  $("#mobile").focus();

                  p2 = false;
              } else {
                  pass2.css('border', '1px solid #CCCCCC');
                  alert_pass2.text("");
                  alert_pass2.hide();
                  $("#mobile").focus();

              }
              if (!$('#accept_terms_checkbox').is(':checked')) {
                  terms = false;
                  alert_terms.show();
                  alert_terms.text("لطفا قوانین سایت را پس از مطالعه انتخاب نمایید ");
                  alert_pass1.text("لطفا رمز عبور را وارد نمایید!");
                  $("#mobile").focus();

              } else {
                  alert_terms.hide();
                  alert_terms.text("");
                  $("#mobile").focus();

              }
              if (mo == false || p1 == false || p2 == false || terms == false || fn == false || ln == false || sx == false || bd == false || bm == false || by == false || pv == false || ct == false) {
                  return;
              }
          }
            $('#dv_sign').block({
                message: '<h6><img src="views" />در حال بررسی اطلاعات...',
                css: {backgroundColor: '#FFA500'}
            });
            $.ajax({
                url: 'signUp',
                data: $('#signUpForm').serialize(),
                type: 'post',
                success: function (data, textStatus) {
                    if (data.hasErr==false) {
                        $("#alert_warn").html("");
                        $('#dv_sign').unblock();
                        $('#signUpForm').hide();
                        $('#dv_verify').show();
                        alert_pass1.text("لطفا رمز عبور را وارد نمایید!");
                        $("#verify_code").focus();
                    } else {
                        $('#dv_sign').unblock();
                        $("#alert_warn").append(data.msg);
                        alert_pass1.text("لطفا رمز عبور را وارد نمایید!");
                        $("#mobile").focus();

                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    $('#dv_sign').unblock();

                    alert('request failed');
                }
            });
        }

        function verify() {
            var verify_code = $("#verify_code");
            var alert_verify_code = $("#alert_verify_code");
            if (verify_code.val() == '' || verify_code.val().length != 6) {
                verify_code.css('border', '1px solid #F00');
                alert_verify_code.show();
                alert_verify_code.text("کد تاییدیه معتبر نمی باشد!");
                $("#verify_code").focus();

                return;
            }
            $('#dv_sign').block({
                message: '<h6><img src="{{asset('img/loading.gif')}}" />در حال بررسی اطلاعات...',
                css: {backgroundColor: '#FFA500'}
            });
            $.ajax({
                url: BASE_URL + 'signUpMobile/verify',
                data: {
                    "mobile": $('#mobile').val(),
                    "verify_code": $('#verify_code').val()
                },
                type: 'post',
                success: function (data, textStatus) {
                    var res = jQuery.parseJSON(data);
                    if (res.status) {
                        $("#alert_warn").html("");
                        $('#dv_sign').unblock();
                        $('.sign').hide();
                        $('#dv_success').show();
                        $('#dv_success').html(res.msg);
                    } else {
                        $('#dv_sign').unblock();
                        $("#alert_warn").html(res.msg);
                        $("#verify_code").focus();

                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    $('#dv_sign').unblock();

                    alert('request failed');
                }
            });
        }
    </script>
@stop
