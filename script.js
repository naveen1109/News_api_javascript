var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=in&' +
    'apiKey=3b8bf2e79f7f4161a75016be7420fa04';
var req = new Request(url);
fetch(req).then(function(response) {
    return response.text();
}).then(function(text) {
    var news = JSON.parse(text).articles

    for (let i = 0; i < news.length; i++) {
        var news_head = document.createElement("h3");
        var news_image = document.createElement("IMG");
        var news_desc = document.createElement("p")
        var news_card = document.createElement("div")
        news_card.className = "w3-panel w3-card-4"
        news_card.id = i;
        news_image.setAttribute("src", news[i].urlToImage);
        news_image.setAttribute("width", "310");
        news_image.setAttribute("height", "232");
        news_image.setAttribute("alt", "The Pulpit Rock");
        news_card.appendChild(news_head)
        news_card.appendChild(news_image);
        news_card.appendChild(news_desc);
        document.getElementById("title").appendChild(news_card)

        news_head.innerHTML = news[i].title
        news_desc.innerHTML = news[i].description
        document.getElementById(i).onclick = function() {
            location.href = news[i].url;

        }

    }

});