<div role="tabpanel" class="tab-pane fade" id="Section2">
    {!! Form::open(['route'=>'personInfo.step2','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmStep2']) !!}
        <div class="row">
            <div class="col-lg-6">
                <div class="form-group {{ $errors->has('height') ? 'has-error' : '' }}">
                    {!! Form::label('قد (سانتی متر) :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    {{ Form::hidden('user_id',isset($userInfo['id'])?$userInfo['id']:'' )}}
                    <div class="col-lg-8">
                        <select id="height" name="height"
                                class="form-control input-sm">
                            <option value="">انتخاب کنید</option>
                            @for ($i = 50; $i <= 210; $i++)
                                <option value="{{ $i }}">{{ $i }}</option>
                            @endfor
                            @if (old('height'))
                                <option value="{{ old('height') }}" selected>{{ old('height') }}</option>
                            @endif
                        </select>
                        <span class="text-danger small ">{{ $errors->first('height') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('weight') ? 'has-error' : '' }}">
                    {!! Form::label('وزن (کیلوگرم) :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    <div class="col-lg-8">
                        <select id="weight" name="weight"
                                class="form-control input-sm">
                            <option value="">انتخاب کنید</option>
                            @for ($i = 40; $i <= 140; $i++)
                                <option value="{{ $i }}">{{ $i }}</option>
                            @endfor
                            @if (old('weight'))
                                <option value="{{ old('weight') }}" selected>{{ old('weight') }}</option>
                            @endif
                        </select>
                        <span class="text-danger small ">{{ $errors->first('weight') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('skin_color') ? 'has-error' : '' }}">
                    {!! Form::label('رنگ پوست :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('skin_color', [''=>'انتخاب کنید','white'=>'سفید', 'bright_brunetee'=>'سبزه روشن', 'dark_brunetee'=>'سبزه تیره', 'balk'=>'سیاه'],'', [ 'class' => 'form-control input-sm','id'=>'skin_color' ])}}
                        <span class="text-danger small ">{{ $errors->first('skin_color') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('health_condition') ? 'has-error' : '' }}">
                    {!! Form::label('وضعیت سلامتی :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('health_condition', [''=>'انتخاب کنید','healthful'=>'سالم', 'special_disease'=>'دارای بیماری خاص (دیابت ، هپاتیت و ...)', 'defective'=>'دارای نقص عضو'],'', [ 'class' => 'form-control input-sm','id'=>'health_condition' ])}}
                        <span class="text-danger small ">{{ $errors->first('health_condition') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('immigration') ? 'has-error' : '' }}">
                    {!! Form::label('قصد مهاجرت به خارج :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('immigration', [''=>'انتخاب کنید','0'=>'ندارم', '1'=>'دارم'],'', [ 'class' => 'form-control input-sm','id'=>'immigration' ])}}
                        <span class="text-danger small ">{{ $errors->first('immigration') }}</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">

                <div class="form-group {{ $errors->has('face') ? 'has-error' : '' }}">
                    {!! Form::label('زیبایی (یک کمترین) :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    <div class="col-lg-8">
                        <select id="face" name="face"
                                class="form-control input-sm">
                            <option value="">انتخاب کنید</option>
                            @for ($i = 1; $i <= 5; $i++)
                                <option value="{{ $i }}">{{ $i }}</option>
                            @endfor
                            @if (old('face'))
                                <option value="{{ old('face') }}" selected>{{ old('face') }}</option>
                            @endif
                        </select>
                        <span class="text-danger small ">{{ $errors->first('face') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('style') ? 'has-error' : '' }}">
                    {!! Form::label('تیپ (یک کمترین) :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    <div class="col-lg-8">
                        <select id="style" name="style"
                                class="form-control input-sm">
                            <option value="">انتخاب کنید</option>
                            @for ($i = 1; $i <= 5; $i++)
                                <option value="{{ $i }}">{{ $i }}</option>
                            @endfor
                            @if (old('style'))
                                <option value="{{ old('style') }}" selected>{{ old('style') }}</option>
                            @endif
                        </select>
                        <span class="text-danger small ">{{ $errors->first('style') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('nationality') ? 'has-error' : '' }}">
                    {!! Form::label('قصد مهاجرت به خارج :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('nationality', [''=>'انتخاب کنید','fars'=>'فارس', 'tork'=>'ترک','kurd'=>'کرد', 'lor'=>'لر','baloch'=>'بلوچ', 'mazani'=>'مازندرانی','gilak'=>'گیلک', 'arab'=>'عرب','etc'=>'سایر'],'', [ 'class' => 'form-control input-sm','id'=>'nationality' ])}}
                        <span class="text-danger small ">{{ $errors->first('nationality') }}</span>
                    </div>
                </div>

                <div class="form-group {{ $errors->has('life_style') ? 'has-error' : '' }}">
                    {!! Form::label('شیوه زندگی :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                    <div class="col-lg-8">
                        {{ Form::select('life_style', [''=>'انتخاب کنید','dependent'=>'همراه خانواده', 'independent'=>'مستقل (مجردی)'],'', [ 'class' => 'form-control input-sm','id'=>'life_style' ])}}
                        <span class="text-danger small ">{{ $errors->first('life_style') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <a class="btn btn-default btn-send pull-right btn_forget_pass"   href="{{route('personInfo.step1View',$userInfo['id'])}}" ><span ><i  class="fa fa-chevron-right"></i>&nbsp;</span>مرحله قبل </a>
            <a class="btn btn-default btn-send pull-left btn_forget_pass"  href="javascript:void(0);" onclick="nextStep2();" ><span >مرحله بعد <i  class="fa fa-chevron-left"></i>&nbsp;</span></a>
        </div>
    {!! Form::close() !!}

</div>
<script>
    function nextStep2() {
        $('#dv_sign').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $('#frmStep2').submit();
    }
    $(document).ready(function () {
        activaTab("Section2");
        @if(isset($userInfo))

        @if(isset($userInfo->weight))
        $("#weight").val("@php echo  $userInfo->weight @endphp");
        @endif

        @if(isset($userInfo->height))
        $("#height").val("@php echo  $userInfo->height @endphp");
        @endif

        @if(isset($userInfo->skin_color))
        $("#skin_color").val("@php echo  $userInfo->skin_color @endphp");
        @endif
        @if(isset($userInfo->health_condition))
        $("#health_condition").val("@php echo  $userInfo->health_condition @endphp");
        @endif

        @if(isset($userInfo->immigration))
        $("#immigration").val("@php echo  $userInfo->immigration @endphp");
        @endif

        @if(isset($userInfo->face))
        $("#face").val("@php echo  $userInfo->face @endphp");
        @endif

        @if(isset($userInfo->style))
        $("#style").val("@php echo  $userInfo->style @endphp");
        @endif

        @if(isset($userInfo->nationality))
        $("#nationality").val("@php echo  $userInfo->nationality @endphp");
        @endif

        @if(isset($userInfo->life_style))
        $("#life_style").val("@php echo  $userInfo->life_style @endphp");
        @endif

        @endif
    });
</script>
