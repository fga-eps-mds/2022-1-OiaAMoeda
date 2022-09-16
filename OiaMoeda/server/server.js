const express = require('express')
const server = express()
var cors = require('cors');
var axios = require("axios")
const fs = require('fs');

server.use(cors());
server.get('/noticias', (req, res) => {
  var moeda = req.query.moeda
  const news = (async () => {                                                                                       //188f514b04db4f2586a4700cb306a7b8
    const { data } = await axios(`https://newsapi.org/v2/everything?q=+${moeda}&language=pt&sortBy=relevance&apiKey=79b888884070453fa1607dbf2c81de7a`)

    fs.writeFile('cache/news' + moeda + '.json', JSON.stringify(data, null, 2), err => {
      if (err) throw new Error('algo está errado')
      console.log('tudo certo')
    })

    res.send(JSON.stringify(data, null, 2))
  })();
})


server.get('/moedas', (req, res) => {

  const moedas = (async () => {                                                                                       
    const { data } = await axios(`https://api.coinranking.com/v2/coins`)

    fs.writeFile('cache/moedas.json', JSON.stringify(data, null, 2), err => {
      if (err) throw new Error('algo está errado')
      console.log('tudo certo')
    })

    res.send(JSON.stringify(data, null, 2))
  })();

})

server.listen(3003, () => {
  console.log("servidor de pe em http://localhost:3003")  
  console.log("ctrl+c para desligar")
})