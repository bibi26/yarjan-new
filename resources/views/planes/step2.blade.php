<script>
    $('#collapseTwo').collapse('show');
    $('[data-toggle=collapse]').prop('disabled', true);
</script>
{!! Form::open(['route'=>'planes.step2','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmStep2']) !!}
{{--<div class="alert oaerror warning">--}}
{{--<div style="margin-bottom: 5px;">لطفا یکی از بسته های زیر را انتخاب نمایید: </div>--}}
{{--<div style="font-size: 12px;"> آیا با امکانات اعضای ویژه آشنایی دارید؟ <a href="#">اینجا را مطالعه فرمایید</a></div>--}}
{{--</div>--}}


<div class="row" style="margin-top: 15px;">
    @foreach($smsPlanes as $smsPlane)
        <div class=" col-lg-6 col-md-6  col-sm-12 col-xs-12 ">
            <div class="frb-group">
                <div class="frb frb-success">
                    {!! Form::radio('sms_plane',$smsPlane['code'],session('sms_plane_id')==$smsPlane['code']?true:false,['id'=>"sms{$smsPlane['code']}"]) !!}
                    <label for="sms{{$smsPlane['code']}}">
                        <div class="row">
                            <div class="col-xs-8 col-sm-8 col-md-8">
                                <div class="frb-title" style="font-size: 20px;">{{$smsPlane['name']}}</div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4">
                                <span
                                    style="background-color: #fd265a;border-radius: 8px;padding: 8px;color: white;font-size:16px;"> {{number_format($smsPlane['price'])}} تومان  </span>
                            </div>
                        </div>
                        <div class="frb-description" style="font-size: 12px;">پیامهای خود را از طریق پیامک(sms)، اطلاع رسانی نمایید.  </div>
                    </label>
                </div>
            </div>
        </div>
    @endforeach
</div>
<div class="form-group">
    <a class="btn btn-default btn-send pull-right btn_forget_pass" href="{{route('planes.step1View')}}"><span><i
                class="fa fa-chevron-right"></i>&nbsp;</span>مرحله قبل </a>
    <a class="btn btn-info btn-send pull-left" href="javascript:void(0);" onclick="nextStep2();"><span>مرحله بعد <i
                class="fa fa-chevron-left"></i>&nbsp;</span></a>
</div>
{!! Form::close() !!}
<script>
    function nextStep2() {
        $('#dv_sign').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $('#frmStep2').submit();
    }
</script>
