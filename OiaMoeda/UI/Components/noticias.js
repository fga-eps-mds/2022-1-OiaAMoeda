//função que monta requisição ajax para carregar os dados em json
$.ajax({
    url: "http://"+ window.location.hostname + ":3003/noticias",
    async: false,
    method: "get",
    cache: false,
    dataType: "json",
    error: function(data) {
        console.log("Não foi possivel obter os dados");
        //$("#myTabContent").append("<p>Não foi possivel obter os dados</p>");
    }
}).done(function(data) {
    $('#noticias').html(data);
    //data.forEach(function(noticia) {});

    /*var n1 = 0;
    //passa por cada dados dentro do json
    data.forEach(function(tabela) {
        //verifica se o dado refere-se a um array
        if ($.isArray(tabela)) {
            //preenche o menu de abas com as abas
            $("#myTab").append('<li class="nav-item" role="presentation"><button class="nav-link" id="' + n1 + '-tab" data-bs-toggle="tab" data-bs-target="#tabpanel' + n1 + '" type="button" role="tab" aria-controls="tabpanel' + n1 + '" aria-selected="false">' + tabela[0] + '</button></li>')
                //preenche conteiner com o as tabelas geradas
            $("#myTabContent").append("<div class='tab-pane fade' id='tabpanel" + n1 + "' role='tabpanel' aria-labelledby='" + n1 + "-tab' tabindex='0'><table id='tabela" + n1 + "' class='tablesorter table table-striped'><thead><tr><th colspan='5' style='font-size: x-large;'>Ambiente de " + tabela[0] + "</th></tr><tr id='linha0tabela" + n1 + "' style='position: sticky; top: 0; z-index: 3; background-color: white; position: -webkit-sticky;'></tr></thead><tbody id='corpo" + n1 + "'></tbody></table><br><div style='margin: 50px;'>Observações:<ul><li>Dados obtidos em <data></data>. <a href='" + url_atualizar + "' target='_self'>Click aqui para atualizar.</a></li></ul></div><br><br></div>");
            //preenche o cabeçalho da tabela, com suas celulas
            tabela[1][0].forEach(function(celula) {
                $("#linha0tabela" + n1).append("<th>" + celula + "</th>");
            });
            var n = 0;
            //passa por cada linha da tabela dentro do json
            tabela[1].forEach(function(linha) {
                if (n != 0) {
                    //preenche o corpo da tabela com linhas
                    $("#corpo" + n1).append("<tr id='linha" + n + "tabela" + n1 + "'></tr>");
                    //passa por cada celula da linha dentro do json
                    linha.forEach(function(celula) {
                        //preenche a linha da tabela com celulas
                        $("#linha" + n + "tabela" + n1).append("<td>" + celula + "</td>");
                    });
                }
                n++;
            });
            n1++;
        } else {
            //add dados refetente a data de atualização a tag <data>
            $('data').html(tabela);
        }
    }*/
});



/*(async () => {
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
*/
