<div class="hc-sidenav left">
    @foreach($category['children'] as $childCategory)
        <h3 class="highlight-item {{str_slug($childCategory['name'])}}">{{$childCategory['name']}}</h3>
        <ul>
            @foreach($childCategory['articles'] as $article)
                <li>
                    <a href="{{'../' . str_slug($childCategory['name']) . '/' . str_slug($article['title']) . '.html'}}" class="highlight-item {{str_slug($article['title'])}}">{{$article['title']}}</a>
                </li>
            @endforeach
        </ul>
    @endforeach
</div>