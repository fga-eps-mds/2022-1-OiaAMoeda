function carrega_info() {
    $.ajax({
        url: "http://" + window.location.hostname + ":3003/moedas",
        async: false,
        method: "get",
        cache: false,
        dataType: "json",
        error: function (data) {
            console.log("Não foi possivel obter os dados da moeda");
            $("#valor").html("ão foi possivel obter os dados da moeda");
        }
    }).done(function (data) {
        data["data"]["coins"].forEach(function (moeda) {
            if (moeda["name"].toUpperCase() == $("#moeda_selecionada").text().toUpperCase()) {
                $("#valor").html(moeda["price"]);
                $("#icone-moeda").html("<img src='" + moeda["iconUrl"] + "' width='60px'>");
            }
        });
    });
};