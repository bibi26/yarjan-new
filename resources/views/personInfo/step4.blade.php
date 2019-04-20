
<div role="tabpanel" class="tab-pane fade" id="Section4">
    <!--                    <h3> توجه: معیارهای زیر مربوط به همسر دلخواه شما میباشد. </h3>-->
    <p class="alert alert-warning">معیارهای زیر مربوط به همسر دلخواه شما میباشد. با انتخاب دقیق آن میتوانید مشخص کنید که تنها از همین افراد پیام دریافت کنید. <span style="color:red;">(تمامی موارد اختیاری می باشند)</span>.</p>
    {!! Form::open(['route'=>'personInfo.step4','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmStep4']) !!}
        <div class="row">
            <div class="col-lg-6">

                <div class="form-group">
                    {!! Form::label('سن از :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                    <div class="row">
                    <div class="col-lg-5">
                        <select id="s_age_from" name="s_age_from"
                                class="form-control input-sm">
                            <option value="-1">انتخاب کنید</option>
                            @for ($i = 15; $i <= 70; $i++)
                                <option value="{{ $i }}">{{ $i }}</option>
                            @endfor
                            @if (old('s_age_from'))
                                <option value="{{ old('s_age_from') }}" selected>{{ old('s_age_from') }}</option>
                            @endif
                        </select>
                        <span class="text-danger small ">{{ $errors->first('s_age_from') }}</span>
                    </div>

                        <div class="col-lg-2">تا</div>

                        <div class="col-lg-5">
                        <select id="s_age_to" name="s_age_to"
                                class="form-control input-sm">
                            <option value="-1">انتخاب کنید</option>
                        @for ($i = 15; $i <= 70; $i++)
                                <option value="{{ $i }}">{{ $i }}</option>
                            @endfor
                            @if (old('s_age_to'))
                                <option value="{{ old('s_age_to') }}" selected>{{ old('s_age_to') }}</option>
                            @endif
                        </select>
                        <span class="text-danger small ">{{ $errors->first('s_age_to') }}</span>
                    </div>
                    </div>
                </div>
                </div>


                    <div class="form-group {{ $errors->has('s_marriage_status') ? 'has-error' : '' }}">
                        {!! Form::label('وضعیت ازدواج :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                        <div class="col-lg-8">
                            {{ Form::select('s_marriage_status[]', ['-1'=>'انتخاب کنید','single'=>'مجرد', 'deceased_spouse'=>'همسر فوت شده', 'divorced'=>'طلاق گرفته'],['-1'], [ 'class' => 'form-control input-sm','id'=>'s_marriage_status' ,'multiple'=>'multiple','style'=>'width: 100%;'])}}
                            <span class="text-danger small ">{{ $errors->first('s_marriage_status') }}</span>
                        </div>
                    </div>

                    <div class="form-group {{ $errors->has('s_location') ? 'has-error' : '' }}">
                        {!! Form::label('محل زندگی :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                        <div class="col-lg-8">
                            {{ Form::select('s_location[]', [''=>'انتخاب کنید','fellow_citizen'=>'همشهری','fellow_province'=>'هم استانی', 'homeland'=>'هم وطن', 'abroad'=>'خارج از کشور'],[''], [ 'class' => 'form-control input-sm','id'=>'s_location' ,'multiple'=>'multiple','style'=>'width: 100%;'])}}
                            <span class="text-danger small ">{{ $errors->first('s_location') }}</span>
                        </div>
                    </div>


                <div class="form-group">
                    {!! Form::label('تحصیلات از :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-5">
                                {{ Form::select('s_education_from', [''=>'انتخاب کنید','under_diploma'=>'زیر دیپلم', 'diploma'=>'دیپلم', 'above_diploma'=>'فوق دیپلم', 'licensee'=>'لیسانس', 'above_licensee'=>'فوق لیسانس', 'public_dr'=>'دکترای عمومی', 'private_dr'=>'دکترای تخصصی', 'above_dr'=>'فوق تخصص', 'hozavi'=>'حوزوی'],[''], [ 'class' => 'form-control input-sm','id'=>'s_education_from' ])}}
                                <span class="text-danger small ">{{ $errors->first('s_education_from') }}</span>
                            </div>

                            <div class="col-lg-2">تا</div>

                            <div class="col-lg-5">
                                {{ Form::select('s_education_to', [''=>'انتخاب کنید','under_diploma'=>'زیر دیپلم', 'diploma'=>'دیپلم', 'above_diploma'=>'فوق دیپلم', 'licensee'=>'لیسانس', 'above_licensee'=>'فوق لیسانس', 'public_dr'=>'دکترای عمومی', 'private_dr'=>'دکترای تخصصی', 'above_dr'=>'فوق تخصص', 'hozavi'=>'حوزوی'],[''], [ 'class' => 'form-control input-sm','id'=>'s_education_to' ])}}
                                <span class="text-danger small ">{{ $errors->first('s_education_to') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('s_location') ? 'has-error' : '' }}">
                    {!! Form::label('وضعیت اشتغال :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('s_job_status', [''=>'انتخاب کنید','-1'=>'مهم نیست','unemployed'=>'بیکار', 'employed'=>'شاغل', 'student'=>'دانشجو'],[''], [ 'class' => 'form-control input-sm','id'=>'s_job_status' ])}}
                        <span class="text-danger small ">{{ $errors->first('s_job_status') }}</span>
                    </div>
                </div>

                <div class="form-group">
                    {!! Form::label('قد از (سانتی متر) :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-5">
                                <select id="s_height_from" name="s_height_from"
                                        class="form-control input-sm">
                                    <option value="">انتخاب کنید</option>
                                    @for ($i = 50; $i <= 210; $i++)
                                        <option value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                    @if (old('s_age_from'))
                                        <option value="{{ old('s_height_from') }}" selected>{{ old('s_height_from') }}</option>
                                    @endif
                                </select>
                                <span class="text-danger small ">{{ $errors->first('s_height_from') }}</span>
                            </div>

                            <div class="col-lg-2">تا</div>

                            <div class="col-lg-5">
                                <select id="s_height_to" name="s_height_to"
                                        class="form-control input-sm">
                                    <option value="">انتخاب کنید</option>
                                    @for ($i = 50; $i <= 210; $i++)
                                        <option value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                    @if (old('s_height_to'))
                                        <option value="{{ old('s_height_to') }}" selected>{{ old('s_height_to') }}</option>
                                    @endif
                                </select>
                                <span class="text-danger small ">{{ $errors->first('s_height_to') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">


                <div class="form-group {{ $errors->has('s_my_income') ? 'has-error' : '' }}">
                    {!! Form::label('میزان درآمد :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">

                        {{ Form::select('s_my_income', [''=>'انتخاب کنید','0'=>'بدون درآمد', '-2M'=>'زیر 2 میلیون تومان', '2M-5M'=>'بين 2 تا 5 میلیون تومان', '5M-10M'=>'بين 5 تا 10 میلیون تومان', '+10M'=>'بیش از 10 میلیون تومان'],'', [ 'class' => 'form-control  input-sm','id'=>'s_my_income' ])}}
                        <span class="text-danger small ">{{ $errors->first('s_my_income') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('s_house') ? 'has-error' : '' }}">
                    {!! Form::label('وضعیت مسکن :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('s_house', [''=>'انتخاب کنید','-1'=>'مهم نیست','0'=>'نداشته باشد', '1'=>'داشته باشد'],'', [ 'class' => 'form-control  input-sm','id'=>'s_house' ])}}
                        <span class="text-danger small ">{{ $errors->first('s_house') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('s_car') ? 'has-error' : '' }}">
                    {!! Form::label('وضعیت اتومبیل :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('s_car', [''=>'انتخاب کنید','-1'=>'مهم نیست','0'=>'نداشته باشد', '1'=>'داشته باشد'],'', [ 'class' => 'form-control  input-sm','id'=>'s_car' ])}}
                        <span class="text-danger small ">{{ $errors->first('s_car') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('s_health_condition') ? 'has-error' : '' }}">
                    {!! Form::label('وضعیت سلامتی :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('s_health_condition', [''=>'انتخاب کنید','-1'=>'مهم نیست','healthful'=>'سالم', 'special_disease'=>'دارای بیماری خاص (دیابت ، هپاتیت و ...)', 'defective'=>'دارای نقص عضو'],[''], [ 'class' => 'form-control input-sm','id'=>'s_health_condition' ])}}
                        <span class="text-danger small ">{{ $errors->first('s_health_condition') }}</span>
                    </div>
                </div>




                <div class="form-group {{ $errors->has('s_child') ? 'has-error' : '' }}">
                    {!! Form::label('وضعیت فرزند :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('s_child', [''=>'انتخاب کنید','-1'=>'مهم نیست','0'=>'نداشته باشد', '1'=>'داشته باشد'],'', [ 'class' => 'form-control  input-sm','id'=>'s_child' ])}}
                        <span class="text-danger small ">{{ $errors->first('s_child') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('s_immigration') ? 'has-error' : '' }}">
                    {!! Form::label('قصد مهاجرت به خارج :','',['class' => 'control-label input-sm col-lg-4 ']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('s_immigration', [''=>'انتخاب کنید','-1'=>'مهم نیست','0'=>'نداشته باشد', '1'=>'داشته باشد'],'', [ 'class' => 'form-control  input-sm','id'=>'s_immigration' ])}}
                        <span class="text-danger small ">{{ $errors->first('s_immigration') }}</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="form-group">
            <a class="btn btn-default btn-send pull-right btn_forget_pass"   href="{{route('personInfo.step3')}}" ><span ><i  class="fa fa-chevron-right"></i>&nbsp;</span>مرحله قبل </a>
            <a class="btn btn-default btn-send pull-left btn_forget_pass"  href="javascript:void(0);" onclick="nextStep4();"><span >مرحله بعد <i  class="fa fa-chevron-left"></i>&nbsp;</span><b></b></a>
        </div>
    {!! Form::close() !!}
</div>

<script>

    function nextStep4() {
        $('#dv_sign').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $('#frmStep4').submit();
    }
    $(document).ready(function () {

        activaTab("Section4");

        $("#s_marriage_status").select2();
        $("#s_location").select2();


        @if(isset($userInfo))

        @if(isset($userInfo->s_age_from))
        $("#s_age_from").val("@php echo  $userInfo->s_age_from @endphp");
        @endif

        @if(isset($userInfo->s_age_to))
        $("#s_age_to").val("@php echo  $userInfo->s_age_to @endphp");
        @endif

        @if(isset($userInfo->s_age_to))
        $("#s_age_from").val("@php echo  $userInfo->s_age_to @endphp");
        @endif

         var  s_marriage_single=[];
        @if(isset($userInfo->s_marriage_single)  && $userInfo->s_marriage_single==1)
        s_marriage_single.push(["single"]);
        @endif
        @if(isset($userInfo->s_marriage_deceased_spouse) && $userInfo->s_marriage_deceased_spouse==1)
        s_marriage_single.push(["deceased_spouse"]);
        @endif
        @if(isset($userInfo->s_marriage_divorced)  && $userInfo->s_marriage_divorced==1)
        s_marriage_single.push(["divorced"]);
        @endif

        @if(isset($userInfo->s_marriage_single) || isset($userInfo->s_marriage_deceased_spouse) || isset($userInfo->s_marriage_divorced) )
        $('#s_marriage_status').val(s_marriage_single);
        $('#s_marriage_status').trigger('change');
        @endif



        var  s_location=[];
        @if(isset($userInfo->s_location_fellow_citizen)  && $userInfo->s_location_fellow_citizen==1)
        s_location.push(["fellow_citizen"]);
        @endif
        @if(isset($userInfo->s_location_fellow_province) && $userInfo->s_location_fellow_province==1)
        s_location.push(["fellow_province"]);
        @endif
        @if(isset($userInfo->s_location_abroad)  && $userInfo->s_location_abroad==1)
        s_location.push(["abroad"]);
        @endif
        @if(isset($userInfo->s_location_homeland)  && $userInfo->s_location_homeland==1)
        s_location.push(["homeland"]);
        @endif

        @if(isset($userInfo->s_location_fellow_citizen) || isset($userInfo->s_location_fellow_province) || isset($userInfo->s_location_abroad) || isset($userInfo->s_location_homeland) )
        $('#s_location').val(s_location);
        $('#s_location').trigger('change');
        @endif

        @if(isset($userInfo->s_age_from))
        $("#s_age_from").val("@php echo  $userInfo->s_age_from @endphp");
        @endif

        @if(isset($userInfo->s_height_from))
        $("#s_height_from").val("@php echo  $userInfo->s_height_from @endphp");
        @endif

        @if(isset($userInfo->s_height_to))
        $("#s_height_to").val("@php echo  $userInfo->s_height_to @endphp");
        @endif

        @if(isset($userInfo->s_education_from))
        $("#s_education_from").val("@php echo  $userInfo->s_education_from @endphp");
        @endif

        @if(isset($userInfo->s_education_to))
        $("#s_education_to").val("@php echo  $userInfo->s_education_to @endphp");
        @endif

        @if(isset($userInfo->s_my_income))
        $("#s_my_income").val("@php echo  $userInfo->s_my_income @endphp");
        @endif

        @if(isset($userInfo->s_house))
        $("#s_house").val("@php echo  $userInfo->s_house @endphp");
        @endif

        @if(isset($userInfo->s_car))
        $("#s_car").val("@php echo  $userInfo->s_car @endphp");
        @endif

        @if(isset($userInfo->s_health_condition))
        $("#s_health_condition").val("@php echo  $userInfo->s_health_condition @endphp");
        @endif

        @if(isset($userInfo->s_child))
        $("#s_child").val("@php echo  $userInfo->s_child @endphp");
        @endif

        @if(isset($userInfo->s_immigration))
        $("#s_immigration").val("@php echo  $userInfo->s_immigration @endphp");
        @endif

        @if(isset($userInfo->s_job_status))
        $("#s_job_status").val("@php echo  $userInfo->s_job_status @endphp");
        @endif

        @endif
    });
</script>
