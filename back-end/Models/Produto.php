<?php

require "../Connection.php";

class Produtos
{
    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("select produtos.nome, produtos.descricao, produtos.preco, produtos.imagem, categorias.nome nomecategoria, categorias.slug from produtos inner join categorias on produtos.categoria = categorias.id");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
