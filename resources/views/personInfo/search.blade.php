<div id="searchPersons" class="modal fade" role="dialog">
    <div class="modal-dialog" style="width: 600px;">

        <!-- Modal content-->
        <div class="modal-content">
            <div id="dv_search_persons">

                <div class="modal-header" style="background: -webkit-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -moz-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -o-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);
                             background: -ms-linear-gradient(bottom, #005eea, #0096ff 49%, #75bcff 50%, #9cafff);">
                    <h4 class="modal-title" style="text-align: center;"><i class="fa fa-sign-in fa-2x"
                                                                           aria-hidden="true" style="color: white"></i>جستجو
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        {!! Form::open(['route'=>'personInfo.showPersons','method'=>'get','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmSearch']) !!}
                        <div class=" col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="form-group ">
                                {!! Form::label('سن از','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="age_from" name="age_from"
                                            class="form-control input-sm ">
                                        <option value="">تعیین نشده</option>
                                        @for ($i = 18; $i <= 90; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                        @endfor
                                        @if (!empty(app('request')->input('age_from')))
                                            <option value="{{ app('request')->input('age_from')}}"
                                                    selected>{{app('request')->input('age_from') }}</option>
                                        @endif
                                    </select>
                                </div>
                            </div>
                            <div class="form-group ">
                                {!! Form::label('سن تا','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="age_to" name="age_to"
                                            class="form-control input-sm ">
                                        <option value="">تعیین نشده</option>
                                        @for ($i = 18; $i <= 90; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                        @endfor
                                        @if (!empty(app('request')->input('age_to')))
                                            <option value="{{ app('request')->input('age_to')}}"
                                                    selected>{{app('request')->input('age_to') }}</option>
                                        @endif
                                    </select>
                                </div>
                            </div>
                            <div class="form-group ">
                                {!! Form::label('وضعیت ازدواج','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    {{ Form::select('marriage', [''=>'تعیین نشده','single'=>'مجرد', 'divorced'=>'مطلقه', 'deceased_spouse'=>'همسر مرحوم'],app('request')->input('marriage'), [ 'class' => 'form-control input-sm','id'=>'marriage' ])}}
                                </div>
                            </div>
                            <div class="form-group ">
                                {!! Form::label('استان','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select class="form-control input-sm" name="province" id="province">
                                        <option value="">تعیین نشده</option>
                                        @if(isset($provinces))
                                            @foreach($provinces as $province)
                                                <option
                                                    value="{{$province->id}}"
                                                    @if (app('request')->input('province') == $province->id) selected @endif>{{$province->name}}</option>
                                            @endforeach
                                        @endif
                                    </select>
                                </div>
                            </div>
                            <div class="form-group ">
                                {!! Form::label('شهرستان','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="city" name="city" class="input-sm form-control">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('تحصیلات از','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    {{ Form::select('education_from', [''=>'تعیین نشده','1'=>'زیر دیپلم', '2'=>'دیپلم', '3'=>'فوق دیپلم', '4'=>'لیسانس', '5'=>'فوق لیسانس', '6'=>'دکترای عمومی', '7'=>'دکترای تخصصی', '8'=>'فوق تخصص', '9'=>'حوزوی'],app('request')->input('education_from'), [ 'class' => 'form-control input-sm','id'=>'education_from' ])}}
                                </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('تحصیلات تا','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    {{ Form::select('education_to', [''=>'تحصیلات تا','1'=>'زیر دیپلم', '2'=>'دیپلم', '3'=>'فوق دیپلم', '4'=>'لیسانس', '5'=>'فوق لیسانس', '6'=>'دکترای عمومی', '7'=>'دکترای تخصصی', '8'=>'فوق تخصص', '9'=>'حوزوی'],app('request')->input('education_to'), [ 'class' => 'form-control input-sm','id'=>'education_to' ])}}
                                </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('وضعیت سلامتی','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                {{ Form::select('health_condition[]', ['healthful'=>'سالم', 'special_disease'=>'دارای بیماری خاص (دیابت ، هپاتیت و ...)', 'defective'=>'دارای نقص عضو'],app('request')->input('health_condition'), [ 'class' => 'form-control input-sm','id'=>'health_condition' ,'multiple'=>'multiple','style'=>'width: 100%;'])}}
                            </div>
                            </div>
                            <div
                                class="form-group ">
                                {!! Form::label(' قد از (cm)','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="height_from" name="height_from"
                                            class="form-control input-sm ">
                                        <option value="">تعیین نشده</option>
                                        @for ($i = 50; $i <= 210; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                        @endfor
                                        @if (!empty(app('request')->input('height_from')))
                                            <option value="{{ app('request')->input('height_from')}}"
                                                    selected>{{app('request')->input('height_from') }}</option>
                                        @endif
                                    </select>
                                </div>
                            </div>
                            <div class="form-group ">
                                {!! Form::label(' قد تا (cm)','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="height_to" name="height_to"
                                            class="form-control input-sm ">
                                        <option value="">تعیین نشده</option>
                                        @for ($i = 50; $i <= 210; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                        @endfor
                                        @if (!empty(app('request')->input('height_to')))
                                            <option value="{{ app('request')->input('height_to')}}"
                                                    selected>{{app('request')->input('height_to') }}</option>
                                        @endif
                                    </select>
                                </div>
                            </div>
                            <div
                                class="form-group ">
                                {!! Form::label(' وزن از (km)','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="weight_from" name="weight_from"
                                            class="form-control input-sm ">
                                        <option value="">تعیین نشده</option>
                                        @for ($i = 50; $i <= 210; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                        @endfor
                                        @if (!empty(app('request')->input('weight_from')))
                                            <option value="{{ app('request')->input('weight_from')}}"
                                                    selected>{{app('request')->input('weight_from') }}</option>
                                        @endif
                                    </select>
                                </div>
                            </div>
                            <div class="form-group ">
                                {!! Form::label(' وزن تا (km)','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="weight_to" name="weight_to"
                                            class="form-control input-sm ">
                                        <option value="">تعیین نشده</option>
                                        @for ($i = 50; $i <= 210; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                        @endfor
                                        @if (!empty(app('request')->input('weight_to')))
                                            <option value="{{ app('request')->input('weight_to')}}"
                                                    selected>{{app('request')->input('weight_to') }}</option>
                                        @endif
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div class="form-group">
                                {!! Form::label(' رنگ پوست','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    {{ Form::select('skin_color[]', ['white'=>'سفید', 'bright_brunetee'=>'سبزه روشن', 'dark_brunetee'=>'سبزه تیره', 'black'=>'سیاه'],app('request')->input('skin_color'), [ 'class' => 'form-control input-sm','id'=>'skin_color' ,'multiple'=>'multiple','style'=>'width: 100%;' ])}}
                                </div>
                            </div>
                            <div class="form-group ">
                                {!! Form::label(' زیبایی (یک کمترین)','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="face" name="face"
                                            class="form-control input-sm">
                                        <option value="">تعیین نشده</option>
                                        @for ($i = 1; $i <= 5; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                        @endfor
                                        @if (!empty(app('request')->input('face')))
                                            <option value="{{app('request')->input('face') }}"
                                                    selected>{{app('request')->input('face')}}</option>
                                        @endif
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label(' تیپ (یک کمترین)','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                    <select id="style" name="style"
                                            class="form-control input-sm">
                                        <option value="">تعیین نشده</option>
                                        @for ($i = 1; $i <= 5; $i++)
                                            <option value="{{ $i }}">{{ $i }}</option>
                                        @endfor
                                        @if (!empty(app('request')->input('style')))
                                            <option value="{{app('request')->input('style') }}"
                                                    selected>{{app('request')->input('style')}}</option>
                                        @endif
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('درآمد همسر از','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                {{ Form::select('my_income_from', [''=>'تعیین نشده','0'=>'بدون درآمد', '1'=>'زیر 2 میلیون تومان', '2'=>'بين 2 تا 5 میلیون تومان', '3'=>'بين 5 تا 10 میلیون تومان', '4'=>'بیش از 10 میلیون تومان'],app('request')->input('my_income_from'), [ 'class' => 'form-control  input-sm','id'=>'my_income_from' ])}}
                            </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('درآمد همسر تا','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                {{ Form::select('my_income_to', [''=>'تعیین نشده','0'=>'بدون درآمد', '1'=>'زیر 2 میلیون تومان', '2'=>'بين 2 تا 5 میلیون تومان', '3'=>'بين 5 تا 10 میلیون تومان', '4'=>'بیش از 10 میلیون تومان'],app('request')->input('my_income_to'), [ 'class' => 'form-control  input-sm','id'=>'my_income_to' ])}}
                            </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('وضعیت مسکن','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                {{ Form::select('house', [''=>'تعیین نشده','0'=>'بدون مسکن شخصي', '1'=>'داراي مسکن شخصي'],app('request')->input('house'), [ 'class' => 'form-control input-sm','id'=>'house' ])}}
                            </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('وضعیت اتومبيل','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                {{ Form::select('car', [''=>'تعیین نشده','1'=>'بدون اتومبيل', '2'=>'اتومبیل کمتر از 30 میلیون تومان', '3'=>'داراي اتومبيل بين 30 تا 60 ميليون تومان', '4'=>'داراي اتومبيل بين 60 تا 100 ميليون تومان', '5'=>'داراي اتومبيل بين 100 تا 200 ميليون تومان','6'=>'داراي اتومبيل بين 200 تا 400 ميليون تومان', '7'=>'اتومبیل بیشتر از 400 میلیون تومان'],app('request')->input('car'), [ 'class' => 'form-control input-sm','id'=>'car' ])}}
                            </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('وضعیت عکس','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                {{ Form::select('have_image', [''=>'تعیین نشده','0'=>'بدون عکس', '1'=>'با عکس'],app('request')->input('have_image'), [ 'class' => 'form-control input-sm','id'=>'have_image' ])}}
                            </div>
                            </div>
                            <div class="form-group">
                                {!! Form::label('وضعیت آنلاین','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                {{ Form::select('is_online', [''=>'تعیین نشده','0'=>'نباشد', '1'=>'باشد'],app('request')->input('is_online'), [ 'class' => 'form-control input-sm','id'=>'is_online' ])}}
                            </div>
                            </div>
                            <div
                                class="form-group ">
                                {!! Form::label(' آخرین فعالیت در X روز گذشته','',['class' => 'col-sm-4 labelSearch']) !!}
                                <div class="col-sm-8">
                                <select id="activity_in_last_days" name="activity_in_last_days"
                                        class="form-control input-sm ">
                                    <option value=""> تعیین نشده</option>
                                    @for ($i = 1; $i <= 120; $i++)
                                        <option value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                    @if (!empty(app('request')->input('activity_in_last_days')))
                                        <option value="{{ app('request')->input('activity_in_last_days')}}"
                                                selected>{{app('request')->input('activity_in_last_days') }}</option>
                                    @endif
                                </select>
                            </div>
                            </div>
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="row">
                    <div class="col col-lg-12" style="text-align: right;">
                        <input name="text" class="btn btn-success" type="submit" value="جستجو"
                               onclick="javascrit:searchPerson()">
                        <input name="text" class="btn btn-default" type="submit" value="حذف فیلتر های جستجو"
                               onclick="javascrit:resetSearch()">
                        <input name="text" class="btn btn-danger" type="submit" value="بستن" data-dismiss="modal"
                               style="background-color: #fd265a;" onclick="javascrit:resetSearch()">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>

    .labelSearch {
        font-size: 12px;
    }
</style>
<script>
    $("#health_condition").select2({
placeholder:'تعیین نشده'
    });
    $("#skin_color").select2({
        placeholder:'تعیین نشده'
    });

    function searchPerson() {
        $('#dv_sign').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $('#frmSearch').find(":input").filter(function () {
            return !this.value;
        }).attr("disabled", "disabled");
        $('#frmSearch').submit();
    }

    function resetSearch() {
        window.location = '{{route("personInfo.showPersons")}}';

    }

    $(document).ready(function () {
        $("#province").change(function (event) {
            $("#city").prop("disabled", true);
            var selected = $('#province').val();
            event.preventDefault();
            $.ajax({
                url: "{{route('getCity')}}",
                data: {
                    "_token": _TOKEN,
                    'provinceId': selected
                },
                type: 'post',
                success: function (data, textStatus) {
                    var items;
                    items += "<option selected value=''> شهرستان </option>";
                    $.each(data.result, function (index, item) {
                        items += "<option value='" + item.id + "'>" + item.name + "</option>";
                    });
                    $("#city").html(items);
                    $("#city").prop("disabled", false);
                },
                error: function (xhr, textStatus, errorThrown) {
                    $("#city").prop("disabled", false);
                    alert('request failed');
                }
            });
        });
        @if(!empty(app('request')->input('province')))
        $.ajax({
            url: "{{route('getCity')}}",
            data: {
                "_token": _TOKEN,
                'provinceId': '{{app('request')->input('province')}}'
            },
            type: 'post',
            success: function (data, textStatus) {
                var items;
                items += "<option selected value=''> شهرستان </option>";
                $.each(data.result, function (index, item) {
                    items += "<option value='" + item.id + "'>" + item.name + "</option>";
                });
                $("#city").html(items);
                $("#city").prop("disabled", false);
                $("#city").val("{{ app('request')->input('city')}}");
            },
            error: function (xhr, textStatus, errorThrown) {
                $("#city").prop("disabled", false);
                alert('request failed');
            }
        });
        @endif

    });
</script>
