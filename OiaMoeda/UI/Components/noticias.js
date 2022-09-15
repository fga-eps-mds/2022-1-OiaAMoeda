function carrega_noticias(moeda) {
    $.ajax({
        url: "http://" + window.location.hostname + ":3003/noticias?moeda="+moeda,
        async: false,
        method: "get",
        cache: false,
        dataType: "json",
        error: function (data) {
            console.log("Não foi possivel obter as noticias");
            $("#noticias").html("<p>Não foi possivel obter as noticias</p>");
        }
    }).done(function (data) {
        $("#noticias").html(" ");
        data["articles"].forEach(function (noticia) {
            $("#noticias").append(`
        <div class="col">
            <div class="card ml-auto mr-0 h-100">
                <img class="card-img-top" src="${noticia["urlToImage"]}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${noticia["title"]}</h5>
                    <p class="card-text">${noticia["description"]}</p>
                    <a href="${noticia["url"]}" class="btn btn-warning" target="_blank">Acessar noticia</a>
                </div>
            </div>
        </div>`)
        });
    });
};