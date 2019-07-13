@extends('home')
@section('content')
@section('title', __('titles.signUp'))
@if(!Session::has('success'))
        <div class="container">
            <div class="row sign">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="row" style="-webkit-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             -moz-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;">
                        <div class="col-lg-12" id="dv_sign">
                            <div class="row">
                                <div class="col-lg-12"
                                     style="height: 40px;background-color: #FFA500;text-align: center;padding-top: 10px;">
                                <span
                                    style="font-weight: bold;color: white;font-size: 18px;">ثبت نام در سایت {{config('constants.siteTitle')}}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    @include('partials.alerts')
                                    {!! Form::open(['route'=>'signUp.store','style'=>'padding: 10px','id'=>'signUpForm','class'=>'form-horizontal']) !!}

                                    <div class="form-group {{ $errors->has('fname') ? 'has-error' : '' }} ">
                                        {!! Form::label('نام :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">
                                            {!! Form::text('fname', '', ['class'=>'form-control input-sm','id'=>'fname']) !!}
                                            <span class="text-danger small ">{{ $errors->first('fname') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group {{ $errors->has('lname') ? 'has-error' : '' }} ">
                                        {!! Form::label('نام خانوادگی :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">
                                            {!! Form::text('lname', '', ['class'=>'form-control input-sm','id'=>'lname']) !!}
                                            <span class="text-danger small ">{{ $errors->first('lname') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group {{ $errors->has('nick_name') ? 'has-error' : '' }} ">
                                        {!! Form::label('نام مستعار :','',['class' => 'control-label input-sm col-lg-4']) !!}
                                        <div class="col-lg-8">
                                            {!! Form::text('nick_name', '', ['class'=>'form-control input-sm','id'=>'nick_name','title'=>'درصورتی که نام مستعار را وارد ننمایید ، نام اصلی شما نمایش داده می شود.']) !!}
                                            <span class="text-danger small ">{{ $errors->first('nick_name') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group {{ $errors->has('sex') ? 'has-error' : '' }}">
                                        {!! Form::label('جنسیت :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">
                                            {{ Form::select('sex', [''=>'انتخاب کنید','f'=>'زن', 'm'=>'مرد'],'', [ 'class' => 'form-control input-sm','id'=>'sex' ])}}
                                            <span class="text-danger small ">{{ $errors->first('sex') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        {!! Form::label('تاریخ تولد :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div
                                                        class="form-group {{ $errors->has('birth_date_day') ? 'has-error' : '' }}">
                                                        <select id="birth_date_day" name="birth_date_day"
                                                                class="form-control input-sm {{ $errors->has('birth_date_day') ? 'has-error' : '' }}">
                                                            <option value="">روز</option>
                                                            @for ($i = 1; $i <= 31; $i++)
                                                                <option value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                            @if (old('birth_date_day'))
                                                                <option value="{{ old('birth_date_day') }}"
                                                                        selected>{{ old('birth_date_day') }}</option>
                                                            @endif
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div
                                                        class="form-group {{ $errors->has('birth_date_month') ? 'has-error' : '' }}">
                                                        <select id="birth_date_month" name="birth_date_month"
                                                                class="form-control input-sm {{ $errors->has('birth_date_month') ? 'has-error' : '' }}">
                                                            <option value="">ماه</option>
                                                            @for ($i = 1; $i <= 12; $i++)
                                                                <option value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                            @if (old('birth_date_month'))
                                                                <option value="{{ old('birth_date_month') }}"
                                                                        selected>{{ old('birth_date_month') }}</option>
                                                            @endif
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div
                                                        class="form-group {{ $errors->has('birth_date_month') ? 'has-error' : '' }}">
                                                        <select id="birth_date_year" name="birth_date_year"
                                                                class="form-control input-sm">
                                                            <option value="">سال</option>
                                                            @for ($i = 1330; $i <= 1380; $i++)
                                                                <option value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                            @if (old('birth_date_year'))
                                                                <option value="{{ old('birth_date_year') }}"
                                                                        selected>{{ old('birth_date_year') }}</option>
                                                            @endif
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="text-danger small ">{{ $errors->first('birth_date_year') }}</div>
                                            <div
                                                class="text-danger small ">{{ $errors->first('birth_date_month') }}</div>
                                            <div class="text-danger small ">{{ $errors->first('birth_date_day') }}</div>
                                        </div>
                                    </div>

                                    <div class="form-group {{ $errors->has('province') ? 'has-error' : '' }}">
                                        {!! Form::label('استان  :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">

                                            <select class="form-control input-sm" name="province" id="province">
                                                <option value="">انتخاب کنید</option>
                                                @if(isset($provinces))
                                                    @foreach($provinces as $province)
                                                        <option
                                                            value="{{$province->id}}" @if (old('province') == $province->id) selected @endif>{{$province->name}}</option>
                                                    @endforeach
                                                @endif
                                            </select>
                                            <span class="text-danger small ">{{ $errors->first('province') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group  {{ $errors->has('city') ? 'has-error' : '' }}">
                                        {!! Form::label('شهرستان  :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">
                                            <select id="city" name="city" class="input-sm form-control">

                                            </select>
                                            <span class="text-danger small ">{{ $errors->first('city') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group {{ $errors->has('mobile') ? 'has-error' : '' }} ">
                                        {!! Form::label('شماره همراه :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">

                                            {!! Form::text('mobile', '', ['class'=>'form-control input-sm','style'=>'direction: ltr','id'=>'mobile']) !!}
                                            <span class="text-danger small ">{{ $errors->first('mobile') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group {{ $errors->has('email') ? 'has-error' : '' }} ">
                                        {!! Form::label('ایمیل :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">
                                            {!! Form::text('email', '', ['class'=>'form-control input-sm','style'=>'direction: ltr','id'=>'email']) !!}
                                            <span class="text-danger small ">{{ $errors->first('email') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group {{ $errors->has('pass1') ? 'has-error' : '' }} ">
                                        {!! Form::label('رمز عبور :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">
                                            {!! Form::password('pass1',  ['class'=>'form-control input-sm','style'=>'direction: ltr','id'=>'pass1']) !!}
                                            <span class="text-danger small ">{{ $errors->first('pass1') }}</span>
                                        </div>
                                    </div>

                                    <div class="form-group {{ $errors->has('pass2') ? 'has-error' : '' }} ">
                                        {!! Form::label('تکرار رمز عبور :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                                        <div class="col-lg-8">
                                            {!! Form::password('pass2', ['class'=>'form-control input-sm','style'=>'direction: ltr','id'=>'pass2']) !!}
                                            <span class="text-danger small ">{{ $errors->first('pass2') }}</span>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <div class="col-lg-12">
                                            <div class="checkbox">
                                                <label>{!! Form::checkbox('accept_terms','agree','') !!}
                                                    کلیه <a
                                                        href="javascript:null;" data-toggle="modal"
                                                        data-target="#contact" data-original-title>قوانین سایت
                                                        {{config("constants.siteTitle")}}</a> را مطالعه و می
                                                    پذیرم.</label>
                                                <div
                                                    class="text-danger small ">{{ $errors->first('accept_terms') }}</div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-default btn-send pull-left btn_orange">
                                            <span><i class="fa fa-user-plus"></i>&nbsp;</span>ثبت
                                            نام
                                        </button>
                                    </div>

                                    <br/>
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
                            <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>درصورتی
                                که نام مستعار را وارد ننمایید ، نام اصلی شما نمایش داده می شود.</p>
                            <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span> سایت
                                همسریابی یارجان فقط در زمینه ازدواج دائم فعالیت دارد و در زمینه ازدواج موقت وصیغه و
                                دوستیابی
                                هیچگونه فعالیتی ندارد . </p>
                            <p><span style="color: #FFA500;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>شماره
                                همراه
                                با صفر شروع می شود برای نمونه 09121234567

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="contact" class="modal fade" role="dialog" tabindex="-1" aria-labelledby="contactLabel"
             aria-hidden="true">
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
                                                                            class="fa fa-balance-scale"></i></span>
                                    </div>
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
                                دوست یابی و ازدواج موقت فعالیت نمیکند، بلکه یک پایگاه داده در زمینه ازدواج دایم است.
                            </p>
                            <p><span class="check_rules">&check;&nbsp;</span>حق حریم خصوصی کلیه اعضای سایت محفوظ بوده و
                                اطلاعات شخصی آنها در اختیار کسی قرار نخواهد گرفت. </p>
                            <p><span class="check_rules">&check;&nbsp;</span>چنانچه کاربری بخواهد در این سایت در زمینه
                                هایی
                                غیر از همسریابی دایم فعالیت کند ، پروفایل وی مسدود خواهد شد.
                            <p>
                            <h3>پذیرش قوانین</h3>
                            <p>
                                ثبت نام در سایت و استفاده از خدمات آن به معنای پذیرش و موافقت با کلیه قوانین سایت
                                میباشد.
                                چنانچه شما موافق قوانین و مقررات سایت نمی باشید در سایت ثبت نام ننمایید.
                                چنانچه شما دارای سن کمتر از 18 سال میباشید و یا نیت و درخواستی غیر از ازدواج شرعی و
                                قانونی
                                از فعالیت یار جان را دارید (مثلا تبلیغات - استخدام منشی و دوستی و ...) نباید قوانین را
                                پذیرفته و در سایت ثبت نام نمایید.
                            </p>
                            <h3>استفاده از خدمات سایت</h3>
                            <p>
                                1- شما پس از تشکیل نمایه (پروفایل) میتوانید در میان کاربران سایت (جنس مخالف) جستجو
                                نمایید.
                                پس از انتخاب فرد مورد نظر به وی درخواست آشنایی ارسال نمایید تا ایشان نیز پس از مطالعه
                                پروفایل شما، تمایل یا عدم تمایل خود را اعلام نماید.

                            </p>
                            <p>
                                2- در صورتی که دو نفر مایل به آشنایی بیشتر باشند میتوانند اقدام به ارسال پیام شخصی
                                نمایند.
                                ارسال پیام شخصی از امکانات اعضای ویژه است.
                            </p>
                            <p>
                                3- در صورتی که شما عضو ویژه باشید، گیرنده پیام میتواند به پیام شما با متن دلخواه، پاسخ
                                دهد.
                            </p>
                            <p>
                                4- در صورتی که مایل باشید میتوانید با تهیه بسته های پیامکی، پیامهای خود به کاربران را از
                                طریق پیامک (اس ام اس) اطلاع رسانی نمایید. این امکان خصوصا برای فردی که مدتیست به سایت
                                مراجعه
                                نکرده و شما مایلید با وی آشنا شوید مفید خواهد بود.
                            </p>
                            <p>
                                5- ما پیامک ها را به صورتی آنی و به شکل مطلوب ارسال میکنیم، اما تحویل آن به مقصد بر عهده
                                مخابرات است.
                            </p>
                            <p>
                                6- در صورتی که شما سرویسی را خریداری نمایید، پس از فعال شدن سرویس به هیج عنوان امکان
                                استرداد
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
                                <p>9. گذاشتن شماره تماس ، آدرس ایمیل و هرگونه امکان ارتباطی دیگر در پروفایل بغیر از بخش
                                    های
                                    مخصوص آن</p>
                                <p>10. پرکردن فرم ثبت نام با کلمات و واژه های نامربوط و تصادفی</p>
                                <p>11. بیان و نوشتن کلمات یا جملات محرک جنسی در پیام ها یا نمایه</p>
                            </div>
                            <br>
                            <p>
                                - با توجه به فضای مجازی اینترنت ، اثبات برخی موارد تخلف بعضا دشوار میباشد، با این حال
                                مسئولین سایت چنانچه ظن قوی به تخلف شما پیدا کنند مختارند تا از ادامه فعالیت شما جلوگیری
                                بعمل
                                آورند
                            </p>
                            <p>
                                - در صورت انسداد پروفایل شما توسط مسوولین سایت، تمام سرویسهای شما قطع و چنانچه بابت آنها
                                پرداختی انجام داده اید، قابل استرداد نمیباشد.

                            </p>
                            <p>
                                -چنانچه پروفایل شما در گذشته مسدود شده باشد، حق استفاده مجدد از سایت را نخواهید داشت و
                                در
                                صورت مشاهده، بدون تذکر قبلی پروفایل جدید شما بسته خواهد شد.
                            </p>
                            <h3>سلب مسئولیت</h3>
                            <p>
                                ما تمام تلاش خود را میکنیم تا محیط امنی را برای شما فراهم کنیم، اما تحقیق و بررسی اصلی
                                در
                                مورد صحت و سقم اطلاعات کاربران بر عهده خود شماست.
                                ما هیچگونه مسئولیتی را در مقابل اطلاعات غلط، سوء استفاده و یا فریب احتمالی را نمی
                                پذیریم.
                            </p>
                            <h3>حریم خصوصی</h3>
                            <p>
                                ما اطلاعات شخصی شما مانند ایمیل و شماره تماس را در اختیار دیگران قرار نمیدهیم.
                                اطلاعات تماس شما به صورت پیش فرض به کاربران سایت نمایش داده نمیشود مگر اینکه در بخش
                                تنظیمات
                                سایت به نحو دیگری آنرا تغییر دهید.
                                در صورت درخواست مقامات قضایی، ما اطلاعات لازم را در اختیار ایشان قرار خواهیم داد.
                            </p>
                            <h3>تغییر قوانین</h3>
                            <p>
                                قوانین سایت ممکن است به مرور زمان دستخوش تغییراتی شود، لذا شما موظفید تا به این صفحه
                                مراجعه
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
            #signUpForm label {
                text-align: right;
            }
        </style>
        <script>
            $("#nick_name").tooltip({});
            $(document).ready(function () {
                $("#province").change(function (event) {
                    $("#city").prop("disabled", true);
                    var selected = $('#province').val();
                    event.preventDefault();
                    $.ajax({
                        url: "{{route('getCity')}}",
                        data: {
                            "_token": _TOKEN,
                            'provinceId': selected
                        },
                        type: 'post',
                        success: function (data, textStatus) {
                            var items;
                            items += "<option selected value=''>انتخاب کنید </option>";
                            $.each(data.result, function (index, item) {
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
                @if (old('province'))
                $.ajax({
                    url: "{{route('getCity')}}",
                    data: {
                        "_token": _TOKEN,
                        'provinceId':'@php echo old('province') @endphp'
                    },
                    type: 'post',
                    success: function (data, textStatus) {
                        var items;
                        items += "<option selected value=''>انتخاب کنید </option>";
                        $.each(data.result, function (index, item) {
                            items += "<option value='" + item.id + "'>" + item.name + "</option>";
                        });
                        $("#city").html(items);
                        $("#city").prop("disabled", false);
                        @if (old('city'))
                        $("#city").val("@php echo old('city') @endphp") ;
                        @endif
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        $("#city").prop("disabled", false);
                        alert('request failed');
                    }
                });
                @endif

            });


        </script>

    @endif

@stop
