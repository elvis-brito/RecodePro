const mongoose = require("mongoose");
require("../bd/connection");


require("../models/Contato");
require("../models/Pedido");

const Pedido = mongoose.model("pedido");
const Contato = mongoose.model("contato");

const EnviarPedido= async(req, res) => {
    const novoPedido = new Pedido({
        nome: req.body.nome_cliente,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        nome_do_produto: req.body.nome_do_produto,
        valor_produto: req.body.valor_produto,
        quantidade: req.body.quantidade,
        valor_total: req.body.valor_total
    });
    novoPedido.save();
    res.json({message: "Pedido incluído com sucesso", pedido:novoPedido})
}

 const EnviarContato= async(req, res) => {
    const novosContato = new Contato({
      nome: req.body.nome,
      email: req.body.email,
      mensagem: req.body.mensagem,
    });
    novosContato.save();
    res.json({message: "Contato incluído com sucesso", contato:novosContato})
}

const ExibirContato= async(req,res)=>{
    const contatosResponse = await Contato.find();
    const  contatosJson = await contatosResponse ;
    res.json(contatosJson);
}

module.exports={
    EnviarContato,
    ExibirContato,
    EnviarPedido
};