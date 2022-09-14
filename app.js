const express = require('express');
require('dotenv').config()
port = process.env.PORT
const app = express();

app.use(express.static('OiaMoeda'))
app.use('/css', express.static(__dirname + 'OiaMoeda/src/css'))
app.use('/html', express.static(__dirname + 'OiaMoeda/src/html'))
app.use('/js', express.static(__dirname + 'OiaMoeda/src/js'))

app.set('views', './src/html')
app.set('view engine', 'ejs')

const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

app.listen(port, ()=> console.log(`De pé em localhost:${port}`))