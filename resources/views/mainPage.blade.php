@extends('home')
@section('content')
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
        <div class="col-lg-8">
            <div class="row" style="    border-left: 10px solid transparent; ">
                <div class="col-lg-12"  style="-webkit-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
                 -moz-box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75);
                 box-shadow: 0px 2px 18px -5px rgba(0,0,0,0.75); background-color: white;line-height: 2;text-align: justify;padding: 5px;">
                    <img src="<?php echo "/img/1.jpg"; ?>" style="width: 100%;">
                    <h4 style="color:  #19B5FE;  margin-top: 10px;padding-right: 10px">بیانات رهبر معظم انقلاب در مورد ازدواج جوانان كه هنگام قرائت خطبه عقد ایراد فرموده اند:</h4>
                    <p style="padding-right: 25px;text-align: justify;padding-left: 10px;">


                        خدای متعال از زن و مرد تنها خوشش نمی‌آید، مخصوصا آن‌هایی كه جوانند و بار اولشان است. مخصوص جوان‌ها هم نیست. خدای متعال از زندگی مشترك و مزدوج خوشش می‌آید. آدم تنها، مرد تنها و زن تنها كه همـه عمر را به تنهایی می‌گذراند، از

                        اگر در زندگی محبت وجود داشت، سختی‌های بیرون خانه آسان خواهد شد. برای زن هم سختی ‌های داخل خانه آسان خواهد شد

                        دید اسلامی چیز مطلوبی نیست . مثل یك موجود بیگانه است در مجموعه پیكره انسانی. اسلام این طور خواسته كه خانواده، سلول حقیقی مجموعه پیكره جامعه باشد نه فرد تنها.

                    </p>

                </div>
            </div>
        </div>
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

                            <form action="signIn/auth" class="form-horizontal" id="frmloginusermodal" method="post" style="padding: 10px;"  >
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="username" style="text-align: right;" >ایمیل یا موبایل:</label>
                                    <div class="col-lg-8">
                                        <input  class="form-control" id="username" name="username" style="direction: ltr;" >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-lg-4" for="password"  style="text-align: right;" > رمز عبور:</label>
                                    <div class="col-lg-8">
                                        <input  class="form-control" id="pass" name="pass" type="password" style="direction: ltr;" >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-default btn-send pull-left btn_sign_in "><span ><i  class="fa fa-key"></i>&nbsp;</span>ورود به سایت</button>
                                    <a  class="btn btn-default btn-send btn_sign_up"><span ><i  class="fa fa-user-plus"></i>&nbsp;</span>ثبت نام  رایگان </a>
                                </div>
                                <div style="text-align: center;"> <a href=""><span ><i class="fa fa-question-circle"></i>&nbsp;</span>رمز عبور خود را فراموش کرده ام</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
