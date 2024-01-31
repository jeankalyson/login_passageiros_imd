function login() {
    var loginInput = document.getElementById("login").value;
    var senhaInput = document.getElementById("senha").value;

    if (loginInput === "admin" && senhaInput === "admin") {
        window.location.href = 'cadastro.html';
    } else {
        alert('Login e/ou senha incorretos');
    }
}

function limparCampos() {
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
}

var passageiros = [];

function salvarCadastro() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    if (!nome || !idade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificar se já existe um passageiro com o mesmo nome
    if (passageiros.some(p => p.nome === nome)) {
        alert('Já existe um passageiro cadastrado com esse nome.');
        return;
    }

    var passageiro = {
        nome: nome,
        idade: idade
    };

    passageiros.push(passageiro);
    alert('Cadastro realizado com sucesso!');
}

function irParaTelaBusca() {
    var jsonPassageiros = JSON.stringify(passageiros);
    localStorage.setItem('passageiros', jsonPassageiros);
    window.location.href = 'busca.html';
}

function login() {
    var loginInput = document.getElementById("login").value;
    var senhaInput = document.getElementById("senha").value;

    if (loginInput === "admin" && senhaInput === "admin") {
        window.location.href = 'cadastro.html';
    } else {
        alert('Login e/ou senha incorretos');
    }
}
function irParaTelaCadastroDireto() {
    window.location.href = 'cadastro.html';
}



// Na tela de busca (busca.html), você deve implementar as operações de busca usando os dados salvos no localStorage.
// Por exemplo, recuperar os dados com: var jsonPassageiros = localStorage.getItem('passageiros');
// E converter para um array de objetos JavaScript: var passageiros = JSON.parse(jsonPassageiros);
// Em seguida, utilizar métodos avançados de arrays para realizar as operações de busca.
