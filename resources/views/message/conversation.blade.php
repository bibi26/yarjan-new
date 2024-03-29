@extends('home')
@section('content')
@section('title', __('titles.conversationUser'))
<div id="deleteMessageModal" class="modal fade " role="dialog">
    <div class="modal-dialog" style="width: 600px;">

        <!-- Modal content-->
        <div class="modal-content">
            <div id="dv_confirm_registered_user_info">

                <div class="modal-body">
                    <div class='alert_warn alert alert-danger' style="display: none;"></div>
                    <div>پیام جاری پاک شود؟</div>
                </div>
                <input type="hidden" id="messageId">
                <div class="modal-footer">
                    <div class="row">
                        <div class="col col-lg-12" style="text-align: right;">
                            <input name="text" class="btn btn-danger" style="background-color: #fd265a;" type="submit"
                                   value="بله"
                                   onclick="javascrit:deleteMessage()">
                            <button data-dismiss="modal" type="button" class="btn btn-info"
                            >خیر
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script>
    var offset = 1;

    @if($count<$limit)
    $('#dv_more_message').hide();
    @endif

    $(document).on("click", ".deleteLink", function () {
        var messageId = $(this).data('id');
        $('#messageId').val(messageId);
    });

    function deleteMessage() {
        $('.portlet').block({
            message: '<h6><img src="{{asset('img/loading.gif')}}" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#FFA500'}
        });
        $.ajax({
            url: '{{url('/delete_message')}}',
            data: {
                _token: _TOKEN,
                message_id: $('#messageId').val()
            },
            type: 'POST',
            async: false,
            dataType: 'JSON',
            success: function (data) {
                $('.portlet').unblock();
                if (data.error) {
                    alert(data.message);
                } else {
                    $('#deleteMessageModal').modal('toggle');
                    $('#message_' + $('#messageId').val()).hide()
                }
            }, error: function (xhr, textStatus, errorThrown) {
                $('.portlet').unblock();
            }
        });
    }


    $(function () {

        var wtf = $('#content_chat');
        var height = wtf[0].scrollHeight;
        wtf.scrollTop(height);

    });




    $(document).ready(function () {

        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', "{{asset('notification.ogg')}}");

        window.Echo.channel('home{{user()["user_id"]}}')
            .listen('NewMessage', (e) => {
                var obj = JSON.parse(e.message);

                $(obj.content).appendTo($("#content"));
                var wtf = $('#content_chat');
                var height = wtf[0].scrollHeight;
                wtf.scrollTop(height);
                offset = offset + 1;
                audioElement.play();
                $.notify({
                    icon: obj.avatar,
                    title:obj.name + " :",
                    message:obj.shortText
                },{
                    delay: 50,    animate: {
                        enter: 'animated bounceInDown',
                        exit: 'animated bounceOutUp'
                    },
                    type: 'info',

                    icon_type: 'image',
                    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                        '<img data-notify="icon" class="img-circle pull-left" style="width: 50px;height: 50px;">' +
                        '<h4 data-notify="title" style="font-weight: bolder;font-size: 16px;color: black;">{1}</h4>' +
                        '<h6 data-notify="message" style="color: black;">{2}</h6>' +
                        '</div>'
                });
            });
        $("#message").keypress(function () {

            var channel = window.Echo.join('cc');
            setTimeout(() => {
                channel.whisper('typing', {
                    name: 'fgg'
                })
            }, 300);
            window.Echo.join('cc').listenForWhisper('typing', (e) => {
                alert('rrr');
            })
        });
    });

    function getMoreMessage() {
        $('#content_chat').block({
            message: '<h6><img src="{{asset('img/loading.gif')}}" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#FFA500'}
        });

        $.ajax({
            url: '{{url('/conversation')}}',
            data: {
                _token: _TOKEN,
                page_number: offset,
                conversation_id: '{{$conversation_id}}',
                reciever_user_id: '{{$reciever['id']}}'
            },
            type: 'POST',
            async: false,
            dataType: 'JSON',
            success: function (data) {
                $('#content_chat').unblock()

                if (data.count != 0) {
                    offset += 1;
                    $("#content").prepend(data.messages);

                    setTimeout(function () {
                        $('#content_chat').unblock();
                    }, 2000);

                }
                if (data.count < data.limit) {
                    $("#etc_button").hide();
                    return false;
                }
            }, error: function (xhr, textStatus, errorThrown) {
                $('#content_chat').unblock();
            }
        });
    }
</script>
<div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
        <div class="portlet portlet-default">
            <div class="portlet-heading">
                <div class="portlet-title">
                    <h4>
                        {{--<i class="fa fa-circle text-green"></i>--}}
                        <img src="{{$reciever['online_status_icon']}}">
                        <span>&nbsp;@php  echo !empty($reciever['nick_name']) ? $reciever['nick_name'] :$reciever['fname']; @endphp</span>
                    </h4>
                </div>
                <div class="portlet-widgets">
                    <div class="btn-group">
                    </div>
                    <span class="divider"></span>
                </div>
                <div class="clearfix"></div>
            </div>
            <div id="chat" class="panel-collapse collapse in">
                <div>
                    <div id="content_chat" class="portlet-body chat-widget"
                         style="overflow-y: auto; width: auto; height: 500px;">
                        <div id="dv_more_message"
                             style=" display: flex;align-items: center; justify-content: center;width:100%;">
                            <button id="etc_button" type="button" class="btn btn-warning pull-right btn-sm"
                                    onclick="javascrit:getMoreMessage()">پیام های بیشتر
                            </button>
                        </div>
                        <br/>
                        <div id="content"> {!! $content !!}</div>
                    </div>
                </div>
                <div class="portlet-footer">
                    <form role="form">
                        <div class="form-group">
                            <div data-emojiarea data-type="unicode" data-global-picker="false" >
                                <div class="emoji-button">&#x1f604;</div>
                                <textarea id="message" class="form-control" placeholder="بنویس . . ."></textarea>
                            </div>


                        </div>
                        <div class="form-group">
                            <div id="alert_message"
                                 style="display:none;color: red; font-weight: bold;">
                            </div>
                            <button type="button" class="btn btn-default pull-right"
                                    onclick="javascrit:send()">ارسال
                            </button>
                            <div class="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /.col-md-4 -->
</div>

<script>

    function send() {
        var message = $('#message')
        var alert_message = $('#alert_message')
        if (message.val() == '') {
            message.css('border', '1px solid #F00');
            alert_message.show();
            alert_message.text("لطفا متن را وارد نمایید!");
            $("#message").focus();
            return false;
        }
        $.ajax({
            url: '{{route('sendRealMessage')}}',
            data: {
                _token: _TOKEN,
                conversation_id: '{{$conversation_id}}',
                reciever_user_id: '{{$reciever['id']}}',
                text: $('#message').val()
            },
            type: 'post',
            success: function (data, textStatus) {
                $(data.content).appendTo($("#content"));
                var wtf = $('#content_chat');
                var height = wtf[0].scrollHeight;
                wtf.scrollTop(height);
                $('#message').val('')
                offset = offset + 1;
                alert_message.hide();
                message.css('border', '1px solid #ffffff');

            },
            error: function (xhr, textStatus, errorThrown) {
                alert('request failed');
                alert_message.hide();
                message.css('border', '1px solid #ffffff');


            }
        });
    }
</script>
<style>


    .portlet {
        margin-bottom: 15px;
    }

    .btn-white {
        border-color: #cccccc;
        color: #333333;
        background-color: #ffffff;
    }

    .portlet {
        border: 1px solid;
    }

    .portlet .portlet-heading {
        padding: 0 15px;
    }

    .portlet .portlet-heading h4 {
        padding: 1px 0;
        font-size: 16px;
    }

    .portlet .portlet-heading a {
        color: #fff;
    }

    .portlet .portlet-heading a:hover,
    .portlet .portlet-heading a:active,
    .portlet .portlet-heading a:focus {
        outline: none;
    }

    .portlet .portlet-heading .portlet-title {
        float: right;
    }

    .portlet .portlet-heading .portlet-title h4 {
        margin: 10px 0;
    }

    .portlet .portlet-heading .portlet-widgets {
        float: right;
        margin: 8px 0;
    }

    .portlet .portlet-heading .portlet-widgets .tabbed-portlets {
        display: inline;
    }

    .portlet .portlet-heading .portlet-widgets .divider {
        margin: 0 5px;
    }

    .portlet .portlet-body {
        padding: 15px;
        background: #fff;
    }

    .portlet .portlet-footer {
        padding: 10px 15px;
        background-color: #00CCFC;
    }

    .portlet .portlet-footer ul {
        margin: 0;
    }

    .portlet-green,
    .portlet-green > .portlet-heading {
        border-color: #16a085;
    }

    .portlet-green > .portlet-heading {
        color: #fff;
        background-color: #16a085;
    }

    .portlet-orange,
    .portlet-orange > .portlet-heading {
        border-color: #f39c12;
    }

    .portlet-orange > .portlet-heading {
        color: #fff;
        background-color: #f39c12;
    }

    .portlet-blue,
    .portlet-blue > .portlet-heading {
        border-color: #2980b9;
    }

    .portlet-blue > .portlet-heading {
        color: #fff;
        background-color: #2980b9;
    }

    .portlet-red,
    .portlet-red > .portlet-heading {
        border-color: #e74c3c;
    }

    .portlet-red > .portlet-heading {
        color: #fff;
        background-color: #e74c3c;
    }

    .portlet-purple,
    .portlet-purple > .portlet-heading {
        border-color: #8e44ad;
    }

    .portlet-purple > .portlet-heading {
        color: #fff;
        background-color: #8e44ad;
    }

    .portlet-default,
    .portlet-dark-blue,
    .portlet-default > .portlet-heading,
    .portlet-dark-blue > .portlet-heading {
        border-color: #00CCFC;;
    }

    .portlet-default > .portlet-heading,
    .portlet-dark-blue > .portlet-heading {
        color: #fff;
        background-color: #00CCFC;
    }

    .portlet-basic,
    .portlet-basic > .portlet-heading {
        border-color: #333;
    }

    .portlet-basic > .portlet-heading {
        border-bottom: 1px solid #333;
        color: #333;
        background-color: #fff;
    }

    @media (min-width: 768px) {
        .portlet {
            margin-bottom: 30px;
        }
    }

    .img-chat {
        width: 40px;
        height: 40px;
    }

    .text-green {
        color: #16a085;
    }

    textarea.form-control {
        height: 100px;
    }

    .deleteMessage:hover {
        cursor: pointer;
    }












    .emoji {
        color: transparent;
        display: inline-block;
        font-size: 18px;
        font-style: normal;
        height: 25px;
        width: 25px;
    }

    .emoji::selection {
        background-color: highlight;
        color: transparent;
    }

    .emoji-image {
        font-size: 14px;
        line-height: 28px;
    }

    .emoji-button {
        cursor: pointer;
        margin: 5px;
        text-align: left;
    }

    .emoji-editor {
        -moz-appearance: textfield-multiline;
        -webkit-appearance: textarea;
        border: 1px solid #ccc;
        border-radius: 3px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        cursor: text;
        font: medium -moz-fixed;
        -webkit-font-smoothing: antialiased;
        height: 100px;
        overflow: auto;
        padding: 5px;
        resize: both;
        width: 100%;
    }

    .emoji-picker {
        background-color: #fff;
        border: 1px solid #ccc;
        position: absolute;
        width: 350px;

    }

    .emoji-picker a {
        cursor: pointer;
        display: inline-block;
        font-size: 20px;
        padding: 3px;
    }

    .emoji-selector {
        border-bottom: 1px solid #ccc;
        display: flex;
        background: rgba(115,255,99,0.77);

    }

    .emoji-selector li { margin: 5px; }

    .emoji-group {
        display: grid;
        grid-template-columns: repeat(6, 16.66667%);
        height: 200px;
        overflow-y: scroll;
        padding: 3px;
    }

    /*# sourceMappingURL=style.css.map */
</style>


@stop
