@extends('home')
@section('content')
@section('title', __('titles.showPersons'))

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
/*
serch panel
 */
    .card-item {
        display: inline-block;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 3px 0px;
        border-radius: 3px;
        background: #fff;
        border: 0;
    }

    .card-item .panel-heading {
        font-size: 20px;
        color: #000;
        overflow: inherit;
        line-height: normal;

    }

    .card-head span {
        display: inline-block;
        padding: 15px;
        background: #333;
        color: #fff;
        padding: 0 5px;
        cursor: pointer;
    }

    .card-body {
        padding-top: 0;
        padding-bottom: 0;
    }

    .card-body:before, .card-body:after {
        content: '';
        display: block;
        height: 15px;
    }

    .card-head span::before {
        content: "\e113";
        float: right;
        font-family: 'Glyphicons Halflings';
    }

    .collapsed .card-head span::before {
        transform: rotate(-180deg);
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
                    $('#infiniteContent').append(data.persons);
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


    $(function () {
        $('.card-head > span').click(function () {
            $(this).parent().parent().toggleClass('collapsed');
            $(this).parent().parent().find('.card-body').slideToggle();
        });
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
            <div class="card-item panel" style="height: 50px;">
                <div class="card-head panel-heading alert alert-danger">جستجو<span class="pull-left"></span></div>
                <div class="card-body panel-body" style="border: 2px solid black;">Lorem ipsum is a pseudo-Latin text used in web design, typography,
                    layout, and printing in place of English to emphasise design elements over content. It's also called
                    placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual
                    elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part
                    of a Latin text by the classical author and philosopher Cicero. Its words and letters have been
                    changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine,
                    correct, or comprehensible Latin anymore.
                </div>
        </div>
    </div>
</div>
        <div class="row">
    <div class=" col-lg-12">
        <div class='posts-box'>
            <!--<ul>-->
            <div id="infiniteContent">
                {!! $content !!}
            </div>

            <div id="pagination_message">
            </div>

        </div>
    </div>
</div>


@stop

