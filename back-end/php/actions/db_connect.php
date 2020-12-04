<?php
    function query($sql) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "mydb";

        $conn = mysqli_connect($servername, $username, $password, $database);
        $resultado = mysqli_query($conn, $sql);
        mysqli_close($conn);
        return $resultado;
    }

    function nonquery($sql) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "mydb";

        $conn = mysqli_connect($servername, $username, $password, $database);
        if(!$conn)
        {
            die("Erro de conexão:".mysqli_connect_error());
        }
        mysqli_set_charset($conn, "utf8mb4");
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    }
?>