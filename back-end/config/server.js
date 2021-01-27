const express = require('express')
const app = express();
const connect = require("../bd/connection");
const bodyParser = require('body-parser')

app.use(bodyParser.json({extended: true}))


const cors = require('cors')
app.use(cors())

app.get("/produtos", (req, res, next) => {
    
    connect.query("select * from produtos", (erro, result) => {
        res.json(result)
    })
});

    
app.post("/registrar-pedido", (req, res) => {
    let dados = req.body
    let values = [
        dados.nome_cliente,
        dados.endereco,
        dados.telefone,
        dados.nome_do_produto,
        dados.valor_produto,
        dados.quantidade,
        dados.valor_total
    ]
    
    let sql = "INSERT INTO pedidos (nome_cliente, endereco, telefone, nome_do_produto, valor_produto, quantidade, valor_total) VALUES (?, ?, ?, ?, ?, ?, ?)"

    connect.query(sql, values, (error, result) => {
        if (error) {
            console.log('Erro ' + error)
        } else {
            res.send(result)
        }
    })
});

module.exports = app