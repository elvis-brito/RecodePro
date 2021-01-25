const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json({extended: true}))


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

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
    });

    connection.query(sql, values, (error, result) => {
        if (error) {
            console.log('Erro ' + error)
        } else {
            res.send(result)
        }
    })
});


app.listen(5000, () => {
    console.log("Servidor ativo!");
});

