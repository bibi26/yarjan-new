@extends('home')
@section('content')
    <script>

        $(function () {

            var wtf = $('#content_chat');
            var height = wtf[0].scrollHeight;
            wtf.scrollTop(height);

        });
        var offset = 2;
        Echo.channel('home{{user()["user_id"]}}')
            .listen('NewMessage', (e) => {
                $( e.message ).appendTo( $( "#content" ) );
                var wtf = $('#content_chat');
                var height = wtf[0].scrollHeight;
                wtf.scrollTop(height);
            });
        function getConversation() {
            $('#content_chat').block({
                message: '<h6><img src="{{asset('img/loading.gif')}}" />در حال بررسی اطلاعات...',
                css: {backgroundColor: '#FFA500'}
            });

            $.ajax({
                url: '{{url('/conversation')}}',
                data: {
                    _token: _TOKEN,
                    page_number: offset,
                    reciever_user_id: '{{$reciever['id']}}'
                },
                type: 'POST',
                async: false,
                dataType: 'JSON',
                success: function (data) {
                    if (data.count != 0) {
                        offset += 1;
                        console.log(data.messages);
                        $($( "#content" ) ).prepend(   data.messages );
                        setTimeout(function(){   $('#content_chat').unblock(); }, 2000);
                    } else {
                        $("#etc_button").hide();
                    }
                } , error: function (xhr, textStatus, errorThrown) {
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
                            <div style="  display: flex;align-items: center; justify-content: center;width:100%;">
                                <button id="etc_button" type="button" class="btn btn-warning pull-right btn-sm"
                                        onclick="javascrit:getConversation()">پیام های بیشتر
                                </button>
                            </div>
                            <br/>
                            <div id="content"> {!! $content !!}</div>
                        </div>
                    </div>
                    <div class="portlet-footer">
                        <form role="form">
                            <div class="form-group">
                                <textarea id="message" class="form-control" placeholder="بنویس . . ."></textarea>
                            </div>
                            <div class="form-group">
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
            $.ajax({
                url: '{{url('/send_real_message')}}',
                data: {
                    _token: _TOKEN,
                    reciever_user_id: '{{$reciever['id']}}',
                    text: $('#message').val()
                },
                type: 'post',
                success: function (data, textStatus) {
                    $( data.content).appendTo( $( "#content" ) );
                    var wtf = $('#content_chat');
                    var height = wtf[0].scrollHeight;
                    wtf.scrollTop(height);

                },
                error: function (xhr, textStatus, errorThrown) {
                    alert('request failed');
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
    </style>


@stop
