const express = require('express'); // chamando o express
const route = require('./route') //chamando route
const path = require('path') //usado para chamar a pasta views
const server = express();

server.set('view engine', 'ejs') // informando que o EJS é o responsavel da view engine

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views')) //pegando o caminho da pasta....  __dirname (variavel global que chama a pasta onde o arquivo esta---no caso src/)

server.use(route) //usando arquivo route

server.listen(3000, () => console.log("RODANDO"));





