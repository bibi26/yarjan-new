@extends('home')
@section('content')


    <div class="container">
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="row" style="-webkit-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
                 -moz-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
                 box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-12"
                             style="height: 40px;background-color: #33d346;text-align: center;padding-top: 10px;">
                            <span style="font-weight: bold;color: white;font-size: 18px;">لطفا شرح پیام خود را وارد نمایید</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12" style="padding-top: 5px;">
                            <script>
                            </script>
                            @if(Session::has('success'))
                            <script>
                                $.toast({
                                text: "<span style='font-weight: bold; font-family:Tahoma;'>{{Session::get('success')}}</span>",
                                position: 'top-right',
                                showHideTransition: 'slide',
                                icon: 'success',
                                bgColor: '#3EFF2F',
                                textColor: '#000',
                                rtl: true
                                })
                            </script>
                            @endif

                            {!! Form::open(['route'=>'contactus.store','style'=>'padding: 10px']) !!}

                            <div class="form-group {{ $errors->has('mobile') ? 'has-error' : '' }}">
                                {!! Form::label('شماره همراه :') !!}
                                {!! Form::text('mobile', old('mobile'), ['class'=>'form-control ','style'=>'direction: ltr','maxlength'=>11]) !!}
                                <span class="text-danger">{{ $errors->first('mobile') }}</span>
                            </div>

                            <div class="form-group {{ $errors->has('email') ? 'has-error' : '' }}">
                                {!! Form::label('ایمیل :') !!}
                                {!! Form::text('email', old('email'), ['class'=>'form-control ','style'=>'direction: ltr']) !!}
                                <span class="text-danger">{{ $errors->first('email') }}</span>
                            </div>

                            <div class="form-group {{ $errors->has('message') ? 'has-error' : '' }}">
                                {!! Form::label('شرح پیام :','',['class' => 'required']) !!}
                                {!! Form::textarea('message', old('message'), ['class'=>'form-control','style'=>'height: 100px;']) !!}
                                <span class="text-danger">{{ $errors->first('message') }}</span>
                            </div>
                                <div class="form-group">
                                        <span><img id="captcha_image" src="<?php echo  Captcha::src();?>"></span> <input  type="button" id='refesh_captcha' />
                                    </div>
                                <div class="form-group  {{ $errors->has('captcha') ? 'has-error' : '' }}">
                                    {!! Form::label(' کد امنیتی :','',['class' => 'required']) !!}
                                    {!! Form::text('captcha','' , ['class'=>'form-control','style'=>'width: 100px;direction: ltr']) !!}
                                    <span class="text-danger">{{ $errors->first('captcha') }}</span>

                                </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-default btn-send pull-left btn_green">
                                    <span><i class="fa fa-user-plus"></i>&nbsp;</span>ارسال

                                </button>                            </div>
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
                 box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;line-height: 2;text-align: justify;">
                    <p><span style="color: #33d346;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>از طريق فرم
                        زير مي توانيد هر گونه سوال , نظر ، پیشنهاد و انتقاد را براي ما ارسال نماييد .</p>
                    <p><span style="color: #33d346;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>خدمات سایت
                        یارجان کاملا رایگان می باشد.</p>
                    <p><span style="color: #33d346;font-size: 18px;font-weight: bold;">&check;&nbsp;</span> سایت
                        همسریابی یارجان فقط در زمینه ازدواج دائم فعالیت دارد و در زمینه ازدواج موقت وصیغه و دوستیابی
                        هیچگونه فعالیتی ندارد . </p>
                    <p><span style="color: #33d346;font-size: 18px;font-weight: bold;">&check;&nbsp;</span> از ثبت www و
                        یا http در ابتدای ایمیل خود خودداری فرمایید . </p>
                    <p><span style="color: #33d346;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>شماره همراه
                        با صفر شروع می شود برای نمونه 09121234567

                </div>
            </div>
        </div>
    </div>
    </div>

    <script>
        $(document).ready(function () {

            $("#refesh_captcha").click(function (event) {
                event.preventDefault();
                $.ajax({
                    url:"refreshCaptcha",
                    data: {
                        "_token":_TOKEN
                    },
                    type: 'post',
                }).success(function (resp) {
                    $("#captcha_image").attr("src", resp.captcha_image);
                });
            });
        });
    </script>
@stop
