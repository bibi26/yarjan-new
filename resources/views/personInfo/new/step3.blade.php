<div role="tabpanel" class="tab-pane fade" id="Section3">
    {!! Form::open(['route'=>'personInfo.step3','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmStep3']) !!}
    {{ Form::hidden('user_id',isset($userInfo['id'])?$userInfo['id']:'' )}}
    <div class="row">
            <div class="col-lg-12">
                <div class="form-group {{ $errors->has('i_am') ? 'has-error' : '' }}">
                    {!! Form::label('من چنین هستم :','',['class' => 'required']) !!}
                    {!! Form::textarea('i_am', old('i_am'), ['class'=>'form-control','style'=>'height: 100px;' ,'id' =>'i_am']) !!}
                    <span class="text-danger small ">{{ $errors->first('i_am') }}</span>
                </div>
                <div class="form-group {{ $errors->has('you_are') ? 'has-error' : '' }}">
                    {!! Form::label('همسرم چنین باشد :','',['class' => 'required']) !!}
                    {!! Form::textarea('you_are', old('you_are'), ['class'=>'form-control','style'=>'height: 100px;','id' =>'you_are']) !!}
                    <span class="text-danger small ">{{ $errors->first('you_are') }}</span>
                </div>
            </div>
        </div>
        <div class="form-group">
            <a class="btn btn-default btn-send pull-right btn_forget_pass"  href="{{route('personInfo.step2View',$userInfo['id'])}}" ><span ><i  class="fa fa-chevron-right"></i>&nbsp;</span>مرحله قبل </a>
            <a class="btn btn-default btn-send pull-left btn_forget_pass"  href="javascript:void(0);" onclick="nextStep3();"><span >مرحله بعد <i  class="fa fa-chevron-left"></i>&nbsp;</span></a>
        </div>
    {!! Form::close() !!}
</div>
<script>
    function nextStep3() {
        $('#dv_sign').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $('#frmStep3').submit();
    }
    $(document).ready(function () {
        activaTab("Section3");

        @if(isset($userInfo))

        @if(isset($userInfo->i_am))
        $("#i_am").val("@php echo  $userInfo->i_am @endphp");
        @endif

        @if(isset($userInfo->you_are))
        $("#you_are").val("@php echo  $userInfo->you_are @endphp");
        @endif

        @endif
    });
</script>
