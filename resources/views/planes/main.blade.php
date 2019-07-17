@extends('home')
@section('content')
    <script>
        @if($errors->first('package') || $errors->first('sms'))
        notify('danger','لطفا یکی از بسته های زیر را انتخاب کنید' );
        @endif
    </script>
    @include('partials.alerts')
    <div class="row">
        <div class="col-lg-12 ">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                مرحله اول - بسته اشتراک ویژه
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            @if($step==1)
                                @include('planes.step1')
                            @endif
                        </div>
                    </div>
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                مرحله دوم - بسته پیامک
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                            @if($step==2)
                                @include('planes.step2')
                            @endif                        </div>
                    </div>
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                مرحله سوم - پرداخت
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="headingThree">
                        <div class="panel-body">
                            @if($step==3)
                                @include('planes.step3')
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <style>

        label {
            padding: 15px;
            background-color: rgba(0, 127, 255, 0.07) !important;
        }

        .frb-group label {
            padding-right: 50px;
        }

        .frb ~ .frb {
            margin-top: 10px;
        }

        .frb input[type="radio"]:empty,
        .frb input[type="checkbox"]:empty {
            display: none;
        }

        .frb input[type="radio"] ~ label:before,
        .frb input[type="checkbox"] ~ label:before {
            font-family: Font Awesome\ 5 Free;
            content: '\f0c8';
            position: absolute;
            top: 50%;
            margin-top: -16px;
            right: 15px;
            font-size: 22px;

        }

        .frb input[type="radio"]:checked ~ label:before,
        .frb input[type="checkbox"]:checked ~ label:before {
            content: '\f14a';
        }

        .frb input[type="radio"] ~ label,
        .frb input[type="checkbox"] ~ label {
            position: relative;
            cursor: pointer;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f2f2f2;
        }

        .frb input[type="radio"] ~ label:focus,
        .frb input[type="radio"] ~ label:hover,
        .frb input[type="checkbox"] ~ label:focus,
        .frb input[type="checkbox"] ~ label:hover {
            box-shadow: 0px 0px 3px #333;
        }

        .frb input[type="radio"]:checked ~ label,
        .frb input[type="checkbox"]:checked ~ label {
            color: #fafafa;
        }

        .frb input[type="radio"]:checked ~ label,
        .frb input[type="checkbox"]:checked ~ label {
            background-color: #f2f2f2 !important;
        }

        .frb.frb-default input[type="radio"]:checked ~ label,
        .frb.frb-default input[type="checkbox"]:checked ~ label {
            color: #333;
        }

        .frb.frb-primary input[type="radio"]:checked ~ label,
        .frb.frb-primary input[type="checkbox"]:checked ~ label {
            background-color: #337ab7 !important;
        }

        .frb.frb-success input[type="radio"]:checked ~ label,
        .frb.frb-success input[type="checkbox"]:checked ~ label {
            background-color: #5cb85c !important;
        }

        .frb.frb-info input[type="radio"]:checked ~ label,
        .frb.frb-info input[type="checkbox"]:checked ~ label {
            background-color: #5bc0de;
        }

        .frb.frb-warning input[type="radio"]:checked ~ label,
        .frb.frb-warning input[type="checkbox"]:checked ~ label {
            background-color: #f0ad4e !important;
        }

        .frb.frb-danger input[type="radio"]:checked ~ label,
        .frb.frb-danger input[type="checkbox"]:checked ~ label {
            background-color: #d9534f !important;
        }

        .frb input[type="radio"]:empty ~ label span,
        .frb input[type="checkbox"]:empty ~ label span {
            display: inline-block;
        }

        .frb input[type="radio"]:empty ~ label span.frb-title,
        .frb input[type="checkbox"]:empty ~ label span.frb-title {
            font-size: 16px;
            font-weight: 700;
            margin: 5px 5px 5px 50px;
        }

        .frb input[type="radio"]:empty ~ label span.frb-description,
        .frb input[type="checkbox"]:empty ~ label span.frb-description {
            font-weight: normal;
            font-style: italic;
            color: #999;
            margin: 5px 5px 5px 50px;
        }

        .frb input[type="radio"]:empty:checked ~ label span.frb-description,
        .frb input[type="checkbox"]:empty:checked ~ label span.frb-description {
            color: #fafafa;
        }

        .frb.frb-default input[type="radio"]:empty:checked ~ label span.frb-description,
        .frb.frb-default input[type="checkbox"]:empty:checked ~ label span.frb-description {
            color: #999;
        }
    </style>
@stop

