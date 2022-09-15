const express = require('express')
const server = express()

var axios = require('axios').default

const fs = require('fs')

server.post('/noticias', (req, res) => {
    // create a JSON object
    const news = (async () => {
        const data = await axios(`https://newsapi.org/v2/everything?q=+bitcoin&language=pt&sortBy=relevance&apiKey=188f514b04db4f2586a4700cb306a7b8`)
        //console.log(data)
        fs.writeFile('news.json', JSON.stringify(data, null, 2), err => {
            if (err) throw new Error('algo está errado')
            console.log('tudo certo')
        })
        return data
    })
    console.log(news)
    res.send(news)
})

server.listen(3001, () => {
    console.log('Servidor de pé em: https://localhost:30001')
    console.log('ctrl+c para derrubar o server')
})




