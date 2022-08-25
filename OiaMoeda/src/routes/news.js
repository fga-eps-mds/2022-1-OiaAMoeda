const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
const key = process.env.API_KEY

newsRouter.get('', async(req, res) => {
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${key}`)
        res.render('news', {articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
            res.render('news', { articles : null})
        }else if(err.requiest){
            console.log(err.response.requiest)
            res.render('news', { articles : null})
        }else{
            console.error('Error', err.message)
            res.render('news', { articles : null})
        }
    }
})

module.exports = newsRouter