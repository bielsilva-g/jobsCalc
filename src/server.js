const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

// template engine
server.set('view engine', 'ejs');

// habilitar arquivos staticos
server.use(express.static("public"));

//Mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'))


// Usar rec.body
server.use(express.urlencoded({extended: true}));

// routes
server.use(routes);

server.listen(2705, () => console.log("Rodando..."));
