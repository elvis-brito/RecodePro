const express = require("express");
const app = express();

const cors = require('cors')
app.use(cors())

app.get("/produtos", (req, res, next) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
    });

    connection.query("select * from produtos", (erro, result) => {
        res.json(result)
    })
});

app.post("/registrar-pedido", (req, res) => {

    const dados = req.body

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
    });

    const { nome_cliente } = req.body
    const { endereco } = req.body
    const { telefone } = req.body
    const { nome_do_produto } = req.body
    const { valor_produto } = req.body
    const { quantidade } = req.body
    const { valor_total } = req.body

    dados.push({
        nome_cliente: nome_cliente,
        endereco: endereco,
        telefone: telefone,
        nome_do_produto: nome_do_produto,
        valor_produto: valor_produto,
        quantidade: quantidade,
        valor_total: valor_total
    })

    connection.query("insert into pedidos SET ?", dados, () => {
        dados = []
        return res.json({ mensagem: "Enviado" })
    })
});


app.listen(5000, () => {
    console.log("Servidor ativo!");
});

