trocar_moeda('BitCoin','BTCUSDT');
function trocar_moeda(moeda, sigla) {
    $("#moeda_selecionada").html(moeda);
    LoadCharts(sigla);
    carrega_noticias(moeda);
};
