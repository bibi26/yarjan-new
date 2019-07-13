@if($re)
    @if(isset($messages))
        @foreach($messages as $message)
            <div class="row" id="message_{{$message['id']}}">
                <div class="col-lg-12" style="width:100%;padding-right: 35%;">
                    <div class="media">
                        <a class="pull-right" href="{{url('detailPerson/'. $reciever['id'])}}">
                            <img class="media-object img-circle img-chat"
                                 src="{{asset($reciever['receiver_image'].'?'.mt_rand(1,100000))}}"
                                 alt="">
                        </a>
                        <div class="media-body" style="text-align: right;border-radius:10px;text-align: justify;">
                            <h4 class="media-heading">
                                <p class="small">{{persianNum($message['time'])}}</p>
                                <p>@php  echo !empty($reciever['nick_name']) ? $reciever['nick_name'] :$reciever['fname']; @endphp</p>
                            </h4>
                            <pre style="background-color: #F2FFF2;blorder-radius:10px;padding: 10px;;text-align: right;  white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;  text-align: justify;">&nbsp;{{$message['text']}}</pre>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    @endif
@else
    @if(isset($messages))
        @foreach($messages as $message)
            @if($message['sender_user_id']== user()['user_id'])
                <div class="row" id="message_{{$message['id']}}">
                    <div class="col-lg-12">
                        <div class="media">
                            <a class="pull-right" href="{{url('detailPerson/'. user()['user_id'])}}">
                                <img class="media-object img-circle img-chat"
                                     src="{{asset($reciever['sender_image'].'?'.mt_rand(1,100000))}}"
                                     alt="">
                            </a>
                            <div class="media-body" style="text-align: right;padding-left: 35%;text-align: justify;">

                                <h4 class="media-heading">
                                    <p class="small">{{persianNum($message['time'])}}</p>
                                    <p>@php  echo !empty(user()['nick_name']) ? user()['nick_name'] :user()['fname']; @endphp</p>
                                </h4>
                                <div>
                                    <a style="padding: 0px;margin: 0px;" data-toggle="modal"
                                       data-id="{{$message['id']}}" data-toggle="modal"
                                       class="deleteLink" href="#deleteMessageModal"><img
                                            src="{{asset('img/close.png')}}"/></a>
                            <pre style="background-color: #F2FFF2;blorder-radius:10px;padding: 10px;;text-align: right;  white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;  text-align: justify;">{{$message['text']}}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @else
                <div class="row" id="message_{{$message['id']}}">
                    <div class="col-lg-12" style="width:100%;padding-right: 35%;">
                        <div class="media">
                            <a class="pull-right" href="{{url('detailPerson/'. $reciever['id'])}}">
                                <img class="media-object img-circle img-chat"
                                     src="{{asset($reciever['receiver_image'].'?'.mt_rand(1,100000))}}"
                                     alt="">
                            </a>
                            <div class="media-body" style="text-align: right;border-radius:10px;text-align: justify;">
                                <h4 class="media-heading">
                                    <p class="small">{{persianNum($message['time'])}}</p>
                                    <p>@php  echo !empty($reciever['nick_name']) ? $reciever['nick_name'] :$reciever['fname']; @endphp</p>
                                </h4>
                                <pre
                                    style="background-color: #F2FFF2;blorder-radius:10px;padding: 10px;;text-align: right;  white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;  text-align: justify;">{{$message['text']}}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        @endforeach
    @endif
@endif
