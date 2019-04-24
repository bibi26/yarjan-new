@php
    $userFolder =  config("constants.upload.register.imageFolder");
    $fileName = user()['user_id'] . '_main_orginal' . '.jpg';
    $destPath = $userFolder . $fileName;
@endphp
<div class="alert alert-warning row">
    <p  class="col-lg-4 col-md-4 col-sm-4">پسوند های مجاز  <span style="color:red;">{{ config("constants.upload.register.allowExtensionPHP")}}</span></p>
    <p  class="col-lg-4 col-md-4  col-sm-4">حداقل اندازه  <span style="color:red;">{{ config("constants.upload.register.imageWidth")}}px  *  {{ config("constants.upload.register.imageHeight")}}px </span></p>
    <p  class="col-lg-4 col-md-4 col-sm-4"> حداکثر حجم   <span style="color:red;">{{ config("constants.upload.register.fileSizeSymbol")}}</span></p>
</div>

<div role="tabpanel" class="tab-pane fade in active" id="Section5">
    {!! Form::open(['route'=>'personInfo.step5','style'=>'padding: 10px','class'=>'form-horizontal' ,'id'=>'frmStep5']) !!}

    <div class="row">
        <div class="col-lg-4">
                <div class="kv-avatar">
                    <div class="file-loading">
                        <input id="fileMain" name="fileMain" type="file" required>

                    </div>
                </div>
        </div>
        <div class="col-lg-8">
            <div class="file-loading">
                <input id="fileAdditional" name="fileAdditional" multiple type="file">
            </div>
        </div>
    </div>
    <div class="form-group">
        <a class="btn btn-default btn-send pull-right btn_forget_pass"   href="{{route('personInfo.step4')}}" ><span ><i  class="fa fa-chevron-right"></i>&nbsp;</span>مرحله قبل </a>
        <a class="btn btn-default btn-send pull-left btn_blue"  href="javascript:void(0);" onclick="nextStep5();"><span ><i  class="fa fa-thumbs-up"></i>&nbsp;</span>ثبت نهایی</a>
    </div>
    {!! Form::close() !!}
</div>
<script>
    function nextStep5() {
        $('#dv_sign').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $('#frmStep5').submit();
    }

    $(document).ready(function () {
        activaTab("Section5");
    });

</script>

<style>
    .kv-avatar .krajee-default.file-preview-frame, .kv-avatar .krajee-default.file-preview-frame:hover {
        border: none;
        box-shadow: none;
        text-align: center;
    }

    .kv-avatar {
        display: inline-block;
    }

    .kv-avatar .file-input {
        display: table-cell;
        width: 213px;
    }

    .kv-reqd {
        color: red;
        font-family: monospace;
        font-weight: normal;
    }
</style>

<script>
    function nextStep5() {
        $('#dv_sign').block({
            message: '<h6><img src="/img/7070.gif" />در حال بررسی اطلاعات...',
            css: {backgroundColor: '#33e138'}
        });
        $('#frmStep5').submit();
    }

    $(document).ready(function () {

        $("#fileMain").fileinput({
            uploadUrl: '{{route('personInfo.uploadImg')}}',
            uploadAsync: false,
            theme: "fas",
            language: "fa",
            overwriteInitial: true,
            maxFileSize: 1500,
            showClose: false,
            showCaption: false,
            removeLabel: '',
            browseLabel: 'انتخاب تصویر اصلی',
            browseIcon: '<i class="fas fa-plus" ></i>',
            browseClass: 'btn btn-danger btn-md ',
            removeTitle: 'Cancel or reset changes',
            showRemove: false,
            showUpload: false,
            initialPreviewAsData: true,
            dropZoneTitle:' تصویر اصلی',
            autoReplace: true,
            maxFileCount: 1,
            fileActionSettings: {
                // showRemove: false,
                showUpload: false,

            },
            @if(\File::exists($destPath))
            initialPreviewConfig: [{
                'url': 'delete_img',
                'key': '@php echo $fileName; @endphp',
                'extra': {'_token': _TOKEN}
            }],
            initialPreview: ['@php echo $destPath; @endphp' ] ,
            @else
            defaultPreviewContent: '<img src="/img/avatar7.png" alt="تصویر اصلی">',
            @endif
            layoutTemplates: {main2: '{preview} ' + ' {remove} {browse}'},
            allowedFileExtensions: ["jpg", "jpeg"],
            uploadExtraData: {
                _token: _TOKEN,
                type: 'main'
            }
        }).on("filebatchselected", function (event, files) {
            $("#fileMain").fileinput("upload");
        });
        $("#fileAdditional").fileinput({
            uploadUrl: '{{route('personInfo.uploadImg')}}',
            uploadAsync: true,
            theme: "fas",
            language: "fa",
            showCaption: false,
            dropZoneTitle: 'تصاویر دیگر',
            showClose: false,
            showRemove: false,
            showUpload: false,
            fileActionSettings: {
                // showRemove: false,
                showUpload: false,

            },
            @php
                if (\File::exists($destPath))
                {
                    $handle = \File::allFiles($userFolder);
                    $e = 'initialPreview: [';
                    $d = 'initialPreviewConfig: [';
                    foreach ($handle as $file)
                    {
                        if(strpos($file->getfilename(), user()['user_id']."_additional_orginal_") !== false)
                        {
                            $e.= "'" .config("constants.upload.register.imageFolder") . $file->getfilename()."',";
                            $d.=" { 'url' : 'delete_img','key':'{$file->getfilename()}','extra': {'_token': '".csrf_token()."' }},";
                        }
                    }
                    echo $e . '],';
                    echo $d . '],';
                }
            @endphp
            allowedFileExtensions: ["jpg", "jpeg"],
            validateInitialCount: true,
            maxFileCount: 12,
            overwriteInitial:false,
            browseLabel: 'انتخاب تصاویر دیگر',
            browseClass: "btn btn-danger btn-md",
            initialPreviewAsData: true,
            uploadExtraData: {
                _token: _TOKEN,
                type: 'additional'
            },
        }).on("filebatchselected", function (event, files) {
            $("#fileAdditional").fileinput("upload");
        });
    });
</script>

