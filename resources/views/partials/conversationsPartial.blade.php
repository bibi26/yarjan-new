@if($re)
    @if(isset($messages))
        @foreach($messages as $message)
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
                                <p>@php  echo !empty($reciever['nick_name']) ? $reciever['nick_name'] :$reciever['fname']; @endphp</p>
                            </h4>
                            <p style="background-color: #F2FFF2;border-radius:10px;padding: 10px;">{{$message['text']}}</p>
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
                                <p>@php  echo !empty(user()['nick_name']) ? user()['nick_name'] :user()['fname']; @endphp</p>
                            </h4>
                            <p style="background-color: #F7F8FF;border-radius:10px;padding: 10px;">{{$message['text']}}</p>
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
                                <p>@php  echo !empty($reciever['nick_name']) ? $reciever['nick_name'] :$reciever['fname']; @endphp</p>
                            </h4>
                            <p style="background-color: #F2FFF2;border-radius:10px;padding: 10px;">{{$message['text']}}</p>
                        </div>
                    </div>
                </div>
            </div>
        @endif
    @endforeach
@endif
@endif
