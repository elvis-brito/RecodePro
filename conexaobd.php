<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "mydb";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn){
        die("A conexão com o banco de dados falhou: ".mysqli_connect_error());
    }
?>