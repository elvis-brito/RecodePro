<?php

require "../Models/Pedido.php";

$pedido = new Pedido;
$pedido->nome_cliente = $_POST['nome_cliente'];
$pedido->endereco = $_POST['endereco'];
$pedido->telefone = $_POST['telefone'];
$pedido->nome_do_produto = $_POST['nome_do_produto'];
$pedido->valor_produto = $_POST['valor_produto'];
$pedido->quantidade = $_POST['quantidade'];
$pedido->valor_total = $_POST['valor_total'];

$validate = $pedido->registrarPedido();

if ($validate == true) {
    echo json_encode(true);
} else {
    echo json_encode(false);
}
