@extends('emails.default.base')

@section('content')
    <div style="line-height: 18px; font-family: 'Lucida Grande',Verdana,Arial,sans-serif; font-size: 13px; color:#2b2e2f;">
        <p>Hi there,</p>

        <p>Currently you can only create tickets via our <a href="{{url('help-center/tickets/new')}}">help center.</a></p>

        <p>Kind Regards<br>{{$siteName}} Help Team</p>
    </div>
@endsection