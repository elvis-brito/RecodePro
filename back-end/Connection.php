<?php

class Connection
{
    public static function getDb()
    {
        $conn = new PDO(
            "mysql:host=40.124.12.175;dbname=mydb;charset=utf8",
            "admin",
            "55151150"
        );

        if ($conn) {
            return $conn;
        } else {
            echo "<h1>Erro ao realizar conexão</h1>";
        }
    }
}