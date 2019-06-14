@extends('home')
@section('content')

    @if(Session::has('error'))
        notify('danger','{{Session::get('error')}}' )
    @endif
    <script>

        function openCity(content, menu) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            console.log(document.getElementsByClassName(content));
            // document.getElementById(content).style.display = "block";
            document.getElementById(menu).className += " active";

            // evt.currentTarget.className += " active";
        }

    </script>
    <div class="container">
        <div class="tab">
            <a class="tablinks" id="allMessageMenu" href="{{url('/message/all')}}">همه</a>
            <a class="tablinks" id="inboxMessageMenu" href="{{url('/message/inbox')}}">دریافتی ها</a>
            <a class="tablinks" id="outboxMessageMenu" href="{{url('/message/outbox')}}">ارسالی ها</a>
            <a class="tablinks" id="unreadMessageMenu" href="{{url('/message/unread')}}">نخوانده ها</a>
        </div>
        <div class="messageContent">
            <table class="table  table-hover">
                @if(isset($messages))
                    @foreach($messages as $message)
                        <tr>
                            <td class=" col-xs-2" style="position: relative;">
                                <a href="{{url('conversation/'.$message['users']['id'])}}">
                                <img style="width: 60px;height: 60px;"
                                     src='{{asset($message['profile_image'].'?'.mt_rand(1,100000))}}'>
                                    <span style='position: absolute;top: 5px;right: 5px;'>
                                <img src='{{$message['online_status_icon']}}'>
                        </span>
                                </a>
                            </td>
                            <td class="col-md-8" style="text-align: right;">
                                <div>
                                    <b style="color: #ff1254;">@php  echo !empty($message['users']['nick_name']) ? $message['users']['nick_name'] :$message['users']['fname']; @endphp</b>
                                </div>
                                <div>{{$message['text']}}</div>
                            </td>
                            <td class="col-xs-2" style="padding-top: 25px;">
                                <small>{{persianNum($message['time'])}}</small>
                            </td>
                        </tr>
                    @endforeach
                @endif
            </table>
        </div>
        <script>
        @if(isset($flag))
            @if($flag=='all')
            openCity('messageContent', 'allMessageMenu');
            @endif
            @if($flag=='inbox')
            openCity('messageContent', 'inboxMessageMenu');
            @endif
            @if($flag=='outbox')
            openCity('messageContent', 'outboxMessageMenu');
            @endif
            @if($flag=='unread')
            openCity('messageContent', 'unreadMessageMenu');
            @endif
             @endif
        </script>

    </div>
    <style>
        .tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }

        .tabcontent {
            display: none;
            padding: 6px 12px;
            border: 1px solid #ccc;
            border-top: none;
        }

        .tab a {
            background-color: inherit;
            float: right;
            border: none;
            outline: none;
            text-decoration: none;
            color: black;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
        }

        .tab button:hover {
            background-color: #ddd;
        }

        .tab .active {
            background-color: #ccc;
        }

        .tabcontent {
            display: none;
            padding: 6px 12px;

            border: 1px solid #ccc;
            border-top: none;
        }

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        tr {
            border: 1px solid #dddddd;
            padding: 8px;
            text-align: center;
        }

        /*Change color to gray*/
        /*tr:nth-child(even) {*/
        /*background-color: #dddddd;*/
        /*}*/

        .actived a {
            color: green
        }

        .actived a:hover {
            font-weight: bold
        }

        .deactivated a {
            color: red
        }

        .deactivated a:hover {
            font-weight: bold
        }

        .available {
            color: green;
        }

        .disable {
            color: red;
            font-weight: bold
        }

        .intraining {
            color: blue;
            font-weight: bold
        }

        .vacation {
            font-weight: bold
        }

    </style>

@stop

