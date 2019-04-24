<div role="tabpanel" class="tab-pane fade" id="Section2">
    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3 ">بازه سنی :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">
            @php
                if(empty($person['s_age_from']) && empty($person['s_age_to']))
                {
                echo 'تعیین نشده';
                }else{
                    echo !empty($person['s_age_from']) ? $person['s_age_from'] :'تعیین نشده';
                    echo '&nbsp;&nbsp;تا&nbsp;&nbsp;';
                    echo !empty($person['s_age_to']) ? $person['s_age_to'] :'تعیین نشده';
            }
            @endphp
        </div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وضعیت ازدواج :</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val">
            @php
                if($person['s_marriage_single'] || $person['s_marriage_deceased_spouse'] ||$person['s_marriage_divorced']  )
                {
            @endphp
            <span class="badge badge">{{$person['s_marriage_single'] ? 'مجرد':''}}</span>
            <span
                class="badge badge">{{$person['s_marriage_deceased_spouse'] ? 'همسر فوت شده':''}}</span>
            <span class="badge badge">{{$person['s_marriage_divorced'] ? 'طلاق گرفته':''}}</span>
            @php
                }
                else{
                echo 'تعیین نشده';
                }
            @endphp
        </div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">محل زندگی:</label>
        <div class="col-lg-10 col-md-10 col-sm-9  val">
            @php
                if($person['s_location_fellow_citizen'] || $person['s_location_fellow_province'] ||$person['s_location_homeland'] ||$person['s_location_abroad'] )
                {
            @endphp
            <span class="badge badge">{{$person['s_location_fellow_citizen'] ? 'همشهری':''}}</span>
            <span
                class="badge badge">{{$person['s_location_fellow_province'] ? 'هم استانی':''}}</span>
            <span class="badge badge">{{$person['s_location_homeland'] ? 'هم وطن':''}}</span>
            <span class="badge badge">{{$person['s_location_abroad'] ? 'خارج از کشور':''}}</span>
            @php
                }
                else{
                echo 'تعیین نشده';
                }
            @endphp
        </div>
    </div>
    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3 ">بازه تحصیلی :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">
            @php
                if(empty($person['s_education_from']) && empty($person['s_education_to']))
                {
                echo 'تعیین نشده';
                }else{
                    echo !empty($person['s_education_from']) ?educationStatus($person['s_education_from']) :'تعیین نشده';
                    echo '&nbsp;&nbsp;تا&nbsp;&nbsp;';
                    echo !empty($person['s_education_to']) ? educationStatus($person['s_education_to']) :'تعیین نشده';
            }
            @endphp
        </div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وضعیت اشتغال :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo jobStatus($person['s_job_status']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3 ">بازه قدی (سانتی متر) :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">
            @php
                if(empty($person['s_height_from']) && empty($person['s_height_to']))
                {
                echo 'تعیین نشده';
                }else{
                    echo !empty($person['s_height_from']) ? $person['s_height_from'] :'تعیین نشده';
                    echo '&nbsp;&nbsp;تا&nbsp;&nbsp;';
                    echo !empty($person['s_height_to']) ? $person['s_height_to'] :'تعیین نشده';
            }
            @endphp
        </div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">میزان درآمد :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo incomeStatus($person['s_my_income']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وضعیت مسکن :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo houseStatus($person['s_house']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وضعیت اتومبیل :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo carStatus($person['s_car']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وضعیت سلامتی :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo healthConditionStatus($person['s_health_condition']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">وضعیت فرزند :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo childStatus($person['s_child']) @endphp</div>
    </div>

    <div class="form-group row">
        <label class="control-label col-lg-2 col-md-2 col-sm-3">قصد مهاجرت به خارج :</label>
        <div
            class="col-lg-10 col-md-10 col-sm-9  val">@php echo immigrationStatus($person['s_immigration']) @endphp</div>
    </div>

</div>
