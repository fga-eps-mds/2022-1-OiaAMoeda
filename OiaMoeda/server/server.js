const express = require('express')
const server = express()
var axios = require("axios")
const fs = require('fs');

server.get('/noticias', (req, res) => {

    const news = (async () => {
        const { data } = await axios(`https://newsapi.org/v2/everything?q=+shakira&language=pt&sortBy=relevance&apiKey=188f514b04db4f2586a4700cb306a7b8`)

        fs.writeFile('cache/news.json', JSON.stringify(data, null, 2), err => {
            if (err) throw new Error('algo está errado')
            console.log('tudo certo')
        })

        res.send(JSON.stringify(data, null, 2))
    })();


})

server.listen(3003, () => {
    console.log("servidor de pe em http://localhost:3003")
})