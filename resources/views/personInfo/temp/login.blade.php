@extends('welcome')
@section('content')
    <script>
        $(document).ready(function () {
            $(".nav li").removeClass("active");
            $('#signInTopMenu').addClass('active');

        });</script>
    <style>
        .contact-form .textarea{ min-height:220px; resize:none;}
        .form-control{ box-shadow:none; height:49px;}
        .form-control:focus{ box-shadow:none; border-color:#00bfff;}
        .btn_sign_in
        {
            border-radius: 0px;
            border:1px solid #00bfff;
            background:#00bfff;
            color:#fff;
        }
        .btn_sign_in:hover
        {
            border:1px solid #00bfff;
            background:#fff;
            color:#00bfff;
            transition:background 0.5s;
        }
        .btn_sign_up
        {
            border-radius: 0px;
            border:1px solid #FFA500;
            background:#FFA500;
            color:#fff;
        }
        .btn_sign_up:hover
        {
            border:1px solid #FFA500;
            background:#fff;
            color:#FFA500;
            transition:background 0.5s;
        }
    </style>
    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
            <div class="row"  style="-webkit-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             -moz-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
             box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;">
                <div  class="col-lg-12">
                    <div class="row">
                        <div  class="col-lg-12" style="height: 40px;background-color: #00bfff;text-align: center;padding-top: 10px;">
                            <span style="font-weight: bold;color: white;font-size: 18px;">لطفا وارد شوید</span>
                        </div>
                    </div>
                    <div class="row"  >
                        <div  class="col-lg-12"  >
                            <?php
                            if (isset($err))
                            {
                                echo "<div style='text-align:center;color: red; font-size: 14px;height: 40px;padding-top: 10px;'>{$err}</div>";
                            }
                            else
                            {
                                echo "<div style='text-align:center;color: red; font-size: 14px;height: 40px;padding-top: 10px;'></div>";
                            }
                            ?>
                                <form class="form-horizontal" style="padding: 10px;" role="form">
                                    <div class="form-group">

                                    <label class="control-label col-lg-4" for="username" style="text-align: right;" >ایمیل یا موبایل:</label>
                                <div class="col-lg-8">
                                    <input  class="form-control  <?php if (isset($err_username))  echo 'textInputError'; else echo ''; ?>" id="username" name="username" value=""  style="direction: ltr;" >
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-lg-4" for="pass"  style="text-align: right;" > رمز عبور:</label>
                                <div class="col-lg-8">
                                    <input  class="form-control <?php if (isset($err_pass))  echo 'textInputError'; else echo ''; ?>" id="pass" name="pass" type="password"  style="direction: ltr;" >
                                </div>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-default btn-send pull-left btn_sign_in "><span ><i  class="fa fa-key"></i>&nbsp;</span>ورود به سایت</button>
                                <a  class="btn btn-default btn-send btn_sign_up" href="<?php echo 'signUp'; ?>"><span ><i  class="fa fa-user-plus"></i>&nbsp;</span>ثبت نام  رایگان </a>                            </div>
                            <div style="text-align: center;"> <a href="<?php echo  'forgetPass'; ?>"><span ><i class="fa fa-question-circle"></i>&nbsp;</span>رمز عبور خود را فراموش کرده ام</a></div>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4"></div>
    </div>

    <style>
        .textInputError{
            border:1px red solid;
        }
        .alertInputError{
            color: red ;
        }

    </style>
@stop
