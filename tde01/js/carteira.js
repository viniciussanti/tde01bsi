window.onload = function(){

    document.getElementById("divDadosMedicos").innerHTML = "";  // Inicia a div vazia para evitar adicionar mais de um registro
    
    var ListaDadosMedicos = JSON.parse(window.localStorage.getItem("dadosMedicos"));  // Carrega a lista de dados médicos

    for(var i = 0; i < ListaDadosMedicos.length; i++)
    {
        document.getElementById("divDadosMedicos").innerHTML += ListaDadosMedicos[i] + "</br>"; // Printa na tela a lista de dados
    }

}

function RetornaRegistro() {
    window.location.href = "../paginas/registros.html";  // Retorna para a página de registros 
}