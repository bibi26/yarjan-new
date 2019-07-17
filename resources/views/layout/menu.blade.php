<script>
    (function () {
        var __bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        };

        (function ($, window) {
            var Offcanvas, OffcanvasDropdown, OffcanvasTouch, transformCheck;
            OffcanvasDropdown = (function () {
                function OffcanvasDropdown(element) {
                    this.element = element;
                    this._clickEvent = __bind(this._clickEvent, this);
                    this.element = $(this.element);
                    this.dropdown = this.element.parent().find(".dropdown-menu");
                    this.element.on('click', this._clickEvent);
                }

                OffcanvasDropdown.prototype._clickEvent = function (e) {
                    if (!this.dropdown.hasClass('shown')) {
                        e.preventDefault();
                    }
                    this.dropdown.toggleClass("shown");
                    return this.element.parent().toggleClass('active');
                };

                return OffcanvasDropdown;

            })();
            OffcanvasTouch = (function () {
                function OffcanvasTouch(button, element, location, offcanvas) {
                    this.button = button;
                    this.element = element;
                    this.location = location;
                    this.offcanvas = offcanvas;
                    this._getFade = __bind(this._getFade, this);
                    this._getCss = __bind(this._getCss, this);
                    this._touchEnd = __bind(this._touchEnd, this);
                    this._touchMove = __bind(this._touchMove, this);
                    this._touchStart = __bind(this._touchStart, this);
                    this.endThreshold = 130;
                    this.startThreshold = this.element.hasClass('navbar-offcanvas-right') ? $("body").outerWidth() - 60 : 20;
                    this.maxStartThreshold = this.element.hasClass('navbar-offcanvas-right') ? $("body").outerWidth() - 20 : 60;
                    this.currentX = 0;
                    this.fade = this.element.hasClass('navbar-offcanvas-fade') ? true : false;
                    $(document).on("touchstart", this._touchStart);
                    $(document).on("touchmove", this._touchMove);
                    $(document).on("touchend", this._touchEnd);
                }

                OffcanvasTouch.prototype._touchStart = function (e) {
                    this.startX = e.originalEvent.touches[0].pageX;
                    return this.element.height($(window).outerHeight());
                };

                OffcanvasTouch.prototype._touchMove = function (e) {
                    var x;
                    if ($(e.target).parents('.navbar-offcanvas').length > 0) {
                        return true;
                    }
                    if (this.startX > this.startThreshold && this.startX < this.maxStartThreshold) {
                        e.preventDefault();
                        x = e.originalEvent.touches[0].pageX - this.startX;
                        x = this.element.hasClass('navbar-offcanvas-right') ? -x : x;
                        if (Math.abs(x) < this.element.outerWidth()) {
                            this.element.css(this._getCss(x));
                            return this.element.css(this._getFade(x));
                        }
                    } else if (this.element.hasClass('in')) {
                        e.preventDefault();
                        x = e.originalEvent.touches[0].pageX + (this.currentX - this.startX);
                        x = this.element.hasClass('navbar-offcanvas-right') ? -x : x;
                        if (Math.abs(x) < this.element.outerWidth()) {
                            this.element.css(this._getCss(x));
                            return this.element.css(this._getFade(x));
                        }
                    }
                };

                OffcanvasTouch.prototype._touchEnd = function (e) {
                    var end, x;
                    if ($(e.target).parents('.navbar-offcanvas').length > 0) {
                        return true;
                    }
                    x = e.originalEvent.changedTouches[0].pageX;
                    end = this.element.hasClass('navbar-offcanvas-right') ? Math.abs(x) > (this.endThreshold + 50) : x < (this.endThreshold + 50);
                    if (this.element.hasClass('in') && end) {
                        this.currentX = 0;
                        this.element.removeClass('in').css(this._clearCss());
                        this.button.removeClass('is-open');
                    } else if (Math.abs(x - this.startX) > this.endThreshold && this.startX > this.startThreshold && this.startX < this.maxStartThreshold) {
                        this.currentX = this.element.hasClass('navbar-offcanvas-right') ? -this.element.outerWidth() : this.element.outerWidth();
                        this.element.toggleClass('in').css(this._clearCss());
                        this.button.toggleClass('is-open');
                    } else {
                        this.element.css(this._clearCss());
                    }
                    return this.offcanvas.bodyOverflow();
                };

                OffcanvasTouch.prototype._getCss = function (x) {
                    x = this.element.hasClass('navbar-offcanvas-right') ? -x : x;
                    return {
                        "-webkit-transform": "translate3d(" + x + "px, 0px, 0px)",
                        "-webkit-transition-duration": "0s",
                        "-moz-transform": "translate3d(" + x + "px, 0px, 0px)",
                        "-moz-transition": "0s",
                        "-o-transform": "translate3d(" + x + "px, 0px, 0px)",
                        "-o-transition": "0s",
                        "transform": "translate3d(" + x + "px, 0px, 0px)",
                        "transition": "0s"
                    };
                };

                OffcanvasTouch.prototype._getFade = function (x) {
                    if (this.fade) {
                        return {
                            "opacity": x / this.element.outerWidth()
                        };
                    } else {
                        return {};
                    }
                };

                OffcanvasTouch.prototype._clearCss = function () {
                    return {
                        "-webkit-transform": "",
                        "-webkit-transition-duration": "",
                        "-moz-transform": "",
                        "-moz-transition": "",
                        "-o-transform": "",
                        "-o-transition": "",
                        "transform": "",
                        "transition": "",
                        "opacity": ""
                    };
                };

                return OffcanvasTouch;

            })();
            window.Offcanvas = Offcanvas = (function () {
                function Offcanvas(element) {
                    var t, target;
                    this.element = element;
                    this.bodyOverflow = __bind(this.bodyOverflow, this);
                    this._sendEventsAfter = __bind(this._sendEventsAfter, this);
                    this._sendEventsBefore = __bind(this._sendEventsBefore, this);
                    this._documentClicked = __bind(this._documentClicked, this);
                    this._clicked = __bind(this._clicked, this);
                    this._navbarHeight = __bind(this._navbarHeight, this);
                    target = this.element.attr('data-target') ? this.element.attr('data-target') : false;
                    if (target) {
                        this.target = $(target);
                        if (this.target.length && !this.target.hasClass('js-offcanas-done')) {
                            this.element.addClass('js-offcanvas-has-events');
                            this.location = this.target.hasClass("navbar-offcanvas-right") ? "right" : "left";
                            this.target.addClass(transform ? "offcanvas-transform js-offcanas-done" : "offcanvas-position js-offcanas-done");
                            this.target.data('offcanvas', this);
                            this.element.on("click", this._clicked);
                            this.target.on('transitionend', (function (_this) {
                                return function () {
                                    if (_this.target.is(':not(.in)')) {
                                        return _this.target.height('');
                                    }
                                };
                            })(this));
                            $(document).on("click", this._documentClicked);
                            if (this.target.hasClass('navbar-offcanvas-touch')) {
                                t = new OffcanvasTouch(this.element, this.target, this.location, this);
                            }
                            this.target.find(".dropdown-toggle").each(function () {
                                var d;
                                return d = new OffcanvasDropdown(this);
                            });
                        }
                    } else {
                        console.warn('Offcanvas: `data-target` attribute must be present.');
                    }
                }

                Offcanvas.prototype._navbarHeight = function () {
                    if (this.target.is('.in')) {
                        return this.target.height($(window).outerHeight());
                    }
                };

                Offcanvas.prototype._clicked = function (e) {
                    e.preventDefault();
                    this._sendEventsBefore();
                    $(".navbar-offcanvas").not(this.target).removeClass('in');
                    this.target.toggleClass('in');
                    this.element.toggleClass('is-open');
                    this._navbarHeight();
                    return this.bodyOverflow();
                };

                Offcanvas.prototype._documentClicked = function (e) {
                    var clickedEl;
                    clickedEl = $(e.target);
                    if (!clickedEl.hasClass('offcanvas-toggle') && clickedEl.parents('.offcanvas-toggle').length === 0 && clickedEl.parents('.navbar-offcanvas').length === 0 && !clickedEl.hasClass('navbar-offcanvas')) {
                        if (this.target.hasClass('in')) {
                            e.preventDefault();
                            this._sendEventsBefore();
                            this.target.removeClass('in');
                            this.element.removeClass('is-open');
                            this._navbarHeight();
                            return this.bodyOverflow();
                        }
                    }
                };

                Offcanvas.prototype._sendEventsBefore = function () {
                    if (this.target.hasClass('in')) {
                        return this.target.trigger('show.bs.offcanvas');
                    } else {
                        return this.target.trigger('hide.bs.offcanvas');
                    }
                };

                Offcanvas.prototype._sendEventsAfter = function () {
                    if (this.target.hasClass('in')) {
                        return this.target.trigger('shown.bs.offcanvas');
                    } else {
                        return this.target.trigger('hidden.bs.offcanvas');
                    }
                };

                Offcanvas.prototype.bodyOverflow = function () {
                    if (this.target.is('.in')) {
                        $('body').addClass('offcanvas-stop-scrolling');
                    } else {
                        $('body').removeClass('offcanvas-stop-scrolling');
                    }
                    return this._sendEventsAfter();
                };

                return Offcanvas;

            })();
            transformCheck = (function (_this) {
                return function () {
                    var asSupport, el, regex, translate3D;
                    el = document.createElement('div');
                    translate3D = "translate3d(0px, 0px, 0px)";
                    regex = /translate3d\(0px, 0px, 0px\)/g;
                    el.style.cssText = "-webkit-transform: " + translate3D + "; -moz-transform: " + translate3D + "; -o-transform: " + translate3D + "; transform: " + translate3D;
                    asSupport = el.style.cssText.match(regex);
                    return _this.transform = asSupport.length != null;
                };
            })(this);
            return $(function () {
                transformCheck();
                $('[data-toggle="offcanvas"]').each(function () {
                    var oc;
                    return oc = new Offcanvas($(this));
                });
                $(window).on('resize', function () {
                    return $('.navbar-offcanvas.in').each(function () {
                        return $(this).height('').removeClass('in');
                    });
                });
                return $('.offcanvas-toggle').each(function () {
                    return $(this).on('click', function (e) {
                        var el, selector;
                        if (!$(this).hasClass('js-offcanvas-has-events')) {
                            selector = $(this).attr('data-target');
                            el = $(selector);
                            if (el) {
                                el.height('');
                                el.removeClass('in');
                                return $('body').css({
                                    overflow: '',
                                    position: ''
                                });
                            }
                        }
                    });
                });
            });
        })(window.jQuery, window);

    }).call(this);
</script>
@include('personInfo.search')

<header>
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                {{--<a class="navbar-brand" href="http://themeyab.com">ThemeYab.com</a>--}}
                <a href="#"><img src="{{asset('img/yarjan.png')}}"></a>

                <button type="button" class="navbar-toggle offcanvas-toggle pull-right" data-toggle="offcanvas"
                        data-target="#js-bootstrap-offcanvas" style="float:left;">
                    <span class="sr-only">Toggle navigation</span>
                    <span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </span>
                </button>
            </div>
            <div class="navbar-offcanvas navbar-offcanvas-touch" id="js-bootstrap-offcanvas">
                <ul class="nav navbar-nav">
                    <li id="homeTopMenu" class="active">
                        <a href="/"><span><i style="color: #00CCFF;" class="fa fa-home"></i>&nbsp;</span>صفحه
                            نخست</a>
                    </li>
                    <li id="rulesMenu"><a href="<?php echo "" . 'rules'; ?>"><span><i style="color: #00CCFF;"
                                                                                      class="fa fa-balance-scale"></i>&nbsp;</span>قوانین</a>
                    </li>
                    <li><a href="#"><span><i style="color: #00CCFF;" class="fa fa-check-square"></i>&nbsp;</span>امکانات</a>
                    <li><a href="#" data-toggle="modal"
                           data-target="#searchPersons"><span><i style="color: #00CCFF;" class="fa fa-check-square"></i>&nbsp;</span>جستجو</a>
                    </li>
                    <li id="contactTopMenu"><a href="{{url('contactUs')}}"><span><i style="color: #00CCFF;"
                                                                                    class="fa fa-comment"></i>&nbsp;</span>تماس
                            با ما</a></li>
                    <li id="aboutTopMenu"><a href="<?php echo "" . 'about'; ?>"><span><i style="color: #00CCFF;"
                                                                                         class="fa fa-question-circle"></i>&nbsp;</span>درباه
                            ما</a></li>
                    <li><a href="{{url('conversation/all')}}"><span><i style="color: #00CCFF;"
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
                    @if(Cookie::get('LOGEDIN') == true)
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i style="color: #00CCFF;" class="fa fa-caret-down"></i>&nbsp;مدیر
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="{{route('contactus.mngView')}}">لیست تماس با ما</a></li>
                            <li style="border-bottom: 1px solid #00aced;"></li>
                            <li><a href="{{route('usersMng')}}">لیست کاربران</a></li>
                        </ul>
                    </li>
                    @endif
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i style="color: #00CCFF;" class="fa fa-caret-down"></i>&nbsp;ابزارها
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="{{url('show_persons/visits')}}">بازدیدکنندگان من</a></li>
                            <li style="border-bottom: 1px solid #00aced;"></li>
                            <li><a href="{{url('show_persons/favorites')}}">علاقه مندی ها من</a></li>
                            <li style="border-bottom: 1px solid #00aced;"></li>
                            <li><a href="{{url('show_persons/blacks')}}">لیست سیاه من</a></li>
                            {{--<li style="border-bottom: 1px solid #00aced;"></li>--}}
                            {{--<li><a href="{{url('blacks')}}">متخلفین مرتبط با من</a></li>--}}
                        </ul>
                    </li>
                    {{--<li class="dropdown">--}}
                        {{--<a href="#" class="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown"--}}
                           {{--aria-haspopup="true" aria-expanded="false">Another Link--}}
                            {{--<span class="caret"></span>--}}
                        {{--</a>--}}
                        {{--<ul class="dropdown-menu" aria-labelledby="dropdownMenu2" role="menu">--}}
                            {{--<li>--}}
                                {{--<a href="#">Action</a>--}}
                            {{--</li>--}}
                            {{--<li>--}}
                                {{--<a href="#">Another action</a>--}}
                            {{--</li>--}}
                            {{--<li>--}}
                                {{--<a href="#">Something else here</a>--}}
                            {{--</li>--}}
                            {{--<li class="divider"></li>--}}
                            {{--<li>--}}
                                {{--<a href="#">Separated link</a>--}}
                            {{--</li>--}}
                            {{--<li class="divider"></li>--}}
                            {{--<li>--}}
                                {{--<a href="#">One more separated link</a>--}}
                            {{--</li>--}}
                        {{--</ul>--}}
                    {{--</li>--}}
                </ul>
                {{--<form class="navbar-form navbar-left" role="search">--}}
                    {{--<div class="form-group">--}}
                        {{--<input type="text" class="form-control" placeholder="Search">--}}
                    {{--</div>--}}
                    {{--<button type="submit" class="btn btn-default">Submit</button>--}}
                {{--</form>--}}
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
            </div>
        </div>
    </nav>
</header>
<style>
    .navbar-default {
        border-top: 3px #00CCFF solid;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
        background-color: white;

    }

    @media (max-width: 991px) {
        .offcanvas-stop-scrolling {
            height: 100%;
            overflow: hidden;
        }

        .navbar-default .navbar-offcanvas {
            background-color: #f8f8f8;
        }

        .navbar-inverse .navbar-offcanvas {
            background-color: #222;
        }

        .navbar-offcanvas {
            position: fixed;
            width: 100%;
            max-width: 250px;
            left: -250px;
            top: 0;
            padding-left: 15px;
            padding-right: 15px;
            z-index: 999;
            overflow: scroll;
            -webkit-overflow-scrolling: touch;
            -webkit-transition: all 0.15s ease-in;
            transition: all 0.15s ease-in;
        }

        .navbar-offcanvas.in {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .navbar-offcanvas.navbar-offcanvas-fade {
            opacity: 0;
        }

        .navbar-offcanvas.navbar-offcanvas-fade.in {
            opacity: 1;
        }

        .navbar-offcanvas.offcanvas-transform.in {
            -webkit-transform: translateX(250px);
            -ms-transform: translateX(250px);
            transform: translateX(250px);
        }

        .navbar-offcanvas.offcanvas-position.in {
            left: 0;
        }

        .navbar-offcanvas.navbar-offcanvas-right {
            left: auto;
            right: -250px;
        }

        .navbar-offcanvas.navbar-offcanvas-right.offcanvas-transform.in {
            -webkit-transform: translateX(-250px);
            -ms-transform: translateX(-250px);
            transform: translateX(-250px);
        }

        .navbar-offcanvas.navbar-offcanvas-right.offcanvas-position.in {
            left: auto;
            right: 0;
        }

        .navbar-offcanvas.dropdown.active .caret {
            border-top: 0;
            border-bottom: 4px solid;
        }

        .navbar-offcanvas.dropdown-menu {
            position: relative;
            width: 100%;
            border: inherit;
            box-shadow: none;
            -webkit-transition: height 0.15s ease-in;
            transition: height 0.15s ease-in;
        }

        .navbar-offcanvas.dropdown-menu.shown {
            display: block;
            margin-bottom: 10px;
        }

        .offcanvas-toggle {
            display: block;
        }

        .navbar-header {
            width: 100%;
        }

        .navbar-form {
            float: none !important;
            padding: 10px 15px;
            margin: 8px -15px;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .navbar-form .form-group {
            width: 100%;
            margin-bottom: 5px;
        }

        .navbar-form .form-group input {
            width: 100%;
        }

        .navbar-nav {
            margin: 7.5px -15px;
            float: none !important;
        }

        .navbar-nav li {
            float: none;
        }

        .navbar-nav li a {
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .navbar-nav li.dropdown.open .dropdown-menu {
            position: static;
            float: none;
            width: auto;
            margin-top: 0;
            background-color: transparent;
            border: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
    }

    .offcanvas-toggle {
        background: #f8f8f8;
    }

    .offcanvas-toggle .icon-bar {
        background: #000;
        -webkit-transition: all 0.25s ease-in-out;
        transition: all 0.25s ease-in-out;
    }

    .offcanvas-toggle.is-open .icon-bar:nth-child(1) {
        -webkit-transform: rotate(45deg) translate(5px, 4px);
        -ms-transform: rotate(45deg) translate(5px, 4px);
        transform: rotate(45deg) translate(5px, 4px);
    }

    .offcanvas-toggle.is-open .icon-bar:nth-child(2) {
        opacity: 0;
    }

    .offcanvas-toggle.is-open .icon-bar:nth-child(3) {
        -webkit-transform: rotate(-45deg) translate(4px, -4px);
        -ms-transform: rotate(-45deg) translate(4px, -4px);
        transform: rotate(-45deg) translate(4px, -4px);
    }

    /*# sourceMappingURL=bootstrap.offcanvas.css.map */
</style>
