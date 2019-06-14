@extends('home')
@section('content')
    @if(isset($agreeVerifyCode))
        <div class="alert oaerror success" style="margin-top: 5px;" >{{$agreeVerifyCode}}</div>
    @endif

    @if(Session::has('agreeVerifyCode'))
        <div class="alert oaerror success" style="margin-top: 5px;" >{{Session::get('agreeVerifyCode')}}</div>
    @endif

    <div class="container">
        <div class="row sign">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="row" style="-webkit-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             -moz-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;">
                    <div class="col-lg-12" id="dv_sign">
                        <div class="row">
                            <div class="col-lg-12"
                                 style="height: 40px;background-color: #00CCFC;text-align: center;padding-top: 10px;">
                                <span
                                    style="font-weight: bold;color: white;font-size: 18px;">ورود به سایت {{config('constants.siteTitle')}}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                @if(Session::has('error'))
                                    <div class="alert oaerror danger" style="margin-top: 5px;" >{{Session::get('error')}}</div>
                                @endif
                                {!! Form::open(['route'=>'signIn.login','style'=>'padding: 10px','id'=>'sigInForm']) !!}

                                    <div class="form-group {{ $errors->has('username') ? 'has-error' : '' }}">
                                    {!! Form::label('ایمیل :') !!}
                                    {!! Form::text('username', old('username'), ['class'=>'form-control ','style'=>'direction: ltr']) !!}
                                    <span class="text-danger">{{ $errors->first('username') }}</span>
                                </div>

                                <div class="form-group {{ $errors->has('pass') ? 'has-error' : '' }}">
                                    {!! Form::label(' رمز عبور :','',[]) !!}
                                    {!! Form::password('pass', ['class'=>'form-control','style'=>'direction: ltr']) !!}
                                    <span class="text-danger">{{ $errors->first('pass') }}</span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default btn-send pull-left btn_blue">
                                        <span><i class="fa fa-key"></i>&nbsp;</span>ورود

                                    </button>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <div style="text-align: center;"><a href="{{route('forgetPass.view')}}"><span><i
                                                class="fa fa-question-circle"></i>&nbsp;</span>رمز عبور خود را
                                        فراموش کرده ام</a>
                                </div>
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
                        <p><span style="color: #00CCFC;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>خدمات
                            سایت
                            یارجان کاملا رایگان می باشد.</p>
                        <p><span style="color: #00CCFC;font-size: 18px;font-weight: bold;">&check;&nbsp;</span> سایت
                            همسریابی یارجان فقط در زمینه ازدواج دائم فعالیت دارد و در زمینه ازدواج موقت وصیغه و دوستیابی
                            هیچگونه فعالیتی ندارد . </p>
                        <p><span style="color: #00CCFC;font-size: 18px;font-weight: bold;">&check;&nbsp;</span>شماره
                            همراه
                            با صفر شروع می شود برای نمونه 09121234567

                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
