document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login_form');
    const emailInput = document.querySelector('.login_input[type="email"]');
    const passwordInput = document.querySelector('.login_input[type="password"]');
    const resetLink = document.querySelector('.login_reset');

    // JSON simulando logins válidos
    const validLogins = [
        { email: 'usuario1@example.com', password: 'senha123' },
        { email: 'usuario2@example.com', password: 'senha456' },
        // Adicione mais logins conforme necessário
    ];

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Verifica se o email e senha correspondem a algum login válido
        const isValid = isValidLogin(email, password, validLogins);

        if (isValid) {
            alert('Login bem-sucedido!');
        } else {
            alert('Erro: Email ou senha inválidos.');
        }
    });

    function isValidLogin(email, password, validLogins) {
        // Verifica se existe um login correspondente no array de logins válidos
        return validLogins.some(login => login.email === email && login.password === password);
    }
});



function recoverPassword() {
    const recoveryEmailInput = document.getElementById('recoveryEmail');
    const recoveryEmail = recoveryEmailInput.value;

    // Verifique se o email existe nos logins válidos (simulado)
    const user = findUserByEmail(recoveryEmail);

    if (user) {
        // Gere e envie uma nova senha (simulado)
        const newPassword = generateNewPassword();
        
        // Exiba uma mensagem ao usuário (simulado)
        alert(`Nova senha gerada: ${newPassword}`);
    } else {
        // Exiba uma mensagem ao usuário se o email não existir
        alert('Email não encontrado. Verifique se digitou o email corretamente.');
    }
}

function findUserByEmail(email) {
    // Simulação: procure o usuário pelo email nos logins válidos
    return validLogins.find(user => user.email === email);
}

function generateNewPassword() {
    // Simulação: gere uma nova senha aleatória
    return Math.random().toString(36).slice(2); // Exemplo simples, substitua por uma lógica mais segura
}
