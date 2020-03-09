<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="google" content="notranslate">

        @foreach($meta->getAll() as $tag)
            @if ($tag['nodeName'] === 'meta')
                <meta {!!$meta->tagToString($tag)!!}>
            @elseif ($tag['nodeName'] === 'link')
                <link {!!$meta->tagToString($tag)!!}>
            @elseif ($tag['nodeName'] === 'title')
                <title>{{$tag['_text']}}</title>
            @elseif ($tag['nodeName'] === 'script')
                <script type="application/ld+json">{!! is_array($tag['_text']) ? json_encode($tag['_text'], JSON_UNESCAPED_SLASHES) : $tag['_text'] !!}</script>
            @endif
        @endforeach
    </head>

    <body>
        @yield('body')
    </body>
</html>
