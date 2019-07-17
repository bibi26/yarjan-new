<script>
    $('#collapseThree').collapse('show');
    $('[data-toggle=collapse]').prop('disabled', true);

</script>
{!! Form::open(['route'=>'planes.step3','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmStep3']) !!}
<div class="row" style="margin-top: 15px;">
    <div class=" col-lg-12 col-md-12  col-sm-12 col-xs-12 ">
        <table class="table" border="2">
            <thead>
            <tr style="font-size: 12px;">
                <th>شناسه فاکتور</th>
                <th>بسته اشتراک ویژه</th>
                <th>بسته پیامک</th>
                <th>مبلغ کل</th>
            </tr>
            </thead>
            <tbody>
            <tr  >
                @php
                $factor=json_decode(Session::get('factor'))[0];
                @endphp
                @if(isset($factor))
                    <td>{{$factor->invoice_id }}</td>
                    <td>{{$factor->package_name }}</td>
                    <td>{{$factor->sms_plane }}</td>
                    <td>{{number_format($factor->price)}}</td>
                @endif
            </tr>

            </tbody>
        </table>
        <div class="form-group">
            <a class="btn btn-default btn-send pull-right btn_forget_pass" href="{{route('planes.step2View')}}"><span><i
                        class="fa fa-chevron-right"></i>&nbsp;</span>مرحله قبل </a>
            <a class="btn btn-success btn-send pull-left " href="javascript:void(0);" onclick="nextStep3();"><span>پرداخت <i
                        class="fa fa-chevron-left"></i>&nbsp;</span></a>
        </div>
    </div>
    </div>
    {!! Form::close() !!}
    <script>
        function nextStep3() {
            $('#dv_sign').block({
                message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
                css: {backgroundColor: '#33e138'}
            });
            $('#frmStep3').submit();
        }
    </script>
