<?php

    $con = mysqli_connect("localhost:3306", "root", "root", "banco_tde01");

    mysqli_query($con, "INSERT INTO dadosmedicos (Alergia, Peso, Tipo_Sanguineo, Altura, Remedios, Doencas, Contato, Plano_Saude) VALUES ('Rinite', '60', 'O-', '174', 'Pantoprazol', 'Extra Sistole', '(41) 99999-9999','Unimed')");

?>
