const express = require('express');
const routes = express.Router();
const Nosql = require("./config/server");

// Pedido
routes.post("/registrar-pedido",Nosql.EnviarPedido)  

// Contato
routes.post("/contatos",Nosql.EnviarContato) 
routes.get("/contatos",Nosql.ExibirContato)

module.exports = routes;