const express = require("express");
const app = express();

const api = require('./api')

app.use(express.static(__dirname + '/'))

app.use(api)

app.get('/', function (req, res) {
    res.render('./index')
})

app.listen(3000, function () {
    console.log('Server iniciado...')
})