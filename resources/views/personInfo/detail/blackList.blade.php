<script>
    $("#reason_violation_report").val('');
    $("#alert_warn").hide();
    function send(debug) {
        $("#alert_warn").hide();
        var reason_violation_report = $("#reason_violation_report");
        var alert_reason_violation_report = $("#alert_reason_violation_report");
        var rvr = true;
        if (reason_violation_report.val() == '') {
            reason_violation_report.css('border', '1px solid #F00');
            alert_reason_violation_report.show();
            alert_reason_violation_report.text("لطفا دلیل تخلف راوارد نمایید!");
            $("#reason_violation_report").focus();
            rvr = false;
        } else {
            reason_violation_report.css('border', '1px solid #CCCCCC');
            alert_reason_violation_report.text("");
            alert_reason_violation_report.hide();
            $("#reason_violation_report").focus();
        }
        if (rvr == false) {
            return;
        }

        $.ajax({
            url: '{{route('violationReport')}}',
            data: {
                '_token': _TOKEN,
                'violation_user_id':'{{$person['id']}}',
                'reason':reason_violation_report.val()
            },
            type: 'post',
            success: function (data, textStatus) {
                if (data.error == false) {
                    $("#alert_warn").html("");
                    $('#dv_violation_report').unblock();
                    $('#violationReportModal').modal('toggle');
                    notify('success', 'افزودن به لیست سیاه با موفقیت ثبت گردید.')
                } else {
                    $('#dv_violation_report').unblock();
                    $("#alert_warn").show();
                    $("#alert_warn").html(data.message);

                }
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#dv_violation_report').unblock();
                alert('request failed');
            }
        });
    }


    $(document).ready(function () {

        $("#refesh_captcha").click(function (event) {
            $('#detail_page').block({
                message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
                css: {backgroundColor: '#33e138'}
            });
            event.preventDefault();
            $.ajax({
                url:"refreshCaptcha",
                data: {
                    "_token":_TOKEN
                },
                type: 'post',
            }).success(function (resp) {
                $("#captcha_image").attr("src", resp.captcha_image);
            });
        });
    });

</script>
