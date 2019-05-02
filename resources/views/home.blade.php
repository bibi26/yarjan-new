<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('layout.head')
<body>
<script>
    var BASE_URL = '<?php echo url(''); ?>';
    var _TOKEN = '<?php echo csrf_token() ?>';
    $(document).ready(function () {
        $(".nav li").removeClass("active");
        $('#homeTopMenu').addClass('active');
    });
</script>
<div class="container-fluid" style="margin: 0px;padding: 0px;">
    @include('layout.menu')
    <div class="row" style="padding: 0px;  margin-top: 15px;">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            @yield('content')
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        </div>
    </div>
    @include('layout.footer')
</div>
</body>
</html>
