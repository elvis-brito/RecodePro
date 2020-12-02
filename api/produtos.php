<?php
    require_once "../php/actions/db_connect.php";
    $tabela = $_GET['table'];
    $result = query("select * from mydb.$tabela");

    print_r(json_encode( $result->fetch_all(MYSQLI_ASSOC)));
?>