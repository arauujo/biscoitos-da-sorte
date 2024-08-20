const sectionOne = document.querySelector(".one");
const sectionTwo = document.querySelector(".two");
const biscuit = document.querySelector("#biscuit");
const luckMessage = document.querySelector(".luck-message");
const btn = document.querySelector("#btnOpenBiscuit");
const phrases = [
    "Você tem que acordar cada manhã com determinação se você quer ir para a cama com satisfação.",
    "Você deve esperar grandes coisas de você mesmo antes de poder faze-las",
    "Conhecimento é estar ciente do que você pode fazer. Sabedoria é saber quando não fazer.",
    "Bem-aventurados aqueles que podem dar sem lembrar e levar sem esquecer.",
    "O que nos parece como julgamentos amargos são muitas vezes bênçãos disfarçadas",
    "Oportunidades não acontecem, você as cria.",
    "O significado da vida é encontrar o seu dom. O propósito da vida é entregá-lo.",
    "Para viver uma vida criativa, devemos perder o medo de estar errado.",
    "É melhor falhar na originalidade do que ter sucesso na imitação.",
    "Nenhuma obra-prima foi criada por um artista preguiçoso.",
    "O único lugar que o sucesso vem antes do trabalho é no dicionário.",
    "Não é o que você olha que importa, é o que você vê.",
    "O sucesso é a soma de pequenos esforços, repetidos dia após dia.",
    "Se você quer alcançar a grandeza, pare de pedir permissão.",
    "Só existe um êxito: a capacidade de levar a vida que se quer."
];

function toggleHide() {
    sectionOne.classList.toggle("hide");
    sectionTwo.classList.toggle("hide");
}

function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function displayLuckMessage() {
    const phrase = getRandomPhrase();
    luckMessage.innerText = phrase;
    toggleHide();
    btn.focus();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        if (sectionTwo.classList.contains("hide")) {
            displayLuckMessage();
        } else if (sectionOne.classList.contains("hide")) {
            toggleHide();
        }
    }
}

biscuit.addEventListener('click', displayLuckMessage);
btn.addEventListener('click', toggleHide);
document.addEventListener('keydown', handleKeyPress)