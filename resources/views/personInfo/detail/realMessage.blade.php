<div id="realMessage" class="modal fade" role="dialog">
    <div class="modal-dialog" style="width: 600px;">

        <!-- Modal content-->
        <div class="modal-content">
            <div id="dv_real_message">

                <div class="modal-header" style="background: -webkit-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -moz-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -o-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -ms-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);">
                    <h4 class="modal-title" style="text-align: center;"><i class="fa fa-sign-in fa-2x"
                                                                           aria-hidden="true" style="color: white"></i>ارسال پیام شخصی
                        </h4>
                </div>
                <div class="modal-body">
                    <div class='alert_warn alert alert-danger' style="display: none;"></div>
                    {!! Form::open(['route'=>'violationReport','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'violationReport']) !!}
                    <div class="form-group {{ $errors->has('message') ? 'has-error' : '' }}">
                        <p><span>به : </span><b style="background-color: #d8e3ff;color: black;font-size: 16px;" class="badge">{{$person['fname']}}</b></p>
                        {!! Form::label('متن :','',[]) !!}
                        {!! Form::textarea('message', old('message'), ['class'=>'form-control','style'=>'height: 150px;text-align:justify;' ,'id' =>'real_message']) !!}
                        <div id="alert_real_message"
                             style="display:none;color: red; font-weight: bold;">\</div>
                    </div>
                    {!! Form::close() !!}
                </div>
                <div class="modal-footer">
                    <div class="row">
                        <div class="col col-lg-12" style="text-align: right;">
                            <input name="text" class="btn btn-success" type="submit" value="ارسال"
                                   style="background-color: #a7f995;" onclick="javascrit:sendRealMessage()">
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
    $(".alert_warn").hide();
    $("#message").val('');
    function sendRealMessage(debug) {
        $(".alert_warn").hide();
        var message = $("#real_message");
        var alert_message = $("#alert_real_message");
        var rvr = true;
        if (message.val() == '') {
            alert('ff');
            message.css('border', '1px solid #F00');
            alert_message.show();
            alert_message.text("لطفا متن راوارد نمایید!");
            $("#message").focus();
            rvr = false;
        }
       else if (message.val().length >= 3000) {
            message.css('border', '1px solid #F00');
            alert_message.show();
            alert_reason_violation_report.text("دلیل تخلف نباید بیشتر از 3000 کاراکتر داشته باشد!");
            $("#message").focus();
            rvr = false;
        }
        else {
            message.css('border', '1px solid #CCCCCC');
            alert_message.text("");
            alert_message.hide();
            $("#message").focus();
        }
        if (rvr == false) {
            return;
        }
        $('#dv_real_message').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $.ajax({
            url: '{{route('sendRealMessage')}}',
            data: {
                '_token': _TOKEN,
                'conversation_id': '{{$conversation_id}}',
                'reciever_user_id': '{{$person['id']}}',
                'text': message.val()
            },
            type: 'post',
            success: function (data, textStatus) {
                if (data.error == false) {
                    $(".alert_warn").html("");
                    $('#dv_real_message').unblock();
                    $('#realMessage').modal('toggle');
                    notify('success', 'با موفقیت ارسال شد.')

                    setTimeout(function() {
                        notify.close();
                    }, 2000);
                } else {
                    $('#dv_real_message').unblock();
                    $(".alert_warn").show();
                    $(".alert_warn").html(data.message);

                }
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#dv_real_message').unblock();
                alert('request failed');
            }
        });
    }


</script>
