
@if(isset($eFix))
    <div class="alert oaerror danger" style="margin-top: 5px;">{{$eFix}}</div>
@endif

@if(isset($sFix))
    <div class="alert oaerror success" style="margin-top: 5px;">{{$sFix}}</div>
@endif

@if(Session::has('eFix'))
    <div class="alert oaerror danger" style="margin-top: 5px;">{{Session::get('eFix')}}</div>
@endif

@if(Session::has('sFix'))
    <div class="alert oaerror success" style="margin-top: 5px;">{{Session::get('sFix')}}</div>
@endif
<script>

@if(Session::has('sPop'))
    notify('success', '{{Session::get('sPop')}}')
@endif

@if(Session::has('ePop'))
    notify('danger', '{{Session::get('ePop')}}')
@endif



</script>






@if(Session::has('noAccess'))
    <div class="alert oaerror danger" style="margin-top: 5px;">{{Session::get('noAccess')}}</div>
@endif
