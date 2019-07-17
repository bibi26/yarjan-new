@extends('home')
@section('content')
    <script>
        @if($errors->first('package') || $errors->first('sms'))
        notify('danger', 'لطفا یکی از بسته های زیر را انتخاب کنید');
        @endif
    </script>
    @include('partials.alerts')
    <div class="row">
        <div class="col-lg-12 ">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading1">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                در مورد همسریابی طوبی توضیح دهید؟ </a>
                        </h4>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                        <div class="panel-body">
                            همسریابی طوبی یک جامعه مجازی در زمینه همسریابی ازدواج دائم است که به منظور کمک به جوانان
                            عزیز در راستای انتخاب همسر شایسته راه اندازی شده است. همسریابی طوبی وابسته به هیچ نهاد و
                            سازمانی نمیباشد و به صورت مستقل اداره میشود.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading2">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                آیا مسئولین همسریابی طوبی همسر مناسبی را به من معرفی میکنند؟
                            </a>
                        </h4>
                    </div>
                    <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                        <div class="panel-body">
                            خیر. همسریابی طوبی یک جامعه مجازیست و نه یک موسسه همسریابی. لذا مدیران و مسئولان همسریابی
                            طوبی هیچ موردی را به کسی معرفی نمیکنند. بلکه این خود افراد هستند که باید با جستجوی در بانک
                            اطلاعات سایت فرد مورد نظر خود را یافته و اقدام به آشنایی با وی نماید.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading3">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                آیا اطلاعات پروفایلهای موجود مورد تایید مسئولین سایت میباشند؟ </a>
                        </h4>
                    </div>
                    <div id="collapse3" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading3">
                        <div class="panel-body">
                            خیر. پروفایلها توسط کاربران ایجاد میشوند و تیم مدیریت سایت آنها را کنترل میکند که حاوی
                            محتوای مجرمانه نباشند. اما راستی آزمایی اطلاعات پروفایلها و دقیق شدن در مشخصات فرد بر عهده
                            کاربریست که میخواهد با وی تماس برقرار نماید.

                            البته پلیس سایت بر اساس گزارش کاربران و همچنین بررسی های خود با پروفایلهای خاطی برخورد خواهد
                            کرد.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading4">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                میخواهم تخلف کاربری را گزارش کنم، به کدام بخش مراجعه کنم؟ </a>
                        </h4>
                    </div>
                    <div id="collapse4" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading4">
                        <div class="panel-body">
                            بر روی هر پروفایل، لینک گزارش تخلفات موجود است، به آنجا مراجعه نموده و گزاش خود را ارسال
                            نمایید.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading5">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                هزینه اشتراک ویژه را پرداخت کرده ام، اما هنوز سرویس مورد نظر برایم فعال نشده است؟ </a>
                        </h4>
                    </div>
                    <div id="collapse5" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading5">
                        <div class="panel-body">
                            پس از پرداخت هزینه اشتراک، شما باید مشخصات پرداخت را در صفحه ثبت مشخصات پرداحت ثبت نمایید تا
                            توسط تیم مدیریت سایت بررسی و در صورت صحت مشخصات، بحاسب شما در سایت افزوده شود. پس از آنکه
                            موجودی شما افزایش پیدا کرد شما باید سرویسهای مورد نظر خود را با استفاده از صفحه خرید اشتراک
                            ویژه/ پیامک فعالسازی نمایید.
                            به بیان ساده تر شما ابتدا موجودی خود را افزایش میدهید و سپس هر سرویسی که مد نظرتان هست را
                            بانتخاب خود خریداری میکنید.
                            در این روش در هر مرحله سرویس مورد نظر خود را بدقت انتخاب کرده و در پایان گزینه برداشت از
                            موجودی را انتخاب نمایید.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading6">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                من پرداخت خود را از طریق دروازه پرداخت سایت انجام داده ام، آیا باید مشخصات آنرا ثبت
                                کنم؟</a>
                        </h4>
                    </div>
                    <div id="collapse6" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading6">
                        <div class="panel-body">
                            خیر. پرداخت شما ثبت و سرویسهای مورد نظر شما به صورت اتومات فعال شده اند.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading7">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                سرویسهای من فعال شده اند اما چرا موجودی من را صفر نشان میدهد؟</a>
                        </h4>
                    </div>
                    <div id="collapse7" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading7">
                        <div class="panel-body">
                            درست است. چون هزینه سرویسها از موجودی شمادر سایت پرداخت شده اند و لذا از موجودی شما کسر شده
                            است.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading8">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                نمیخواهم عکس پروفایلم توسط همه کاربران دیده شود، چه باید بکنم؟</a>
                        </h4>
                    </div>
                    <div id="collapse8" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading8">
                        <div class="panel-body">
                            شما میتوانید به صفحه بارگذاری عکس مراجعه نموده و گزینه مناسب را انتخاب نمایید.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading9">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                میخواهم فقط افرادی که مطابق معیارهای من هستند بتوانند با من تماس داشته باشند، چه باید
                                بکنم؟</a>
                        </h4>
                    </div>
                    <div id="collapse9" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading9">
                        <div class="panel-body">
                            شما میتوانید به صفحه تنظیمات مراجعه نموده و گزینه مناسب را در بخش نحوه دریافت پیام، انتخاب
                            نمایید.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading10">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                چرا در بخشهایی از پروفایل نوشته انتظار تایید؟</a>
                        </h4>
                    </div>
                    <div id="collapse10" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading10">
                        <div class="panel-body">
                            در صورتی که کاربر پروفایل خود را ویرایش نماید، تا زمان تایید آن بخشها توسط تیم مدیریت سایت، این عبارت نمایش داده میشود

                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading11">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                کاربری مدت هاست که به سایت مراجعه نکرده است، آیا مدیریت سایت با وی تماس میگیرد؟</a>
                        </h4>
                    </div>
                    <div id="collapse11" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading11">
                        <div class="panel-body">
                            همانطور که قبلا گفته شد، همسریابی طوبی یک جامعه مجازیست و برقراری ارتباط بر عهده خود کاربران است.
                            برای تماس با کاربر مورد نظر شما میتوانید از سرویس پیامک استفاده کنید و اگر باز هم موفق نشدید بهتر است از آن پروفایل صرف نظر نمایید.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading12">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                من عضو ویژه هستیم و میخواهم موقتا انصراف دهم، آیا پس از ورود مجدد به سایت باز هم عضو ویژه هستم؟</a>
                        </h4>
                    </div>
                    <div id="collapse12" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading12">
                        <div class="panel-body">
                            تاریخ انقضای عضویت ویژه شما ثابت است و تغییری نمکیند، چه پروفایل در حالت فعال باشد و یا انصراف.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading13">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                من در خارج از کشور زندگی میکنم، چطور برای عضویت ویژه اقدام کنم؟</a>
                        </h4>
                    </div>
                    <div id="collapse13" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading13">
                        <div class="panel-body">
                            کاربران خارج از کشور میتوانند از طریق دوستان و اقوام خود در داخل کشور اقدام نمایند.
                            چنانچه مایل نیستید که آنها مطلع شوند که به چه منظوری این وجه واریز میشود، کافیست تا شماره کارت و یا حساب سایت را به آنها اعلام نمایید و از آنها بخواهید تا پس از واریز وجه، مشخصات پرداخت را به شما اعلام نمایند.
                        </div>
                    </div>
                </div>


                <div class="panel panel-warning">
                    <div class="panel-heading" role="tab" id="heading14">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                               href="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                در وضعیت تیکت پشتیبانی من نوشته، نگه داشته شده، این به چه معناست؟</a>
                        </h4>
                    </div>
                    <div id="collapse14" class="panel-collapse collapse" role="tabpanel"
                         aria-labelledby="heading14">
                        <div class="panel-body">
                            یعنی تیکت توسط مسئولین پشتیبانی مشاهده شده و در دست اقدام و پیگیری است.
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

            .panel-title{
                font-size: 14px;
            }
        </style>
@stop

