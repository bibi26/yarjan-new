<head>
    <meta charset="utf-8">
    {{--<meta name="viewport" content="width=device-width, initial-scale=1">--}}
    {{--<title>@yield('title')</title>--}}
    <title></title>
    <link href="{{ URL::asset('/css/all.css') }}" rel="stylesheet" type="text/css">
    {{--<link href="{{ URL::asset('/css/select2.css') }}" rel="stylesheet" type="text/css">--}}
    <script type="text/javascript" src="{{ URL::asset('/js/all.js') }}"></script>
{{--    <script type="text/javascript" src="{{ URL::asset('/js/select2.js') }}"></script>--}}
    <link href="{{ URL::asset('/css/fileinput.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ URL::asset('/css/theme.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ URL::asset('/css/animate.css') }}" rel="stylesheet" type="text/css">
    <script src="{{ URL::asset('/js/fileinput.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('/js/theme.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('/js/fa.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('/js/functions.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('/js/piexif.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('/js/bootstrap-notify.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('/js/jquery.dataTables.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('/js/dataTables.bootstrap.js') }}" type="text/javascript"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <script>
        // Echo.channel('home')
        //     .listen('NewMessage', (e) => {
        //        console.log(e.message);
        //     });
    </script>
</head>

