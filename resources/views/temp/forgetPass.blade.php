@extends('welcome')
@section('content')
    @if(Session::has('success'))
        <div class="alert oaerror success" style="margin-top: 5px;" >{{Session::get('success')}}</div>
    @else
    <div class="container">
        <div class="row sign">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="row" style="-webkit-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             -moz-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;">
                    <div class="col-lg-12" id="dv_sign">
                        <div class="row">
                            <div class="col-lg-12"
                                 style="height: 40px;background-color: #33d346;text-align: center;padding-top: 10px;">
                                <span
                                    style="font-weight: bold;color: white;font-size: 18px;">ثبت نام در سایت {{config('constants.siteTitle')}}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                @if(Session::has('error'))
                                    <div class="alert oaerror danger" style="margin-top: 5px;" >{{Session::get('error')}}</div>
                                @endif
                                    {!! Form::open(['route'=>'forgetPass.send','style'=>'padding: 10px','id'=>'forgetPassForm']) !!}
                                    {{--                                {!! Form::hidden('_token',  csrf_token() ) !!}--}}
                                    <div class="form-group {{ $errors->has('username') ? 'has-error' : '' }}">
                                        {!! Form::label('ایمیل :') !!}
                                        {!! Form::text('username', old('username'), ['class'=>'form-control ','style'=>'direction: ltr']) !!}
                                        <span class="text-danger">{{ $errors->first('username') }}</span>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-default btn-send pull-left btn_green">
                                            <span><i class="fa fa-user-plus"></i>&nbsp;</span>ارسال

                                        </button>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    {!! Form::close() !!}
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
                        <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>خدمات
                            سایت
                            یارجان کاملا رایگان می باشد.</p>
                        <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span> سایت
                            همسریابی یارجان فقط در زمینه ازدواج دائم فعالیت دارد و در زمینه ازدواج موقت وصیغه و دوستیابی
                            هیچگونه فعالیتی ندارد . </p>
                        <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>شماره
                            همراه
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

                    <div class="row" class="rule_site" style="background-color:  #ffffff;padding: 15px;">
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

    @endif

@stop

