<script>
    $('#collapseOne').collapse('show');
    $('[data-toggle=collapse]').prop('disabled', true);
</script>
{!! Form::open(['route'=>'planes.step1','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmStep1']) !!}
{{--<div class="alert oaerror warning">--}}
{{--<div style="margin-bottom: 5px;">لطفا یکی از بسته های زیر را انتخاب نمایید: </div>--}}
{{--</div>--}}
<div> آیا با امکانات اعضای ویژه آشنایی دارید؟ <a href="#">اینجا را مطالعه فرمایید</a></div>

<div class="row" style="margin-top: 15px;">
    @foreach($packages as $package)
        <div class=" col-lg-6 col-md-6  col-sm-12 col-xs-12 ">
            <div class="frb-group">
                <div class="frb frb-success">
                    {!! Form::radio('package',$package['code'],session('package_id')==$package['code']?true:false,['id'=>"package{$package['code']}month"]) !!}
                    <label for="package{{$package['code']}}month">
                        <div class="row">
                            <div class="col-xs-8 col-sm-8 col-md-8">
                                <div class="frb-title" style="font-size: 20px;">{{$package['name']}}</div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4">
                                <span
                                    style="background-color: #fd265a;border-radius: 8px;padding: 8px;color: white;font-size:16px;"> {{number_format($package['price'])}}تومان  </span>
                            </div>
                        </div>
                        <div class="frb-description" style="font-size: 12px;">{{$package['description']}}</div>
                    </label>
                </div>
            </div>
        </div>
    @endforeach
</div>
<div class="form-group">
    <a class="btn btn-info btn-send pull-left " href="javascript:void(0);" onclick="nextStep1();"><span>مرحله بعد <i
                class="fa fa-chevron-left"></i>&nbsp;</span></a>
</div>
{!! Form::close() !!}
<script>
    function nextStep1() {
        $('#dv_sign').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $('#frmStep1').submit();
    }
</script>
