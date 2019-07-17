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
                                                        value="{{$province->id}}"
                                                        @if (old('province') == $province->id) selected @endif>{{$province->name}}</option>
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

                   @include('partials.rules')
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
                    'provinceId': '@php echo old('province') @endphp'
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
                    $("#city").val("@php echo old('city') @endphp");
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
