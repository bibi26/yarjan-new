

<div class="row" style="border-top: 3px #00CCFF solid;box-shadow: 0 2px 3px rgba(0,0,0,.12);background-color: white;height: 52px !important;">
    <style>
        #top_menu li> a{
            color: #000;
        }
        #top_menu li> a:hover{
            color: #d73036;

        }
        #slide-nav .navbar-toggle:before {
            background-color: red;
        }
        .navbar-toggle {
        }

        .navbar .navbar-toggle .icon-bar {
            background-color: #000;
        }
        #slide-nav .navbar-toggle {
            cursor: pointer;
            position: relative;
            line-height: 0;
            float: right;
            margin: 0;
            width: 30px;
            height: 40px;
            padding: 10px 0 0 0;
            border: 0;
            background-color: transparent;                    }
        /* icon bar prettyup - optional */
        #slide-nav .navbar-toggle > .icon-bar {
            width: 100%;
            display: block;
            height: 3px;
            margin: 5px 0 0 0;
        }
        #slide-nav .navbar-toggle.slide-active .icon-bar {
            background: #00CCFF;
        }
        .navbar-header {
            position: relative
        }
        /* un fix the navbar when active so that all the menu items are accessible */
        .navbar.navbar-fixed-top.slide-active {
            position: relative
        }
        /* screw writing importants and shit, just stick it in max width since these classes are not shared between sizes */
        @media (max-width:767px) {
            #slide-nav .container {
                margin: 0!important;
                padding: 0!important;
                height:100%;
            }
            #slide-nav .navbar-header {
                margin: 0 auto;
                padding: 0 15px;
            }
            #slide-nav .navbar.slide-active {
                position: absolute;
                width: 40%;
                top: -1px;
                z-index: 1000;
            }
            #slide-nav #slidemenu {
                background: #f7f7f7;
                right: -100%;
                width: 40%;
                min-width: 0;
                position: absolute;
                padding-right: 0;
                z-index: 2;
                top: -8px;
                margin: 0;
            }
            #slide-nav #slidemenu .navbar-nav {
                min-width: 0;
                width: 100%;
                margin: 0;
            }
            #slide-nav #slidemenu .navbar-nav .dropdown-menu li a {
                min-width: 0;
                width: 40%;
                white-space: normal;
            }
            #slide-nav {
                border-top: 0
            }
            #slide-nav.navbar-inverse #slidemenu {
                background: #333;
            }
            /* this is behind the navigation but the navigation is not inside it so that the navigation is accessible and scrolls*/
            #navbar-height-col {
                position: fixed;
                top: 0;
                height: 100%;
                bottom:0;
                width: 40%;
                right:  -40%;
                background: #f7f7f7;
            }
            #navbar-height-col.inverse {
                background: #333;
                z-index: 1;
                border: 0;
            }
            #slide-nav .navbar-form {
                width: 100%;
                margin: 8px 0;
                text-align: center;
                overflow: hidden;
                /*fast clearfixer*/
            }
            #slide-nav .navbar-form .form-control {
                text-align: center
            }
            #slide-nav .navbar-form .btn {
                width: 100%
            }
        }
        @media (min-width:768px) {
            #page-content {
                right: 0!important
            }
            .navbar.navbar-fixed-top.slide-active {
                position: fixed
            }
            .navbar-header {
                right: 0!important
            }
        }



        .mega-dropdown {
            position: static !important;
            width:100%;
        }
        .mega-dropdown-menu {
            padding: 20px 0px;
            width: 350px;
            box-shadow: none;
            -webkit-box-shadow: none;
            margin-left:40px;
            margin-top:15px !important;

        }


        .mega-dropdown-menu:before {
            content: "";
            border-bottom: 15px solid #fff;
            border-right: 17px solid transparent;
            border-left: 17px solid transparent;
            position: absolute;
            top: -15px;
            left: 100px;
            z-index: 10;
        }
        .mega-dropdown-menu:after {
            content: "";
            border-bottom: 17px solid #ccc;
            border-right: 19px solid transparent;
            border-left: 19px solid transparent;
            position: absolute;
            top: -17px;
            left: 100px;
            z-index: 8;
        }
        .mega-dropdown-menu > li > ul {
            padding: 0;
            margin: 0;
        }
        .mega-dropdown-menu > li > ul > li {
            list-style: none;
        }
        .mega-dropdown-menu > li > ul > li > a {
            display: block;
            padding: 3px 20px;
            clear: both;
            font-weight: normal;
            line-height: 1.428571429;
            color: #999;
            white-space: normal;
        }
        .mega-dropdown-menu > li ul > li > a:hover,
        .mega-dropdown-menu > li ul > li > a:focus {
            text-decoration: none;
            color: #444;
            background-color: #f5f5f5;
        }
        .mega-dropdown-menu .dropdown-header {
            color: #428bca;
            font-size: 18px;
            font-weight:bold;
        }
        .mega-dropdown-menu form {
            margin:3px 20px;
        }
        .mega-dropdown-menu .form-group {
            margin-bottom: 3px;
        }
    </style>
    <div class="navbar " role="navigation" id="slide-nav" style="background-color: #FFFFFF;">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-toggle">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>

                <a href="#" class="navbar-right"><img src="{{asset('img/yarjan.png')}}"></a>
            </div>
            <div id="slidemenu">
                <form class="navbar-form navbar-right" role="form">
                    <!--            <div class="form-group">
                                  <input type="search" placeholder="search" class="form-control">
                                </div>
                                <button type="submit" class="btn btn-primary">Search</button>-->
                </form>

                <ul class="nav navbar-nav" id="top_menu">
                    <?php
                    if (!isset($_COOKIE['YARJAN']))
                    {
                        ?>
                        <li id="homeTopMenu" ><a  href="/"><span ><i style="color: #00CCFF;" class="fa fa-home"></i>&nbsp;</span>صفحه نخست</a></li>
                        <li id="rulesMenu"><a href="<?php echo "" . 'rules'; ?>"><span ><i style="color: #00CCFF;" class="fa fa-balance-scale"></i>&nbsp;</span>قوانین</a></li>
                        <li><a href="#"><span ><i style="color: #00CCFF;" class="fa fa-check-square"></i>&nbsp;</span>امکانات</a></li>
                        <li id="contactTopMenu" ><a href="<?php echo "" . 'contactUs'; ?>"><span ><i style="color: #00CCFF;" class="fa fa-envelope"></i>&nbsp;</span>تماس با ما</a></li>
                        <li id="aboutTopMenu"><a href="<?php echo "" . 'about'; ?>"><span ><i style="color: #00CCFF;" class="fa fa-question-circle"></i>&nbsp;</span>درباه ما</a></li>
                        <li ><a href="<?php echo 'questionnaire'; ?>"><span ><i style="color: #00CCFF;" class="fa fa-question-circle"></i>&nbsp;</span> پرسشنامه</a></li>
                        <!--                   <li class="dropdown">
                                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Candidates <b class="glyphicon sm-glyph glyphicon-chevron-down"></b></a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a href="#">Link 1</a></li>
                                                                    <li><a href="#">Link 2</a></li>
                                                                    <li><a href="#">Link 3</a></li>
                                                                    <li><a href="#">Link 4</a></li>
                                                                    <li><a href="#">Link 5</a></li>
                                                                </ul>
                                                            </li>-->
                        <?php
                    }
                    else
                    {
                        ?>
                        <li id="signUpTopMenu"><a href="<?php echo "" . 'signUp'; ?>" style="color:#000;"><span ><i style="color: #00CCFF;" class="fa fa-user-plus"></i>&nbsp;</span>ثبت نام</a></li>

                        <?php
                    }
                    ?>
                </ul>
                <ul class="nav navbar-nav navbar-left" >

                    @if (Cookie::get('LOGEDIN') == false)   
                    <li id="signInTopMenu"><a href="signIn" style="color:#000;"><span ><i style="color: #00CCFF;" class="fa fa-key"></i>&nbsp;</span></span>ورود</a></li>
                    <li id="signUpTopMenu"><a href="signUp" style="color:#000;"><span ><i style="color: #00CCFF;" class="fa fa-user-plus"></i>&nbsp;</span>ثبت نام</a></li>
                    @elseif(Cookie::get('LOGEDIN') == true) 
                    <?php
                    $username =user()['username'];
                    ?>
                    <li class="dropdown mega-dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" style="margin:0px;"><img style="width: 25px;height: 25px;" src="<?php echo "/img/nobody_m.original.jpg"; ?>" /> <i class="fa fa-caret-down"></i></a>

                        <ul class="dropdown-menu mega-dropdown-menu row">
                            <li class="col-lg-4">
                                <img src="<?php echo "/img/nobody_m.original.jpg"; ?>" />

                            </li>
                            <li class="col-lg-8">
                                <ul>
                                    <li class="dropdown-header"><?php echo $username; ?></li>
                                    <li id="signUpTopMenu4"><a href="<?php echo "" . 'signUp'; ?>" ><span ><i style="color: #00CCFF;" class="fa fa-arrow-left"></i>&nbsp;</span>اطلاعات حساب کاربری</a></li>
                                    <li id="signUpTopMenu5"><a href="<?php echo "" . 'signUp'; ?>" ><span ><i style="color: #00CCFF;" class="fa fa-arrow-left"></i>&nbsp;</span>ویرایش پروفایل</a></li>
                                    <li id="signUpTopMenu6"><a href="<?php echo "" . 'signUp'; ?>" ><span ><i style="color: #00CCFF;" class="fa fa-arrow-left"></i>&nbsp;</span>مشاهده پروفایل</a></li>
                                    <li id="signUpTopMenu7"><a href="<?php echo "" . 'signUp'; ?>" ><span ><i style="color: #00CCFF;" class="fa fa-arrow-left"></i>&nbsp;</span>احراز هویت</a></li>
                                    <li id="signUpTopMenu8"><a href="<?php echo "" . 'signUp'; ?>" ><span ><i style="color: #00CCFF;" class="fa fa-arrow-left"></i>&nbsp;</span>انصراف/ ثبت ازدواج</a></li>

                                    <li class="divider"></li>
                                    <li class="dropdown-header" id="signUpTopMenu9"><a href="<?php echo "" . 'signOut'; ?>" ><span ><i style="color: #00CCFF;" class="fa fa-times"></i>&nbsp;</span>خروج</a></li>

                                    <!--<li><a href="#">Good Typography</a></li>-->
                                </ul>
                            </li>

                        </ul>

                    </li>
                    @endif

                </ul>
            </div>
        </div>
    </div>
</div>
