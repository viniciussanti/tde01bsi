var ListaUsuarios = []; // Inicia a lista de usuários vazia

if (window.localStorage.getItem("usuarios") != null)
{
    ListaUsuarios = JSON.parse(window.localStorage.getItem("usuarios"))  // Caso a lista de usuários existir, inicia com ela carregada
}

function login() {
    window.location.href = "../paginas/registros.html";    // Direciona para a página de registros
}