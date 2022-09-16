$.ajax({
    url: "http://" + window.location.hostname + ":3003/moedas",
    async: false,
    method: "get",
    cache: false,
    dataType: "json",
    error: function (data) {
        console.log("Não foi possivel obter as moedas");
        $("#menu").html("<li><a class='dropdown-item'>Não foi possivel obter as moedas</a></li>");
    }
}).done(function (data) {
    data["data"]["coins"].forEach(function (moeda, index) {
        $("#menu").append(`
            <li>
                <a class="dropdown-item" onclick="trocar_moeda('${moeda["name"]}','${moeda["symbol"]}USDT')">${moeda["name"]}</a>
            </li>`)
        if(index == 9){
            return;
        }
    });
});
