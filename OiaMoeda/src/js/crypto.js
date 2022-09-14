const express = require("express");
const server = express();

const CoinGecko = require('coingecko-api');
const { appendFile } = require("fs");
const CoinGeckoClient = new CoinGecko();

var timestamp = Math.floor(Date.now() / 1000);
var tempoInicio = false;
var dadosCrypto = {};
var IntervaloDeChamadaAPI = 60000;

var crypto = async () => {
    return await CoinGeckoClient.simple.price({
        ids: ['bitcoin', 'ethereum', 'dogecoin'],
        vs_currencies: ['eur', 'usd', 'brl'],
    });
}

server.get("/", async (req, res, next) => {
    if (!tempoInicio) {
        setTimeout(async function () {
            dadosCrypto = await crypto();
            timestamp = Math.floor(Date.now() / 1000);
            tempoInicio = false;
        }, IntervaloDeChamadaAPI);
        tempoInicio = true;
    }
    let resposta = new Object();
    resposta.timestamp = timestamp;
    resposta.data = dadosCrypto;
    res.json(resposta);
});

server.listen(3002, async () => {
    console.log(`Servidor de Pé!\nem: localhost:3002`)
    dadosCrypto = await crypto();
    timestamp = Math.floor(Date.now() / 1000);
});

var crypto = async () => {
    return await CoinGeckoClient.simple.price({
        ids: ['bitcoin', 'ethereum', 'dogecoin'],
        vs_currencies: ['eur', 'usd', 'brl'],
    });
}