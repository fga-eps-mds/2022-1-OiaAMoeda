const express = require("express");
const server = express();

const api = require('./api')

server.use(express.static(__dirname + '/'))

server.use(api)

server.get('/', function (req, res) {
    res.render('./src/html/home')
})

server.listen(3000, function () {
    console.log('Server iniciado...')
    console.log("Servidor de pé em: http://localhost:3000")
    console.log('Para desligar o servidor: ctrl + c')
})