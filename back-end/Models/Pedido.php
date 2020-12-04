<?php

require "../Connection.php";

class Pedido
{
    public $nome_cliente;
    public $endereco;
    public $telefone;
    public $nome_do_produto;
    public $valor_produto;
    public $quantidade;
    public $valor_total;


    public function registrarPedido()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO pedidos (nome_cliente, endereco, telefone, nome_do_produto, valor_produto, quantidade, valor_total) values ('$this->nome_cliente', '$this->endereco', '$this->telefone', '$this->nome_do_produto', '$this->valor_produto', '$this->quantidade', '$this->valor_total')");
        
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}
