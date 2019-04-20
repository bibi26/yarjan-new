@extends('home')
@section('content')
    <div class="row">
        <div class=" col-lg-12">
            <div class="tab" role="tabpanel" style="background-color: white;">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="disabled"><a href="#Section1" aria-controls="home" role="tab">درباره
                            من</a></li>
                    <li role="presentation" class="disabled"><a href="#Section2" aria-controls="profile" role="tab">مشخصات
                            من</a></li>
                    <li role="presentation" class="disabled"><a href="#Section3" aria-controls="messages" role="tab">معیارهای
                            ازدواج</a></li>

                    <li role="presentation" class="disabled"><a href="#Section4" aria-controls="messages" role="tab">معیارهای
                            همسر</a></li>
                    <li role="presentation" class="disabled"><a href="#Section5" aria-controls="messages" role="tab">
                            آپلود تصویر</a></li>
                </ul>
                <div class="tab-content tabs" id="dv_sign">
                    @if(Session::has('error'))
                        <div class="alert oaerror danger" style="margin-top: 5px;">{{Session::get('error')}}</div>
                    @endif
                    @if($step==1)
                        @include('personInfo.step1')
                    @endif
                    @if($step==2)
                        @include('personInfo.step2')
                    @endif
                    @if($step==3)
                        @include('personInfo.step3')
                    @endif
                    @if($step==4)
                        @include('personInfo.step4')
                    @endif
                    @if($step==5)
                        @include('personInfo.step5')
                    @endif
                </div>
            </div>
        </div>
    </div>
    <script>
        function activaTab(tab) {
            $('.nav-tabs a[href="#' + tab + '"]').tab('show');
        }

        $(document).ready(function () {

            $('#Section1').tooltip({
                trigger: 'hover',
                placement: 'top',
                animate: true,
                delay: 500,
                container: 'body'
            });
            @if($step==1)
            activaTab('Section1');
            @endif
            @if($step==2)
            activaTab('Section2');
            {{--window.history.pushState("", "", "/newPersonInfo/");            @endif--}}
            @endif
            @if($step==3)
            activaTab('Section3');
            {{--window.history.pushState("", "", "/newPersonInfo/");            @endif--}}
            @endif
            @if($step==4)
            activaTab('Section4');
            {{--window.history.pushState("", "", "/newPersonInfo/");            @endif--}}
            @endif

        });
    </script>



    <style>
        .textInputError {
            border: 1px red solid;
        }

        .alertInputError {
            color: red;
        }

        .btn_forget_pass {
            border-radius: 0px;
            border: 1px solid #33e138;
            background: #33e138;
            color: #fff;
        }

        .btn_forget_pass:hover {
            border: 1px solid #33e138;
            background: #fff;
            color: #33e138;
            transition: background 0.5s;
        }

        .form-control {
            box-shadow: none;
            height: 35px;
            line-height: 20px;
        }

        .form-control:focus {
            box-shadow: none;
            border-color: #00bfff;
        }

        .form-control label {
            color: #000 !important;
        }

        .form-horizontal .control-label {
            text-align: right;
        }

        .requierd_field {
            color: red;
            font-size: 12px;
        }

        .tab {
            box-shadow: 0 3px 10px rgba(0, 0, 0, .3);
        }

        .tab .nav-tabs {
            border-bottom: 2px solid #00CCFF;
        }

        .tab .nav-tabs li {
            margin-bottom: 0px;
            margin-right: 0px;
        }

        .tab .nav-tabs li a {
            font-size: 14px;
            color: #808080;
            outline: none;
            margin-right: 0px;
            padding: 20px 25px;
            border-radius: 0;
            text-transform: uppercase;
        }

        .tab .nav-tabs li a:hover,
        .tab .nav-tabs li.active a {
            background: #00CCFF;
            color: #fff;
        }

        .tab .tab-content {
            color: #5a5c5d;
            padding: 20px;
        }

        @media only screen and (max-width: 480px) {
            .tab .nav-tabs > li {
                width: 100%;
            }
        }
    </style>
@stop


