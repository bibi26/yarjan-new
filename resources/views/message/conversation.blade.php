@extends('home')
@section('content')

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
                        <div class="portlet-body chat-widget" style="overflow-y: auto; width: auto; height: 500px;">
                            @if(isset($messages))
                                @foreach($messages as $message)
                                    @if($message['sender_user_id']==$reciever['id'])
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="media">
                                                    <a class="pull-right" href="#">
                                                        <img class="media-object img-circle img-chat"
                                                             src="{{asset($reciever['sender_image'].'?'.mt_rand(1,100000))}}"
                                                             alt="">
                                                    </a>
                                                    <div class="media-body" style="text-align: right;padding-left: 35%;text-align: justify;">
                                                        <h4 class="media-heading">
                                                            <p class="small">{{persianNum($message['time'])}}</p>
                                                            <p>@php  echo !empty($message['users']['nick_name']) ? $message['users']['nick_name'] :$message['users']['fname']; @endphp</p>
                                                        </h4>
                                                        <p style="background-color: rgba(27,255,20,0.22);border-radius:10px;padding: 10px;">{{$message['text']}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @else
                                        <div class="row">
                                            <div class="col-lg-12" style="width:100%;padding-right: 35%;">
                                                <div class="media">
                                                    <a class="pull-right" href="#">
                                                        <img class="media-object img-circle img-chat"
                                                             src="{{asset($reciever['receiver_image'].'?'.mt_rand(1,100000))}}"
                                                             alt="">
                                                    </a>
                                                    <div class="media-body" style="text-align: right;border-radius:10px;text-align: justify;">
                                                        <h4 class="media-heading">
                                                            <p class="small">{{persianNum($message['time'])}}</p>
                                                            <p>@php  echo !empty($message['users']['nick_name']) ? $message['users']['nick_name'] :$message['users']['fname']; @endphp</p>
                                                        </h4>
                                                        <p style="background-color: #f9e7eb;border-radius:10px;padding: 10px;">{{$message['text']}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endif
                                @endforeach
                            @endif


                        </div>
                    </div>
                    <div class="portlet-footer">
                        <form role="form">
                            <div class="form-group">
                                <textarea class="form-control" placeholder="بنویس . . ."></textarea>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-default pull-right">ارسال</button>
                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.col-md-4 -->
    </div>
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
            background: #e0e7e8;
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
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>
    <div>0</div>

@stop
