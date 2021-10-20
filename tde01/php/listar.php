<?php

    $con = mysqli_connect("localhost:3306", "root", "root", "banco_tde01");

    $resultado = mysqli_query($con,"SELECT * FROM dadosmedicos");

    while($linha = mysqli_fetch_assoc($resultado)){

        echo $linha["Alergia"]."<br>";
        echo $linha["Peso"]."<br>";
        echo $linha["Tipo_Sanguineo"]."<br>";
        echo $linha["Altura"]."<br>";
        echo $linha["Remedios"]."<br>";
        echo $linha["Doencas"]."<br>";
        echo $linha["Contato"]."<br>";
        echo $linha["Plano_Saude"]."<br>";

    }

?>
