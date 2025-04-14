const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({ target}) => { //validar o valor colocado no nome, validando ou não o botão.
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => { 
    event.preventDefault(); // bloquear o comportamento padrão do evento de envio do formulário.

    localStorage.setItem('player', input.value); //salvar no armazenamento local as informações dos jogadores.
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);