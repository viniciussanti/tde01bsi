var ListaUsuarios = []; // Inicia a lista de usuários vazia

if (window.localStorage.getItem("usuarios") != null)
{
    ListaUsuarios = JSON.parse(window.localStorage.getItem("usuarios"))  // Caso a lista de usuários existir, inicia com ela carregada
}

function cadastrar() {

    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;  // Recebe as variáveis de cadastro
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var usuario = [];  // Inicia a lista de usuário vazia

    usuario.push(nome);
    usuario.push(sobrenome);  // Adiciona as variáveis de cadastro dentro da lista do usuário
    usuario.push(email);
    usuario.push(senha);

    ListaUsuarios.push(usuario);    // Adiciona a lista de usuário dentro da lista de usuários

    window.localStorage.setItem("usuarios",JSON.stringify(ListaUsuarios));    // Salva localmente a lista de usuários
    window.location.href = "../paginas/login.html";    // Direciona para a página de login
}
