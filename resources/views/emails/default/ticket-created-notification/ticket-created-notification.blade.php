@extends('emails.default.base')

@section('content')
    <div style="line-height: 18px; font-family: 'Lucida Grande',Verdana,Arial,sans-serif; font-size: 13px; color:#2b2e2f;">
        <p>Hi there,</p>

        <p>This is an automated response to let you know that we’ve received your request. You can view it <a href="{{url('help-center/tickets/'.$ticket->id)}}">here.</a></p>

        <p>One of our support agents will get back to you shortly. Please do not submit multiple tickets for the same request, as this will not result in a faster response time.</p>

        <p>In the meantime, you can search our <a href="{{url('help-center')}}">Help Center</a></p>

        <p>Kind Regards<br>{{$siteName}} Help Team</p>
    </div>
@endsection