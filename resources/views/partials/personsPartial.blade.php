@include('partials.alerts')
@if (isset($persons))
    @foreach ($persons as $person)
        <li>
            <div class='card'>
                <a class='button' href='article-link1'>
                    <img class='profile_image'
                         src='{{asset($person['profile_image'].'?'.mt_rand(1,100000))}}'>
                </a>
                <span style="position: absolute;top: 5px;left: 5px;">
                                            <img src='{{$person['online_status_icon']}}'>
                                </span>
                <div style="text-align: right;border-bottom: 1px solid #EEEEEE;">
                    <h3>
                        <span>{{$person['fname']}}</span>&nbsp;-&nbsp;<span>{{$person['age']}}</span>
                    </h3>
                    <p>
                        <span>{{$person['provinces']['name']}}</span>&nbsp;-&nbsp;<span>{{$person['cities']['name']}}</span>
                    </p>
                </div>
                <div style="width: 100%;">
                    <div style="float: right; width: 25%;padding-right: 0px;"><a
                            class='btn btn-small btn-default'
                            href='article-link1'>{{$person['visitCount']}}&nbsp;<i
                                class="fa fa-eye " style="color: #ff335a;"></i></a></div>
                    <div
                        style="float: right; width: 50%;padding-right: 0px;text-align: center;"><span
                            class="badge"
                            style="background-color: white;border: 1px black solid;color: black;">{{$person['i_visited']}}</span>
                    </div>
                    <div style="float: right; width: 25%;padding-right: 0px;"><a
                            class='btn btn-small btn-default' href='article-link1'>80&nbsp;<i
                                class="fa fa-heart" style="color: #ff335a;"></i></a></div>
                    <br style="clear: right;"/>
                </div>
                <a href="{{url('detailPerson/'.$person['id'])}}">
                    <div class='overlay'>

                        <table>
                            <tr>
                                <td>
                                    <small>نام:</small>
                                </td>
                                <td>{{$person['fname']}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <small>سن:</small>
                                </td>
                                <td>{{$person['age']}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <small>سکونت:</small>
                                </td>
                                <td>
                                    <span>{{$person['provinces']['name']}}</span>&nbsp;-&nbsp;<span>{{$person['cities']['name']}}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <small>تحصیلات:</small>
                                </td>
                                <td>{{educationStatus($person['education'])}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <small>رشته:</small>
                                </td>
                                <td>{{$person['field']}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <small>شغل:</small>
                                </td>
                                <td>{{$person['job']}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <small>آخرین ورود:</small>
                                </td>
                                <td>{{$person['last_visit']}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <small> وضعیت:</small>
                                </td>
                                <td>@php echo $person["online_status_label"]@endphp</td>
                            </tr>
                        </table>
                    </div>
                </a>
            </div>
            @if($flag=='favorites')
                <a href="{{url("/favorite/m/{$person['id']}/0")}}" class="btn btn-danger" style="margin-top: 10px;width: 100%;">
                    حذف
                </a>
            @endif
            @if($flag=='blacks')
                <a href="{{url("/blackList/m/{$person['id']}/0")}}" class="btn btn-danger" style="margin-top: 10px;width: 100%;">
                    حذف
                </a>
            @endif
        </li>
    @endforeach
@endif
