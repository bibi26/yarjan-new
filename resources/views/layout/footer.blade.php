<style>
    footer {
        background-color: white !important;
        margin-top: 30px;
    }
    .footer ul {
        list-style: none;
        line-height: 2.8em;
    }
    .footer ul a {
        color: #000;
    }
    .footer ul a:hover {
        outline:0;
        color: #337ab7;
        text-decoration: none;
        font-size: 14px;
    }


    .text-danger{
        color:#F00;
    }
    .has-error .form-control {
        border:1px solid #F00;
    }
     .required:after{
         content:'*';
         color:red;
         padding-left:5px;
     }
</style>
<div class="footer">
    <div class="row">
        <!--    <div class="col-md-4 pull-right text-right contact-us">
                <h3 class="footer-title">راه های ارتباطی</h3>
                <ul>
                    <li><i class="fa fa-map-marker"></i> آدرس: تهران، میدان آرژانتین، خیابان بخارست، کوچه نهم، پلاک 14، طبقه اول</li>
                    <li><i class="fa fa-phone">
                        </i> تلفن پشتیبانی : 86046167 - 021</li>
                    <li><i class="fa fa-envelope"></i> پست الکترونیکی: info[at]azki.com </li>
                </ul>
                <div class="col-md-12 social-network">
                    <ul>
                        <li><a target="_blank" href="https://twitter.com/Azkidotcom"></a></li>
                        <li><a target="_blank" href="https://t.me/azkidotcom"></a></li>
                        <li><a target="_blank" href="https://www.facebook.com/Azkicom/"></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/azkidotcom/"></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/azki-com-4b737613b/"></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-xs-12 col-sm-12 pull-right text-right footer-menu">
                <h3 class="footer-title">منوی سایت</h3>
                <ul class="col-md-6 col-xs-6 col-sm-6 pull-right text-right">
                    <li> <a href="https://www.azki.com/compare/third-party-insurance">بیمه شخص ثالث</a></li>
                    <li> <a href="https://www.azki.com/compare/auto-body-insurance">بیمه بدنه</a></li>
                    <li> <a href="https://www.azki.com/compare/fire-insurance">بیمه آتش سوزی و زلزله</a></li>
                    <li> <a href="https://www.azki.com/compare/life-insurance">بیمه عمر</a></li>
                    <li> <a href="https://www.azki.com/compare/travel-insurance">بیمه مسافرتی</a></li>
                    <li> <a href="https://www.azki.com/compare/liability-insurance">بیمه مسئولیت</a></li>
                    <li> <a href="https://www.azki.com/compare/health-insurance">بیمه درمان</a></li>
                </ul>
                <ul class="col-md-6 col-xs-6 col-sm-6 pull-right text-right">
                    <li> <a href="https://www.azki.com/faq">سوالات متداول </a></li>
                    <li> <a href="https://www.azki.com/blog" target="_blank">وبلاگ</a></li>
                    <li><a href="https://www.azki.com/main/hamkari">همکاری با ما </a></li>
                    <li><a href="https://www.azki.com/terms-and-conditions">شرایط و قوانین </a>
                    </li>
                    <li><a href="https://www.azki.com/about-us">درباره ما</a></li>
                    <li><a href="https://www.azki.com/contact-us">تماس با ما</a></li>
                </ul>
            </div>
            <div class="col-md-2 col-xs-12 col-sm-12 pull-right text-right footer-menu">
                <h3 class="footer-title">لینک های مفید</h3>
                <ul class="col-md-12 col-xs-12 col-sm-12 pull-right text-right">
                    <li><a href="https://www.centinsur.ir/" target="_blank">بیمه مرکزی </a></li>
                    <li><a href="https://www.centinsur.ir/index.aspx?siteid=1&amp;fkeyid=&amp;siteid=1&amp;pageid=306" target="_blank">استعلام صحت بیمه نامه</a></li>
                    <li><a href="https://account.tamin.ir/auth/login" target="_blank">سوابق بیمه تامین اجتماعی</a></li>
                    <li><a href="http://estelam.rahvar120.ir/index.jsp?siteid=1&amp;fkeyid=&amp;siteid=1&amp;pageid=2371666" target="_blank">استعلام خلافی خودرو</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-xs-12 col-sm-12 pull-right signs">
                <div class="col-md-6 col-xs-6 col-sm-6 pull-right">
                    <img id="brgwrgvlsguibrgwlbrh" class="center-block img-responsive lazy" alt="نماد اعتماد الکترونیک" onclick="window.open( & quot;
                            https://trustseal.enamad.ir/Verify.aspx?id=65067&amp;p=hwmbyncrdrfshwmbqgwl&quot;, &quot;Popup&quot;,&quot;toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30&quot;)" src="https://trustseal.enamad.ir/logo.aspx?id=65067&amp;p=kzoefujygthvkzoepeuk" style="display: block;">
                </div>
                <div class="col-md-6 col-xs-6 col-sm-6 pull-right">
                    <img class="center-block img-responsive lazy" alt="ستاد ساماندهی" src="http://static.azki.com/img/samandehi.png" style="display: block;">
                </div>
            </div> -->
        <div class="col-md-12 col-xs-12 col-sm-12 " style="text-align: center;"> کلیه حقوق این سایت متعلق به وب سایت <a href="{{config("constants.siteAddress")}}">{{config("constants.siteTitle")}}</a> می باشد © <a href="{{config("constants.siteAddress")}}">{{config("constants.siteAddress")}}</a>, {{config("constants.cpoyRightDate")}} </div>
    </div>
</div>

<script>
    function notify(type, msg) {
        return  $.notify({
            // options
            message: msg,
        }, {
            // settings
            type: type,
            onShow: function () {
                this.css({'width': 'auto', 'height': 'auto'});
            },
        });
    }
    @if(Session::get('success'))
    notify('success', '{{Session::get('success')}}')
    @endif
    @if(Session::get('error'))
    notify('danger', '{{Session::get('error')}}')
    @endif
</script>


