(async () => {
    const response = await fetch('.cache/news.json')
    const news = await response.json()
    var i = 0

    for (var item in news.articles) {
        document.querySelector('.container').innerHTML += (`<div class="card ml-auto mr-0" style="width: 25rem;">
<img class="card-img-top" src="${news.articles[i].urlToImage}" alt="Card image cap">
<div class="card-body">
<h5 class="card-title">${news.articles[i].title}</h5>
<p class="card-text">${news.articles[i].description}</p>
<a href="${news.articles[i].url}" class="btn btn-primary">Site noticia</a>
</div>
</div>`)
        i++
    }
})()