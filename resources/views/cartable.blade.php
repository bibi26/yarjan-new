@extends('home')
@section('content')
    @if(Session::has('ePop'))
        notify('danger','{{Session::get('ePop')}}' )
    @endif
    @include('partials.alerts')


    <div class="container gal-container" >
            <div class="col-md-8 col-sm-12 co-xs-12 gal-item">
                <div class="box">
                    <a href="#" data-toggle="modal" data-target="#1">
                        <img src="{{config("constants.upload.register.imageFolder").user()['user_id'] . '_main_orginal' . '.jpg'}}">
                    </a>
                    <div class="modal fade" id="1" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <div class="modal-body">
                                    <img src="{{config("constants.upload.register.imageFolder").user()['user_id'] . '_main_orginal' . '.jpg'}}">
                                </div>
                                <div class="col-md-12 description">
                                    <h4>This is the first one on my Gallery</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <p  class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <a class="quick-btn" href="{{url('show_persons/visits')}}">
                    <i class="fa fa-eye fa-2x"></i><br/>
                    <span> بازدید کنندگان</span>
                    <span class="label btn-danger">{{$visit_count}}</span>
                </a>
            </p>
            <p  class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <a class="quick-btn" href="{{url('show_persons/favorites')}}">
                    <i class="fa fa-heart fa-2x "></i><br/>
                    <span> علاقه مندی ها</span>
                    <span class="label btn-danger">{{$favorite_count}}</span>
                </a>
            </p>
            <p  class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <a class="quick-btn" href="{{url('show_persons/blacks')}}">
                    <i class="fa fa-ban fa-2x"></i><br/>
                    <span>لیست سیاه</span>
                    <span class="label btn-danger">{{$black_count}}</span>
                </a>
            </p>
            <p  class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <a class="quick-btn img-hover-zoom" href="#">
                    <i class="fa fa-exclamation-triangle fa-2x"></i><br/>
                    <span>متخلفین</span>
                    <span class="label  btn btn-danger "></span>
                </a>
            </p>
        </div>
<style>

    .quick-btn {
        position: relative;
        display: inline-block;
        width: 90%;
        height: 80px;
        padding-top: 16px;
        margin: 10px;
        color: #444444;
        text-align: center;
        text-decoration: none;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
        -webkit-box-shadow: 0 0 0 1px #F8F8F8 inset, 0 0 0 1px #CCCCCC;
        box-shadow: 0 0 0 1px #F8F8F8 inset, 0 0 0 1px #CCCCCC;
    }

    .quick-btn .label {
        position: absolute;
        top: -15px;
        right: -15px;
        width: 60px;
        font-size: 18px;
    }

    .quick-btn:hover {                color: black;

        text-decoration: none;
    }

    .quick-btn i {
        transition: transform .5s ease;
    }

    .quick-btn:hover i {
        color: black;            transform: scale(1.3);
    }





    .gal-container{
        padding: 12px;
    }
    .gal-item{
        overflow: hidden;
        padding: 3px;
    }
    .gal-item .box{
        height: 350px;
        overflow: hidden;
    }
    .box img{
        height: 100%;
        width: 100%;
        object-fit:cover;
        -o-object-fit:cover;
    }
    .gal-item a:focus{
        outline: none;
    }
    .gal-item a:after{
        font-family: "Font Awesome 5 Free"; font-weight: 400; content: "\f007";
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.75);
        position: absolute;
        right: 3px;
        left: 3px;
        top: 3px;
        bottom: 3px;
        text-align: center;
        line-height: 350px;
        font-size: 30px;
        color: red;
        -webkit-transition: all 0.5s ease-in-out 0s;
        -moz-transition: all 0.5s ease-in-out 0s;
        transition: all 0.5s ease-in-out 0s;
    }
    .gal-item a:hover:after{
        opacity: 1;
    }
    .modal-open .gal-container .modal{
        background-color: rgba(0,0,0,0.4);
    }
    .modal-open .gal-item .modal-body{
        padding: 0px;
    }
    .modal-open .gal-item button.close{
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: #000;
        opacity: 1;
        color: #fff;
        z-index: 999;
        right: -12px;
        top: -12px;
        border-radius: 50%;
        font-size: 15px;
        border: 2px solid #fff;
        line-height: 25px;
        -webkit-box-shadow: 0 0 1px 1px rgba(0,0,0,0.35);
        box-shadow: 0 0 1px 1px rgba(0,0,0,0.35);
    }
    .modal-open .gal-item button.close:focus{
        outline: none;
    }
    .modal-open .gal-item button.close span{
        position: relative;
        top: -3px;
        font-weight: lighter;
        text-shadow:none;
    }
    .gal-container .modal-dialogue{
        width: 80%;
    }
    .gal-container .description{
        position: relative;
        height: 40px;
        top: -40px;
        padding: 10px 25px;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        text-align: left;
    }
    .gal-container .description h4{
        margin:0px;
        font-size: 15px;
        font-weight: 300;
        line-height: 20px;
    }
    .gal-container .modal.fade .modal-dialog {
        -webkit-transform: scale(0.1);
        -moz-transform: scale(0.1);
        -ms-transform: scale(0.1);
        transform: scale(0.1);
        top: 100px;
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }

    .gal-container .modal.fade.in .modal-dialog {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0);
        opacity: 1;
    }
    @media (min-width: 768px) {
        .gal-container .modal-dialog {
            width: 55%;
            margin: 50px auto;
        }
    }
    @media (max-width: 768px) {
        .gal-container .modal-content{
            height:250px;
        }
    }
    /* Footer Style */
    i.red{
        color:#BC0213;
    }
    .gal-container{
        padding-top :75px;
        padding-bottom:75px;
    }
    footer{
        font-family: 'Quicksand', sans-serif;
    }
    footer a,footer a:hover{
        color: #88C425;
    }
</style>

    @stop

