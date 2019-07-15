<div role="tabpanel" class="tab-pane fade in active" id="Section1">
    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3 ">نام :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php   echo !empty($person['nick_name']) ? $person['nick_name'] :$person['fname']; @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">سن :</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val"> {{$person['age']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">محل سکونت :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">{{$person['provinces']['name']." - ".$person['cities']['name']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وضعیت شغل :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo jobStatus($person['job_status']) @endphp</div>
    </div>
    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">شغل :</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val"> {{$person['job']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وضعیت ازدواج :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo marriageStatus($person['marriage']) @endphp</div>
    </div>
    @if(isset($person['child_count']))
        <div class="form-group row">
            <label class="control-label col-lg-2 col-md-2 col-sm-3">تعداد فرزند :</label>
            <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['child_count']}} </div>
        </div>
    @endif

    @if(isset($person['age_older_child']))
        <div class="form-group row">
            <label class="control-label col-lg-2 col-md-2 col-sm-3">سن فرزند بزرگتر :</label>
            <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['age_older_child']}} </div>
        </div>
    @endif

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">تحصیلات :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val"> @php echo educationStatus($person['education']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">رشته تحصیلی :</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['field']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">میزان درامد خانواده :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val"> @php echo incomeStatus($person['family_income']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">میزان درامد :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val"> @php echo incomeStatus($person['my_income']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3"> وضعیت مسکن :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val"> @php echo houseStatus($person['house']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3"> وضعیت اتومبیل :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo carStatus($person['car']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">قد (سانتی متر) :</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['height']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وزن (کیلوگرم) :</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['weight']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">رنگ پوست :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php  echo skinColorStatus($person['skin_color']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">زیبایی - یک کمترین :</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['face']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">تیپ - یک کمترین :</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val">{{$person['style']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3"> وضعیت سلامت :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo healthConditionStatus($person['health_condition']) @endphp</div>
    </div>
    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3"> قصد مهاجرت به خارج :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo immigrationStatus($person['immigration']) @endphp</div>
    </div>

    <div class="form-group row ">
        <label class="control-label col-lg-2 col-md-2 col-sm-3"> درباره خودم :</label>
        <div class="col-lg-10 col-md-10 col-sm-9 alert alert-warning  val">{{$person['i_am']}}</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3"> درباره همسرم :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  alert alert-warning val">{{$person['you_are']}}</div>
    </div>

</div>
