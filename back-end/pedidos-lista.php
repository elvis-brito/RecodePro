<?php

require "./Models/Pedidos.php";

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a api
header("Content-type: application/json");   //Indicação de arquivo JSON

$pedidos = Pedidos::getAll();

echo json_encode($pedidos);
