@extends('home')
@section('content')
    <style>
        .form-group{
            border-bottom: 1px solid #00CCFF ;
        }
    </style>

    <div class="row" >
        <div class="col-lg-3 col-md-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="media">
                        <div align="center">
                            <img id="myImg" src="{{"../".$person['profile_image']}}" class="thumbnail img-responsive" src="" width="300px" height="300px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-9 col-md-9">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row " >
                        <div class="col-lg-4 col-md-4">
                            <div style="margin: 5px;"> <a href="" class="btn btn-default" style="width: 210px;text-align: right;"><i class="glyphicon glyphicon-envelope" style="color: #ff335a;"></i>&nbsp;ارسال پیام علاقه مندی (رایگان)</a></div>
                            <div style="margin: 5px;"><a href="" class="btn btn-default" style="width: 210px;text-align: right;"><span class="glyphicon glyphicon-heart " style="color: #ff335a;"></span>&nbsp;افزودن به علاقه مندی ها  </a></div>
                            <div style="margin: 5px;"><a href="" class="btn btn-default" style="width: 210px;text-align: right;"><span class="glyphicon glyphicon-exclamation-sign " style="color: #ff335a;"></span>&nbsp;گزارش تخلفات  </a></div>
                            <div style="margin: 5px;"> <a href="" class="btn btn-default" style="width: 210px;text-align: right;"><span class="glyphicon glyphicon-ban-circle " style="color: #ff335a;"></span>&nbsp;افزودن به لیست سیاه</a></div>

                        </div>
                        <div class="col-lg-8 col-md-8">
                            <div>
                                <div><small>کد شناسایی :</small>&nbsp;<b style="font-size: 18px;">{{$person['id']}}</b></div>
                                <div><small>آخرین ورود  :</small>&nbsp;<b style="font-size: 18px;">{{$person['last_visit']}}</b></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row" >
        <div class=" col-lg-12" >
            <div class="tab" role="tabpanel"  style="background-color: white;">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" ><a href="#Section1"  data-toggle="tab" role="tab" >درباره من</a></li>
                    <li role="presentation" ><a href="#Section2"  data-toggle="tab" role="tab" >مشخصات من</a></li>
                    <li role="presentation" ><a href="#Section3" data-toggle="tab" role="tab" >معیارهای ازدواج</a></li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content tabs" id="dv_sign">

                    <div role="tabpanel" class="tab-pane fade in active" id="Section1">


                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3 "  >نام :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val"> {{$person['fname']}}</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >سن :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val"> {{$person['age']}}</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >محل سکونت :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['provinces']['name']." - ".$person['cities']['name']}}</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >وضعیت شغل  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">@php echo jobStatus($person['job_status']) @endphp</div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >شغل  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val"> {{$person['job']}}</div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >وضعیت ازدواج  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">@php echo marriageStatus($person['marriage']) @endphp</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >تحصیلات :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val"> @php echo educationStatus($person['education']) @endphp</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >رشته تحصیلی :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['field']}}</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" >میزان درامد خانواده :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val"> @php echo incomeStatus($person['family_income']) @endphp</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" >میزان درامد  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val"> @php echo incomeStatus($person['my_income']) @endphp</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" > وضعیت مسکن  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val"> @php echo houseStatus($person['house']) @endphp</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" > وضعیت اتومبیل  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">@php echo houseStatus($person['car']) @endphp</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >قد  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['height']}}</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >وزن  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['weight']}}</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >رنگ پوست  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">@php echo houseStatus($person['skin_color']) @endphp</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >زیبایی - یک کمترین  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['face']}}</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3"  >تیپ - یک کمترین  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['style']}}</div>
                        </div>


                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3">  میزان اعقادات  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val"> @php echo beliefStatus($person['belief']) @endphp</div>
                        </div>



                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" >میزان درامد خانواده :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">@php echo incomeStatus($person['family_income']) @endphp</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" >میزان درامد  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">@php echo incomeStatus($person['my_income']) @endphp</div>
                        </div>


                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" > وضعیت سلامت  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  val">@php echo healthConditionStatus($person['health_condition']) @endphp</div>
                        </div>

                        <div class="form-group row ">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" >  درباره خودم  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9 alert alert-warning  val">{{$person['i_am']}}</div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-lg-2 col-md-2 col-sm-3" >  درباره همسرم  :</label>
                            <div class="col-lg-10 col-md-10 col-sm-9  alert alert-warning val">{{$person['you_are']}}</div>
                        </div>
                </div>

                <div role="tabpanel" class="tab-pane fade" id="Section2">

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >سن :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val"> <?php echo 's_age_from' . " تا " . 's_age_to'; ?></div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >محل سکونت :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val">
                            <?php $location = ""; ?>
                            <?php $location.= ('s_location_fellow_citizen') == "1" ? "همشهری" . " / " : ""; ?>
                            <?php $location.= ('s_location_fellow_province') == "1" ? " هم استانی" . " / " : ""; ?>
                            <?php $location.= ('s_location_abroad') == "1" ? "خارج از کشور" . " / " : ""; ?>
                            <?php $location.= ('s_location_homeland') == "1" ? "هم وطن" . " / " : ""; ?>
                            <?php $location.= ('s_location_homeland') == "1" ? "هم وطن" . " / " : ""; ?>
                            <?php echo $location != "" ? substr($location, 0, -2) : "" ?>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >محل سکونت :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val"> <?php echo 'province_name' . " - " . 'city_name'; ?></div>
                    </div>
                    <div class="form-group row">

                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  > وضعیت ازدواج :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val">
                            <?php $marriage = ""; ?>
                            <?php $marriage.= ('s_marriage_single') == "1" ? "مجرد" . " / " : ""; ?>
                            <?php $marriage.= ('s_marriage_deceased_spouse') == "1" ? "همسر فوت شده " . " / " : ""; ?>
                            <?php $marriage.= ('s_marriage_divorced') == "1" ? "طلاق گرفته" . " / " : ""; ?>
                            <?php echo $marriage != "" ? substr($marriage, 0, -2) : "" ?>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >  قصد مهاجرت به خارج :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val">
                            <?php echo 's_immigration' == "1" ? "داشته باشد" : "نداشته باشد" ?>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  > فرزند:</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val">
                            <?php echo 's_child' == "1" ? "داشته باشد" : "نداشته باشد" ?>
                        </div>
                    </div>


                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >قد :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val"> <?php echo 's_height_from' . " تا " . 's_height_to'; ?></div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >وزن :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val"> <?php echo 's_weight_from' . " تا " . 's_weight_to'; ?></div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >رنگ پوست :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val">
                            <?php $skin = ""; ?>
                            <?php $skin.= ('s_skin_white') == "1" ? "سفید" . " / " : ""; ?>
                            <?php $skin.= ('s_skin_bright_brunette') == "1" ? "سبزه روشن" . " / " : ""; ?>
                            <?php $skin.= ('s_skin_dark_brunette') == "1" ? "سبزه تیره" . " / " : ""; ?>
                            <?php $skin.= ('s_skin_black') == "1" ? "سیاه" . " / " : ""; ?>
                            <?php echo $skin != "" ? substr($skin, 0, -2) : "" ?>
                        </div>
                    </div>


                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >میزان درآمد:</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val"> <?php echo incomeStatus('s_income') ; ?></div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >وضعیت مسکن :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val">
                            <?php echo 's_house' == "1" ? "داشته باشد" : "نداشته باشد" ?>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  >وضعیت اتومبیل :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val">
                            <?php echo 's_car' == "1" ? "داشته باشد" : "نداشته باشد" ?>
                        </div>
                    </div>



                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  > تحصیلات:</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val"> <?php echo educationStatus('s_education_from')."&nbsp تا &nbsp;  ".educationStatus('s_education_to') ; ?></div>
                    </div>

                    <div class="form-group row">
                        <label class="control-label col-lg-2 col-md-2 col-sm-3"  > وضعیت اشتغال :</label>
                        <div class="col-lg-10 col-md-10 col-sm-9  val">
                            <?php echo 's_job_status' == "1" ? "داشته باشد" : "نداشته باشد" ?>
                        </div>
                    </div>

                </div>

                <div role="tabpanel" class="tab-pane fade" id="Section3">
                    4545
                </div>
            </div>
        </div>
    </div>
    </div>
    <style>
        .val{
            font-weight: bolder;
            color: #000;
        }
        .textInputError{
            border:1px red solid;
        }
        .alertInputError{
            color: red ;
        }
        .btn_forget_pass
        {
            border-radius: 0px;
            border:1px solid #33e138;
            background:#33e138;
            color:#fff;
        }
        .btn_forget_pass:hover
        {
            border:1px solid #33e138;
            background:#fff;
            color:#33e138;
            transition:background 0.5s;
        }
        .form-control{ box-shadow:none; height:35px;line-height: 20px;}
        .form-control:focus{ box-shadow:none; border-color:#00bfff;}
        .form-control label{ color: #000 !important;}
        .form-horizontal .control-label {
            text-align: right;
        }
        .requierd_field{
            color:red;
            font-size: 12px;
        }

        .tab{
            box-shadow:0 3px 10px rgba(0,0,0,.3);
        }
        .tab .nav-tabs{
            border-bottom:2px solid #00CCFF;
        }
        .tab .nav-tabs li{
            margin-bottom:0px;
            margin-right:0px;
        }
        .tab .nav-tabs li a {
            font-size:14px;
            color:#808080;
            outline:none;
            margin-right:0px;
            padding:20px 25px;
            border-radius:0;
            text-transform:uppercase;
        }
        .tab .nav-tabs li a:hover,
        .tab .nav-tabs li.active a{
            background:#00CCFF;
            color:#fff;
        }
        .tab .tab-content{
            color:#5a5c5d;
            padding: 20px;
        }
        @media only screen and (max-width: 480px){
            .tab .nav-tabs > li{ width:100%; }
        }

        fieldset.scheduler-border {
            border: 1px groove #ddd !important;
            padding: 0 1.4em 1.4em 1.4em !important;
            margin: 0 0 1.5em 0 !important;
            -webkit-box-shadow:  0px 0px 0px 0px #000;
            box-shadow:  0px 0px 0px 0px #000;
        }

        legend.scheduler-border {
            font-size: 1.2em !important;
            font-weight: bold !important;
            text-align: left !important;
            width:auto;
            padding:0 10px;
            border-bottom:none;
        }











        .card {

            transform:translate(-50%,-50%);
            width:300px;
            background:#fff;
            box-shadow:0 20px 50px rgba(0,0,0,.1);
            border-radius:10px;
            transition:0.5s;
        }
        .card:hover {
            box-shadow:0 30px 70px rgba(0,0,0,.2);
        }
        .card .box {
            position:absolute;
            top:50%;
            left:0;
            transform:translateY(-50%);
            text-align:center;
            padding:20px;
            box-sizing:border-box;
            width:100%;
        }
        .card .box .img {
            width:120px;
            height:120px;
            margin:0 auto;
            border-radius:50%;
            overflow:hidden;
        }
        .card .box .img img {
            width:100%;
            height:100%;
        }
        .card .box h2 {
            font-size:20px;
            color:#262626;
            margin:20px auto;
        }
        .card .box h2 span {
            font-size:14px;
            background:#e91e63;
            color:#fff;
            display:inline-block;
            padding:4px 10px;
            border-radius:15px;
        }
        .card .box p {
            color:#262626;
        }
        .card .box span {
            display:inline-flex;
        }
        .card .box ul {
            margin:0;
            padding:0;
        }
        .card .box ul li {
            list-style:none;
            float:left;
        }
        .card .box ul li a {
            display:block;
            color:#aaa;
            margin:0 10px;
            font-size:20px;
            transition:0.5s;
            text-align:center;
        }
        .card .box ul li:hover a {
            color:#e91e63;
            transform:rotateY(360deg);
        }
    </style>

    <script>
        function activaTab(tab) {
            $('.nav-tabs a[href="#' + tab + '"]').tab('show');
        }
        $(document).ready(function () {
            activaTab("Section1");
        });
    </script>
    <style>
        #myImg {
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }

        #myImg:hover {opacity: 0.7;}

        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
        }

        /* Modal Content (image) */
        .modal-content {
            margin: auto;
            display: block;
            width: 80%;
            max-width: 700px;
        }

        /* Caption of Modal Image */
        #caption {
            margin: auto;
            display: block;
            width: 80%;
            max-width: 700px;
            text-align: center;
            color: #ccc;
            padding: 10px 0;
            height: 150px;
        }

        /* Add Animation */
        .modal-content, #caption {
            -webkit-animation-name: zoom;
            -webkit-animation-duration: 0.6s;
            animation-name: zoom;
            animation-duration: 0.6s;
        }

        @-webkit-keyframes zoom {
            from {-webkit-transform:scale(0)}
            to {-webkit-transform:scale(1)}
        }

        @keyframes zoom {
            from {transform:scale(0)}
            to {transform:scale(1)}
        }

        /* The Close Button */
        .close {
            position: absolute;
            top: 15px;
            right: 35px;
            color: #f1f1f1;
            font-size: 40px;
            font-weight: bold;
            transition: 0.3s;
        }

        .close:hover,
        .close:focus {
            color: #bbb;
            text-decoration: none;
            cursor: pointer;
        }

        /* 100% Image Width on Smaller Screens */
        @media only screen and (max-width: 700px){
            .modal-content {
                width: 100%;
            }
        }






        .modal button.close {
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: #000;
            opacity: 1;
            color: #fff;
            z-index: 999;
            border-radius: 50%;
            font-size: 15px;
            border: 2px solid #fff;
            line-height: 25px;
            -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35);
        }

        .modal button.close:focus {
            outline: none;
        }

        .modal button.close span {
            position: relative;
            top: -3px;
            font-weight: lighter;
            text-shadow: none;
        }

    </style>
    </head>
    <body>


    <!-- The Modal -->
    <div id="myModal" class="modal">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">×</span></button>        <img class="modal-content" id="img01">
        <div id="caption"></div>
    </div>

    <script>
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    </script>


@stop

