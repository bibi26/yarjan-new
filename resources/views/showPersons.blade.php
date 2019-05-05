@extends('home')
@section('content')
    <style>
        .posts-box {
            max-width: 1024px;
            margin: 0 auto;
            text-align: center;
            list-style: none;
        }

        .posts-box li {
            display: inline-block;
            width: 320px;
            max-width: 100%;
            padding: 10px;
            vertical-align: top;
        }

        .card {
            text-align: left;
            border-radius: 2px;
            background: #FFFFFF;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.10),
            0 1px 2px rgba(0, 0, 0, 0.22);
            position: relative;
            height: 370px;
        }

        .card .profile_image {
            padding-top: 5px;
            display: block;
            width: 70%;
            max-height: 200px;
            margin: 0 auto;
            border: none;
            height: 220px;
        }

        .card div {
            padding: 16px 20px;

        }

        .card div h3 {
            margin: 8px 0;
            font-size: .9em;
        }

        .card div p {
            margin: 8px 0;
            font-size: .9em;
        }

        .button {
            color: #FFC107;
            text-transform: uppercase;
            text-decoration: none;
            font-size: .8em;
        }

        .button:hover {
            opacity: .7;
        }

        button {
            min-width: 120px;
            top: 50%;
            left: 50%;
            padding: 16px 32px;
            margin: 24px 8px 0 0;
            background: transparent;
            text-decoration: none;
            border: 1px solid #FFC107;
            outline: none;
            color: #FFC107;
            cursor: pointer;
        }

        .disabled {
            opacity: .4;
            cursor: auto;
        }

        @media (max-width: 620px) {
            button {
                width: 100%;
                min-width: auto;
            }
        }

        .overlay {
            position: absolute;
            bottom: 0;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5); /* Black see-through */
            color: #f1f1f1;
            width: 100%;
            transition: .5s ease;
            opacity: 0;
            color: white;
            font-size: 18px;
            height: 100%;
            text-align: right;
        }

        .overlay table {
            font-size: 18px;
        }

        .overlay table tr {
            line-height: 30px
        }

        /* When you mouse over the container, fade in the overlay title */
        .card:hover .overlay {
            opacity: 1;
        }
    </style>
    <script>
        //declaring variables
        var offset = 2; //customize this as your need
        var request_ajax = true;
        var ajax_is_on = false;
        var objHeight = $(window).height() - 50; //customize this as your need
        var last_scroll_top = 0;

        $(window).scroll(function (event) {
            var st = $(this).scrollTop();
            if (st <= last_scroll_top)
                return false;
            if (($(window).scrollTop() + 500) <= ($(document).height() - $(window).height()))
                return false
            var persons = '';
            if (!request_ajax || ajax_is_on)
                return false;
            ajax_is_on = true;
            $("#loading-gif").removeClass('hideGif')
                .addClass('displayGif');
            var detail_url = '{{url("/detailPerson")}}'
            $.ajax({
                url: '{{url('/show_persons')}}',
                data: {
                    _token: _TOKEN,
                    page_number: offset,
                },
                type: 'POST',
                async: false,
                dataType: 'JSON',
                success: function (data) {

                    $("#loading-gif").removeClass('displayGif').addClass('hideGif');
                    if (data.count != 0) {
                        for (var x = 0; x < data.persons.length; x++) {
                            persons += "<li>\
                        <div class='card'>\
                            <a class='button' href='article-link1'>\
                                <img class='profile_image' src='" + data.persons[x].profile_image + "' >\
                            </a>\
                            <span style='position: absolute;top: 5px;left: 5px;'>\
                                <img  src='" + data.persons[x].online_status_icon + "' >\
                            </span>\
                            <div  style='text-align: right; border-bottom: 1px solid #EEEEEE;'>\
                                    <h3><span>" + data.persons[x].fname + "</span>&nbsp;-&nbsp;<span>" + data.persons[x].age + "</span></h3>\
                                    <p><span>" + data.persons[x].provinces.name + "</span>&nbsp;-&nbsp;<span>" + data.persons[x].cities.name + "</span></p>\
                            </div>\
                             <div style='width: 100%;'>\
                                  <div style='float: right; width: 25%;padding-right: 0px;'><a class='btn btn-small btn-default' href='article-link1'>400&nbsp;\
                                  <i class='fa fa-eye ' style='color: #ff335a;'></i></a></div>\
                                <div style='float: right; width: 50%;padding-right: 0px;text-align: center;'>\
                                <span class=''  style='color: #4ff872;padding-top: 6px;'>"+data.persons[x].i_visited+"</span></div>\
                                <div style='float: right; width: 25%;padding-right: 0px;'><a class='btn btn-small btn-default' href='article-link1'>80&nbsp;\
                                <i class='fa fa-heart' style='color: #ff335a;'></i></a></div> <br style='clear: right;'/></div>\
                              <a href='" + detail_url + "/" + data.persons[x].id + "'>\
                                    <div class='overlay'>\
                                          <table >\
                                              <tr>\
                                                  <td><small>نام:</small></td>\
                                                  <td>" + data.persons[x].fname + "</td>\
                                              </tr>\
                                              <tr>\
                                                  <td><small>سن:</small></td>\
                                                  <td>" + data.persons[x].birth_date + "</td>\
                                              </tr>\
                                              <tr>\
                                                  <td><small>سکونت:</small></td>\
                                                  <td><span>" + data.persons[x].provinces.name + "</span>&nbsp;-&nbsp;<span>" + data.persons[x].cities.name + "</span></td>\
                                              </tr>\
                                              <tr>\
                                                  <td><small>تحصیلات:</small></td>\
                                                  <td>" + educationStatus(data.persons[x].education) + "</td>\
                                              </tr>\
                                              <tr>\
                                                  <td><small>رشته:</small></td>\
                                                  <td>" + data.persons[x].field + "</td>\
                                              </tr>\
                                              <tr>\
                                                  <td><small>شغل:</small></td>\
                                                  <td>" + data.persons[x].job + "</td>\
                                              </tr>\
                                              <tr>\
                                                  <td><small>آخرین ورود:</small></td>\
                                                  <td>" + data.persons[x].last_visit + "</td>\
                                              </tr>\
                                              <tr>\
                                                  <td><small>وضعیت :</small></td>\
                                                  <td>" + data.persons[x].online_status_label + "</td>\
                                              </tr>\
                                          </table>\
                                      </div>\
                                  </a>\
                                </div></li>";
                        }
                        $('#infiniteContent').append(persons);
                        offset += 1;

                    } else {

                        request_ajax = false;
                        $("#pagination_message").addClass('alert alert-danger');
                        $("#pagination_message").html('رکوردی دیگر یافت نشد!');
                    }
                    ajax_is_on = false;
                }
            });
            last_scroll_top = st;
        });

    </script>
    @if(isset($error))
        <div class="alert oaerror danger" style="margin-top: 5px;">{{$error}}</div>
    @endif
    <div class="row">
        <div class=" col-lg-12">
            @php
                $f='';
                if($flag==''){
                    $f='کاربران';
                }
                if($flag=='visits'){
                    $f='بازدیدکنندگان من';
                }
                if($flag=='favorites'){
                    $f='علاقه مندی های من';
                }
                if($flag=='blacks'){
                    $f='لیست سیاه من';
                }
            @endphp
            <div class="alert alert-info">تعداد {{$f}} <b style="color: red;">{{isset($count)?$count:0}}&nbsp;</b>نفر
            </div>
        </div>
    </div>
    <div class="row">
        <div class=" col-lg-12">
            <div class='posts-box'>
                <!--<ul>-->
                <div id="infiniteContent">
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
                                                class=""
                                                style="color: #4ff872;padding-top: 6px;">{{$person['i_visited']}}</span></div>
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
                            </li>
                        @endforeach
                    @endif
                </div>

                <div id="pagination_message">
                </div>

            </div>
        </div>
    </div>


@stop

