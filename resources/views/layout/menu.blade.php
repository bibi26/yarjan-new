<div class="row"
     style="border-top: 3px #00CCFF solid;box-shadow: 0 2px 3px rgba(0,0,0,.12);background-color: white;height: 52px !important;">


    <nav class="navbar navbar-default" id="slide-nav" style="background-color: #FFFFFF;">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="#"><img src="/img/yarjan.png"></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav" id="top_menu">
                    <?php
                    if (!isset($_COOKIE['YARJAN']))
                    {
                    ?>
                    <li id="homeTopMenu"><a href="/"><span><i style="color: #00CCFF;"
                                                              class="fa fa-home"></i>&nbsp;</span>صفحه نخست</a></li>
                    <li id="rulesMenu"><a href="<?php echo "" . 'rules'; ?>"><span><i style="color: #00CCFF;"
                                                                                      class="fa fa-balance-scale"></i>&nbsp;</span>قوانین</a>
                    </li>
                    <li><a href="#"><span><i style="color: #00CCFF;" class="fa fa-check-square"></i>&nbsp;</span>امکانات</a>
                    </li>
                    <li id="contactTopMenu"><a href="{{url('contactUs')}}"><span><i style="color: #00CCFF;"
                                                                                    class="fa fa-comment"></i>&nbsp;</span>تماس
                            با ما</a></li>
                    <li id="aboutTopMenu"><a href="<?php echo "" . 'about'; ?>"><span><i style="color: #00CCFF;"
                                                                                         class="fa fa-question-circle"></i>&nbsp;</span>درباه
                            ما</a></li>
                    <li><a href="{{url('message/all')}}"><span><i style="color: #00CCFF;"
                                                                          class="fa fa-envelope"></i>&nbsp;</span>
                            پیام ها</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i style="color: #00CCFF;"
                                                                                       class="fa fa-caret-down"></i>&nbsp;جستجو
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="{{url('show_persons')}}">کاربران</a></li>
                            <li style="border-bottom: 1px solid #00aced;"></li>
                            <li><a href="{{url('show_persons/online')}}">کاربران آنلاین</a></li>
                        </ul>
                    </li>
                        <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i style="color: #00CCFF;"
                                                                                       class="fa fa-caret-down"></i>&nbsp;ابزارها
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="{{url('show_persons/visits')}}">بازدیدکنندگان من</a></li>
                            <li style="border-bottom: 1px solid #00aced;"></li>
                            <li><a href="{{url('show_persons/favorites')}}">علاقه مندی ها من</a></li>
                            <li style="border-bottom: 1px solid #00aced;"></li>
                            <li><a href="{{url('show_persons/blacks')}}">لیست سیاه من</a></li>
                            {{--<li style="border-bottom: 1px solid #00aced;"></li>--}}
                            {{--<li><a href="{{url('blacks')}}">متخلفین مرتبط با من</a></li>--}}
                        </ul>
                    </li>
                    <?php
                    }
                    else
                    {
                    ?>
                    <li id="signUpTopMenu"><a href="<?php echo "" . 'signUp'; ?>" style="color:#000;"><span><i
                                    style="color: #00CCFF;" class="fa fa-user-plus"></i>&nbsp;</span>ثبت نام</a></li>

                    <?php
                    }


                    ?>
                </ul>
                <ul class="nav navbar-nav navbar-left">

                    @if (Cookie::get('LOGEDIN') == false)
                        <li id="signInTopMenu"><a href="{{url('signIn')}}" style="color:#000;"><span><i
                                        style="color: #00CCFF;" class="fa fa-key"></i>&nbsp;</span></span>ورود</a></li>
                        <li id="signUpTopMenu"><a href="{{url('signUp')}}" style="color:#000;"><span><i
                                        style="color: #00CCFF;" class="fa fa-user-plus"></i>&nbsp;</span>ثبت نام</a>
                        </li>
                    @elseif(Cookie::get('LOGEDIN') == true)
                        <?php
                        $username = user()['username'];
                        ?>
                        <li class="dropdown mega-dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="margin:0px;"><img
                                    style="width: 25px;height: 25px;"
                                    src="<?php echo "/img/nobody_m.original.jpg"; ?>"/> <i class="fa fa-caret-down"></i></a>

                            <ul class="dropdown-menu mega-dropdown-menu row">
                                <li class="col-lg-4">
                                    <img src="<?php echo "/img/nobody_m.original.jpg"; ?>"/>

                                </li>
                                <li class="col-lg-8">
                                    <ul>
                                        <li class="dropdown-header"><?php echo $username; ?></li>
                                        <li id="signUpTopMenu4"><a href="<?php echo "" . 'signUp'; ?>"><span><i
                                                        style="color: #00CCFF;"
                                                        class="fa fa-arrow-left"></i>&nbsp;</span>اطلاعات حساب
                                                کاربری</a></li>
                                        <li id="signUpTopMenu5"><a href="<?php echo "" . 'signUp'; ?>"><span><i
                                                        style="color: #00CCFF;"
                                                        class="fa fa-arrow-left"></i>&nbsp;</span>ویرایش پروفایل</a>
                                        </li>
                                        <li id="signUpTopMenu6"><a href="<?php echo "" . 'signUp'; ?>"><span><i
                                                        style="color: #00CCFF;"
                                                        class="fa fa-arrow-left"></i>&nbsp;</span>مشاهده پروفایل</a>
                                        </li>
                                        <li id="signUpTopMenu7"><a href="<?php echo "" . 'signUp'; ?>"><span><i
                                                        style="color: #00CCFF;"
                                                        class="fa fa-arrow-left"></i>&nbsp;</span>احراز هویت</a></li>
                                        <li id="signUpTopMenu8"><a href="<?php echo "" . 'signUp'; ?>"><span><i
                                                        style="color: #00CCFF;"
                                                        class="fa fa-arrow-left"></i>&nbsp;</span>انصراف/ ثبت ازدواج</a>
                                        </li>

                                        <li class="divider"></li>
                                        <li class="dropdown-header" id="signUpTopMenu9"><a
                                                href="{{url('signOut')}}"><span><i style="color: #00CCFF;"
                                                                                   class="fa fa-times"></i>&nbsp;</span>خروج</a>
                                        </li>

                                        <!--<li><a href="#">Good Typography</a></li>-->
                                    </ul>
                                </li>

                            </ul>

                        </li>
                    @endif

                </ul>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</div>
