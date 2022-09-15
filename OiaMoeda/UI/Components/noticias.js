$.ajax({
    url: "http://"+ window.location.hostname + ":3003/noticias",
    async: false,
    method: "get",
    cache: false,
    dataType: "json",
    error: function(data) {
        console.log("Não foi possivel obter as noticias");
        $("#noticias").append("<p>Não foi possivel obter as noticias</p>");
    }
}).done(function(data) {
    data["articles"].forEach(function(noticia) {
        $("#noticias").append(`<div class="card ml-auto mr-0" style="width: 18rem;">
<img class="card-img-top" src="${noticia["urlToImage"]}" alt="Card image cap">
<div class="card-body">
<h5 class="card-title">${noticia["title"]}</h5>
<p class="card-text">${noticia["description"]}</p>
<a href="${noticia["url"]}" class="btn btn-primary">Site noticia</a>
</div>
</div>`)
    });

    
});
