trocar_moeda('BitCoin', 'BTCUSDT');
function trocar_moeda(moeda, sigla) {
    $("#moeda_selecionada").html(moeda);
    LoadCharts(sigla);
    carrega_noticias(moeda);
    carrega_info();

    // inserindo o nome da moeda no html da página
    console.log(moeda);
    document.getElementById("nome-moeda").innerHTML = moeda + " to USD Chard";
    document.getElementById("nome-moeda-h2").innerHTML = moeda;

};