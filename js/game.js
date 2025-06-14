const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [  //Array com as imagens.
    'Africa',
    'Brasil',
    'Japão',
    'Mexico',
    'China',
    'India',
    



];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';      //comparar se as cartas são iguais.
let secondCard = '';

const checkEndGame = () => {  // funçãopara ver se o jogo acabou.
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 12) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
        localStorage.removeItem('player');
        window.location.href = '../index.html';// reinicia o jogo na pagina inicial, após o fim do jogo, para outra pessoa poder jogar.
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');
    
    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        // reseta as cartas apara q possamos continuar jogando.
        firstCard = '';
        secondCard = '';

    setTimeout(() => {
        checkEndGame(); 
    }, 500);    
        

    } else {
        setTimeout(() => {

          firstCard.classList.remove('reveal-card');
          secondCard.classList.remove('reveal-card');

          firstCard = '';
          secondCard = '';

        }, 500);

    }
}

const revealCard = ({target}) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');  
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }

    target.parentNode.classList.add('reveal-card');
}

const createCard = (character) => {  //função para criar carta utilizando um createElement.

const card = createElement('div', 'card');
const front = createElement('div', 'face front');
const back = createElement('div', 'face back');

front.style.backgroundImage = `url('../Images/${character}.png')`; // duas crases para passar variaveis dentro de uma string.

card.appendChild(front);
card.appendChild(back);

card.addEventListener('click', revealCard);
card.setAttribute('data-character', character);

return card;
}


// funçao para gerar o jogo.
const loadGame = () => {

    const duplicateCharacteres = [ ...characters, ...characters ]; // espalhar os elementos dentro deste Array para ficar duplicado.

    const shuffledArray = duplicateCharacteres.sort(() =>  Math.random() - 0.5);

    duplicateCharacteres.forEach((character) => {  // função para criar várias cartas.
        
        const card = createCard(character);
        grid.appendChild(card);
    });
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML; // + para converter a string para número.
        timer. innerHTML = currentTime + 1;        
    }, 1000);

}

window.onload = () => {
    spanPlayer.innerHTML =  localStorage.getItem('player');
    startTimer();
    loadGame();  
}

