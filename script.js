var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=3b8bf2e79f7f4161a75016be7420fa04';
var req = new Request(url);
fetch(req).then(function(response) {
    return response.text();
}).then(function(text) {
    var news = JSON.parse(text).articles
    // console.log(news);
    for (var i = 0; i < news.length; i++) {
        var news_head = document.createElement("h3");
        	news_head.id="heading"
        console.log(news[i].title)
        document.getElementById("title").appendChild(news_head)
     	news_head.innerHTML=news[i].title


    }
});