<div id="deactiveUser" class="modal fade" role="dialog">
    <div class="modal-dialog" style="width: 600px;">

        <!-- Modal content-->
        <div class="modal-content">
            <div id="dv_deactive_user">

                <div class="modal-header" style="background: -webkit-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -moz-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -o-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -ms-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);">
                    <h4 class="modal-title" style="text-align: center;"><i class="fa fa-sign-in fa-2x"
                                                                           aria-hidden="true" style="color: white"></i>فعال / غیرفعال
                    </h4>
                </div>
                <div class="modal-body">
                    <div class='alert_warn alert alert-danger' style="display: none;"></div>
                    <div class="form-group {{ $errors->has('description') ? 'has-error' : '' }}">
                        {!! Form::label('دلیل غیرفعال شدن :','',[]) !!}
                        {!! Form::textarea('description', old('description'), ['class'=>'form-control','style'=>'height: 150px;text-align:justify;' ,'id' =>'description_deactive']) !!}
                        <div id="alert_description_deactive"
                             style="display:none;color: red; font-weight: bold;"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="row">
                        <div class="col col-lg-12" style="text-align: right;">
                            <input name="text" class="btn btn-success" type="submit" value="فعال"
                                    onclick="javascrit:deactiveUser('no')">
                            <input name="text" class="btn btn-warning" type="submit" value="غیر فعال"
                                   onclick="javascrit:deactiveUser('yes')">
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

    function deactiveUser(status) {
        $(".alert_warn").hide();
        var description = $("#description_deactive");
        var alert_description = $("#alert_description_deactive");
        var rvr = true;
        if (status=='yes' &&  description.val() == '' ) {
            description.css('border', '1px solid #F00');
            alert_description.show();
            alert_description.text("لطفا دلیل غیرفعال شدن راوارد نمایید!");
            $("#description").focus();
            rvr = false;
        }
        else if (status=='yes' && description.val().length >= 3000) {
            description.css('border', '1px solid #F00');
            alert_description.show();
            alert_description.text("دلیل تخلف نباید بیشتر از 3000 کاراکتر داشته باشد!");
            $("#description").focus();
            rvr = false;
        }
        else {
            description.css('border', '1px solid #CCCCCC');
            alert_description.text("");
            alert_description.hide();
            $("#description").focus();
        }
        if (rvr == false) {
            return;
        }
        $('#dv_description').block({
            description: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        var  desc='';
        if(status=='yes'){
              desc=description.val();
        }
        $.ajax({
            url: '{{route('deactiveUser')}}',
            data: {
                '_token': _TOKEN,
                'status': status,
                'user_id': '{{$person['id']}}',
                'description': desc
            },
            type: 'post',
            success: function (data, textStatus) {
                if (data.error == false) {
                    $(".alert_warn").html("");
                    $('#dv_description').unblock();
                    $('#confirmRegisteredUserInfo').modal('toggle');
                    notify('success', 'با موفقیت انجام شد.')
                    window.location.reload(false);
                } else {
                    $('#dv_description').unblock();
                    $(".alert_warn").show();
                    $(".alert_warn").html(data.message);

                }
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#dv_description').unblock();
                alert('request failed');
            }
        });
    }


</script>
