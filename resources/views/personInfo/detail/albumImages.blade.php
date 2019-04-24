@php
    $userFolder =  config("constants.upload.register.imageFolder");
    $fileName = user()['user_id'] . '_main_orginal' . '.jpg';
    $destPath = $userFolder . $fileName;
@endphp
<div role="tabpanel" class="tab-pane fade" id="Section3">

    <div class="file-loading">
        <input id="fileAdditional" name="fileAdditional" multiple type="file">
    </div>
</div>
<script>

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
            showRemove: false,
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
                        $e.= "'" .url(config("constants.upload.register.imageFolder") . $file->getfilename())."',";
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
        showBrowse:false,
        uploadExtraData: {
            _token: _TOKEN,
            type: 'additional'
        },
    }).on("filebatchselected", function (event, files) {
        $("#fileAdditional").fileinput("upload");
    });
</script>
