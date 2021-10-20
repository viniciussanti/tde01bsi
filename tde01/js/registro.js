var ListaDadosMedicos = [];  // Inicia a lista de dados médicos vazia
var ListaUsuarios = []; // Inicia a lista de usuários vazia

if (window.localStorage.getItem("usuarios") != null)
{
    ListaUsuarios = JSON.parse(window.localStorage.getItem("usuarios"))  // Caso a lista de usuários existir, inicia com ela carregada
}

function gravar() {

    var alergia = document.getElementById("alergia").value;
    var peso = document.getElementById("peso").value;
    var tipo_sanguineo = document.getElementById("tipo_sanguineo").value;
    var altura = document.getElementById("altura").value;                   // Cadastra as variáveis a serem adicionadas na carteira
    var remedio = document.getElementById("remedios").value;
    var doencas = document.getElementById("doencas").value;
    var contato = document.getElementById("contato").value;
    var plano_saude = document.getElementById("plano_saude").value;

    ListaDadosMedicos.push(alergia, peso, tipo_sanguineo, altura, remedio, doencas, contato, plano_saude)   //Adiciona os dados na Lista

    console.log(ListaDadosMedicos);

    window.localStorage.setItem("dadosMedicos", JSON.stringify(ListaDadosMedicos));    // Salva a lista no local

}

function carteira() {
    window.location.href = "../paginas/carteira.html";  // Muda para a página da carteira
}