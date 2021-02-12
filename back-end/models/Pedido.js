const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pedido = new Schema({
   nome:{
    type:String,
    required:true,
   },
   endereco:{
    type:String,
    required:true,
   },
   telefone:{
    type:String,
    required:true,
   },
   nome_do_produto:{
    type:String,
    required:true,
   },
   valor_produto:{
    type:String,
    required:true,
   },
   quantidade:{
    type:String,
    required:true,
   },
   valor_total:{
    type:String,
    required:true,
   },
})

mongoose.model('pedido', Pedido);