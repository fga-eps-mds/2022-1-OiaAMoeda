const axios = require('axios').default
const fs = require('fs');


module.exports = (req, res, next) => {

    const viacep = (async () => {
        const { data } = await axios(`https://newsapi.org/v2/everything?q=+bitcoin&language=pt&sortBy=relevance&apiKey=188f514b04db4f2586a4700cb306a7b8`)

        fs.writeFile('news.json', JSON.stringify(data, null, 2), err => {
            if (err) throw new Error('algo está errado')
            console.log('tudo certo')
        })

    })();

    next()

}