<div id="violationReportModal" class="modal fade" role="dialog">
    <div class="modal-dialog" style="width: 600px;">

        <!-- Modal content-->
        <div class="modal-content">
            <div id="dv_violation_report">

                <div class="modal-header" style="background: -webkit-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -moz-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -o-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -ms-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);">
                    <h4 class="modal-title" style="text-align: center;"><i class="fa fa-sign-in fa-2x"
                                                                           aria-hidden="true" style="color: white"></i>گزارش
                        تخلف</h4>
                </div>
                <div class="modal-body">

                    <p style="font-size: 12px;font-weight: lighter;">
                        اگر تخلفی از این کاربر مشاهده کرده اید آن را با تیم باما
                        چنانچه تخلف در پیامهای ارسالی ایشان میباشد، متن آنرا نیز ارسال نمایید. در میان بگذارید.</p>
                    <div class='alert_warn alert alert-danger' style="display: none;"></div>
                    {!! Form::open(['route'=>'violationReport','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'violationReport']) !!}
                    <div class="form-group {{ $errors->has('reason_violation_report') ? 'has-error' : '' }}">
                        {!! Form::label('دلیل تخلف :','',['class' => 'required']) !!}
                        {!! Form::textarea('reason_violation_report', old('reason_violation_report'), ['class'=>'form-control','style'=>'height: 100px;' ,'id' =>'reason_violation_report']) !!}
                        <div id="alert_reason_violation_report"
                             style="display:none;color: red; font-weight: bold;"></div>
                    </div>
                    {!! Form::close() !!}
                </div>
                <div class="modal-footer">
                    <div class="row">
                        <div class="col col-lg-12" style="text-align: right;">
                            <input name="text" class="btn btn-success" type="submit" value="ارسال"
                                    onclick="javascrit:sendViolationReport()">
                            <button data-dismiss="modal" type="button" class="btn btn-danger"
                                    style="background-color: #fd265a;">بستن
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>

    $("#reason_violation_report").val('');
    $(".alert_warn").hide();

    function sendViolationReport(debug) {
        $(".alert_warn").hide();
        var reason_violation_report = $("#reason_violation_report");
        var alert_reason_violation_report = $("#alert_reason_violation_report");
        var rvr = true;
        if (reason_violation_report.val() == '') {
            reason_violation_report.css('border', '1px solid #F00');
            alert_reason_violation_report.show();
            alert_reason_violation_report.text("لطفا دلیل تخلف راوارد نمایید!");
            $("#reason_violation_report").focus();
            rvr = false;
        } else if (reason_violation_report.val().length < 5) {
            reason_violation_report.css('border', '1px solid #F00');
            alert_reason_violation_report.show();
            alert_reason_violation_report.text("دلیل تخلف نباید کمتر از 5 کاراکتر داشته باشد!");
            $("#reason_violation_report").focus();
            rvr = false;
        }else if (reason_violation_report.val().length >= 3000) {
            reason_violation_report.css('border', '1px solid #F00');
            alert_reason_violation_report.show();
            alert_reason_violation_report.text("دلیل تخلف نباید بیشتر از 3000 کاراکتر داشته باشد!");
            $("#reason_violation_report").focus();
            rvr = false;
        }
        else {
            reason_violation_report.css('border', '1px solid #CCCCCC');
            alert_reason_violation_report.text("");
            alert_reason_violation_report.hide();
            $("#reason_violation_report").focus();
        }

        if (rvr == false) {
            return;
        }
        $('#dv_violation_report').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $.ajax({
            url: '{{route('violationReport')}}',
            data: {
                '_token': _TOKEN,
                'violation_user_id': '{{$person['id']}}',
                'reason_violation': reason_violation_report.val()
            },
            type: 'post',
            success: function (data, textStatus) {
                if (data.error == false) {
                    $(".alert_warn").html("");
                    $('#dv_violation_report').unblock();
                    $('#violationReportModal').modal('toggle');
                    notify('success', 'گزارش تخلف با موفقیت ثبت گردید.')

                } else {
                    $('#dv_violation_report').unblock();
                    $(".alert_warn").show();
                    $(".alert_warn").html(data.message);

                }
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#dv_violation_report').unblock();
                alert('request failed');
            }
        });
    }

</script>
