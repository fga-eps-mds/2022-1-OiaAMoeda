let cont = 0;
function trocar_moeda(moeda, sigla) {
    $("#moeda_selecionada").html(moeda);
    LoadCharts(sigla);
    carrega_noticias(moeda);
    cont++;
};
// function inicia(){
//     trocar_moeda('BitCoin','BTCUSDT');
// };
// inicia();
/*$(document).ready(function(){
    if (cont == 0)
	trocar_moeda('BitCoin','BTCUSDT');
 });*/
 /* jQuery(function($) {
    trocar_moeda('BitCoin','BTCUSDT');
	// Códigos jQuery a serem executados quando a página carregar usando o pseudônimo (alias) $ de forma a não conflitar com outras bibliotecas JavaScript.
});*/
