<?php
    require_once "../php/actions/db_connect.php";
    $tabela = $_GET['table'];
    $result = query("select * from mydb.produtos");
    header("Access-Control-Allow-Origin:*");
    print_r(json_encode( $result->fetch_all(MYSQLI_ASSOC)));
?>