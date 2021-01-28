const express = require("express");
const app = express();
const connect = require("./bd/connection")

var bodyParser = require('body-parser');
const listarPagamentos = require("./function/listarPagamentos");

app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/pagamento', async(req, res) =>{
   var pagamentos = listarPagamentos();

    pagamentos.lista(connect, function(erros, resultados){
        res.render('pagamento', {lista: resultados});
    });
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});


app.post('/add-pagamento', function(req, res){
   let dados = req.body
   let valores = [
       dados.nome,
       dados.valor
   ]
    let sql = "INSERT INTO dados (nome, valor) VALUES (?, ?)"
    connect.query(sql, valores, (error, result) =>{
        if(error){
            console.log('Erro ' + error)
        }else{
            res.redirect('/pagamento');
        }
    })
});

app.listen(5000, () => {
    console.log("Servidor Ativo!")
})