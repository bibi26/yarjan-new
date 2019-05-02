@extends('welcome')
@section('content')
    @if(isset($success))
        <div class="alert oaerror success" style="margin-top: 5px;">{{$success}}</div>
    @endif
    @if(isset($error))
        <div class="alert oaerror danger" style="margin-top: 5px;">{{$error}}</div>
    @endif
@stop
