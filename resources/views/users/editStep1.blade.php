    {!! Form::open(['route'=>'personInfo.step1','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmStep1']) !!}
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group  {{ $errors->has('job_status') ? 'has-error' : '' }}">
                {!! Form::label('وضعیت اشتغال  :','',['class' => 'control-label  input-sm col-lg-4 required']) !!}
                {{ Form::hidden('user_id',isset($userInfo['id'])?$userInfo['id']:'' )}}
                <div class="col-lg-8">
                    {{ Form::select('job_status', [''=>'انتخاب کنید','unemployed'=>'بیکار', 'employed'=>'شاغل', 'student'=>'دانشجو'],'', [ 'class' => 'form-control input-sm','id'=>'job_status' ])}}
                    <span class="text-danger small ">{{ $errors->first('job_status') }}</span>
                </div>
            </div>
            <div class="form-group  {{ $errors->has('job') ? 'has-error' : '' }}">
                {!! Form::label('شغل :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                <div class="col-lg-8">
                    {!! Form::text('job', '', ['class'=>'form-control input-sm','id'=>'job']) !!}
                    <span class="text-danger small ">{{ $errors->first('job') }}</span>
                </div>
            </div>
            <div class="form-group {{ $errors->has('marriage') ? 'has-error' : '' }}">
                {!! Form::label('وضعیت ازدواج  :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                <div class="col-lg-8">
                    {{ Form::select('marriage', [''=>'انتخاب کنید','single'=>'مجرد', 'divorced'=>'مطلقه', 'deceased_spouse'=>'همسر مرحوم'],'', [ 'class' => 'form-control input-sm','id'=>'marriage' ])}}
                    <span class="text-danger small ">{{ $errors->first('marriage') }}</span>
                </div>
            </div>
            <div class="form-group {{ $errors->has('education') ? 'has-error' : '' }}">
                {!! Form::label('تحصیلات  :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                <div class="col-lg-8">

                    {{ Form::select('education', [''=>'انتخاب کنید','under_diploma'=>'زیر دیپلم', 'diploma'=>'دیپلم', 'above_diploma'=>'فوق دیپلم', 'licensee'=>'لیسانس', 'above_licensee'=>'فوق لیسانس', 'public_dr'=>'دکترای عمومی', 'private_dr'=>'دکترای تخصصی', 'above_dr'=>'فوق تخصص', 'hozavi'=>'حوزوی'],'', [ 'class' => 'form-control input-sm','id'=>'education' ])}}
                    <span class="text-danger small ">{{ $errors->first('education') }}</span>
                </div>
            </div>
            <div class="form-group {{ $errors->has('field') ? 'has-error' : '' }} ">
                {!! Form::label('رشته تحصیلی :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                <div class="col-lg-8">

                    {!! Form::text('field', '', ['class'=>'form-control input-sm','id'=>'field']) !!}
                    <span class="text-danger small ">{{ $errors->first('field') }}</span>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="form-group {{ $errors->has('my_income') ? 'has-error' : '' }}">
                {!! Form::label('میزان درآمد شما :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                <div class="col-lg-8">

                    {{ Form::select('my_income', [''=>'انتخاب کنید','0'=>'بدون درآمد', '-2M'=>'زیر 2 میلیون تومان', '2M-5M'=>'بين 2 تا 5 میلیون تومان', '5M-10M'=>'بين 5 تا 10 میلیون تومان', '+10M'=>'بیش از 10 میلیون تومان'],'', [ 'class' => 'form-control  input-sm','id'=>'my_income' ])}}
                    <span class="text-danger small ">{{ $errors->first('my_income') }}</span>
                </div>
            </div>
            <div class="form-group {{ $errors->has('family_income') ? 'has-error' : '' }}">
                {!! Form::label('میزان درآمد خانواده :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                <div class="col-lg-8">
                    {{ Form::select('family_income', [''=>'انتخاب کنید','0'=>'بدون درآمد', '-2M'=>'زیر 2 میلیون تومان', '2M-5M'=>'بين 2 تا 5 میلیون تومان', '5M-10M'=>'بين 5 تا 10 میلیون تومان', '+10M'=>'بیش از 10 میلیون تومان'],'', [ 'class' => 'form-control input-sm','id'=>'family_income' ])}}
                    <span class="text-danger small ">{{ $errors->first('family_income') }}</span>
                </div>
            </div>
            <div class="form-group {{ $errors->has('house') ? 'has-error' : '' }}">
                {!! Form::label('وضعیت مسکن :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                <div class="col-lg-8">
                    {{ Form::select('house', [''=>'انتخاب کنید','0'=>'بدون مسکن شخصي', '1'=>'داراي مسکن شخصي'],'', [ 'class' => 'form-control input-sm','id'=>'house' ])}}
                    <span class="text-danger small ">{{ $errors->first('house') }}</span>
                </div>
            </div>
            <div class="form-group {{ $errors->has('car') ? 'has-error' : '' }}">
                {!! Form::label('وضعیت اتومبيل :','',['class' => 'control-label input-sm col-lg-4 required']) !!}
                <div class="col-lg-8">
                    {{ Form::select('car', [''=>'انتخاب کنید','0'=>'بدون اتومبيل', '-30M'=>'اتومبیل کمتر از 30 میلیون تومان', '30M-60M'=>'داراي اتومبيل بين 30 تا 60 ميليون تومان', '60M-100M'=>'داراي اتومبيل بين 60 تا 100 ميليون تومان', '100M-200M'=>'داراي اتومبيل بين 100 تا 200 ميليون تومان','200M-400M'=>'داراي اتومبيل بين 200 تا 400 ميليون تومان', '+400M'=>'اتومبیل بیشتر از 400 میلیون تومان'],'', [ 'class' => 'form-control input-sm','id'=>'car' ])}}
                    <span class="text-danger small ">{{ $errors->first('car') }}</span>
                </div>
            </div>

            <div class="form-group {{ $errors->has('child_count') ? 'has-error' : '' }}"
                 id="dv_child_count"
                 style="display: none;">
                {!! Form::label('تعداد فرزند :','',['class' => 'control-label input-sm col-lg-4']) !!}

                <div class="col-lg-8">
                    <select id="child_count" name="child_count"
                            class="form-control input-sm">
                        <option value="">انتخاب کنید</option>
                        <option value="0">ندارم</option>
                        @for ($i = 1; $i <= 5; $i++)
                            <option value="{{ $i }}">{{ $i }}</option>
                        @endfor
                        @if (old('child_count'))
                            <option value="{{ old('child_count') }}" selected>{{ old('child_count') }}</option>
                        @endif
                    </select>
                    <span class="text-danger small ">{{ $errors->first('child_count') }}</span>
                </div>
            </div>
            <div class="form-group {{ $errors->has('age_older_child') ? 'has-error' : '' }}"
                 id="dv_age_older_child"
                 style="display: none;">
                {!! Form::label('سن فرزند بزرگتر :','',['class' => 'control-label input-sm col-lg-4']) !!}
                <div class="col-lg-8">
                    <select id="age_older_child" name="age_older_child"
                            class="form-control input-sm">
                        <option value="">انتخاب کنید</option>
                        <option value="0">ندارم</option>
                        @for ($i = 1; $i <= 35; $i++)
                            <option value="{{ $i }}">{{ $i }}</option>
                        @endfor
                        @if (old('age_older_child'))
                            <option value="{{ old('age_older_child') }}" selected>{{ old('age_older_child') }}</option>
                        @endif
                    </select>
                    <span class="text-danger small ">{{ $errors->first('age_older_child') }}</span>
                </div>
            </div>
        </div>
    </div>
    {!! Form::close() !!}
<script>

    $(document).ready(function () {

        var marriage = $("#marriage");
        $(marriage).change(function (event) {
            if (marriage.val() !== "SINGLE") {
                $("#dv_child_count").show();
                $("#child_count").show();
                $("#dv_age_older_child").show();
                $("#age_older_child").show();
            }
            else {
                $("#dv_child_count").hide();
                $("#child_count").hide();
                $("#dv_age_older_child").hide();
                $("#age_older_child").hide();
            }
        });

        @if(isset($userInfo))

        @if(isset($userInfo->job_status))
        $("#job_status").val("@php echo  $userInfo->job_status @endphp");
        @endif

        @if(isset($userInfo->job))
        $("#job").val("@php echo  $userInfo->job @endphp");
        @endif
        @if(isset($userInfo->marriage))
        $("#marriage").val("@php echo  $userInfo->marriage @endphp");
        @endif

        @if(isset($userInfo->education))
        $("#education").val("@php echo  $userInfo->education @endphp");
        @endif

        @if(isset($userInfo->field))
        $("#field").val("@php echo  $userInfo->field @endphp");
        @endif

        @if(isset($userInfo->my_income))
        $("#my_income").val("@php echo  $userInfo->my_income @endphp");
        @endif

        @if(isset($userInfo->family_income))
        $("#family_income").val("@php echo  $userInfo->family_income @endphp");
        @endif

        @if(isset($userInfo->house))
        $("#house").val("@php echo  $userInfo->house @endphp");
        @endif

        @if(isset($userInfo->car))
        $("#car").val("@php echo  $userInfo->car @endphp");
        @endif

        @if(isset($userInfo->child_count))
        $("#child_count").val("@php echo  $userInfo->child_count @endphp");
        @endif

        @if(isset($userInfo->age_older_child))
        $("#age_older_child").val("@php echo  $userInfo->age_older_child @endphp");
        @endif

        @endif

        if (marriage.val() != '' && marriage.val() !== "SINGLE") {
            $("#dv_child_count").show();
            $("#child_count").show();
            $("#dv_age_older_child").show();
            $("#age_older_child").show();
        }
        else {
            $("#dv_child_count").hide();
            $("#child_count").hide();
            $("#dv_age_older_child").hide();
            $("#age_older_child").hide();

        }
    });

</script>





