<?php

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'cadastro'

$conexao = new mysqli($dbHost,$dbUsername,$dbPassword.$dbName);

if($conexao->connect_errno){
    echo"deu erro rapaz";
}
else{
    echo"conexão deu certo rapaz";
}

?>