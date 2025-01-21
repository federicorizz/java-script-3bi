const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const paragrafo = document.querySelector('p');

console.log(paragrafo);




const lista = document.querySelector('#lista');

const nuovoElemento = document.createElement('li');

nuovoElemento.textContent = 'Tre';

console.log(nuovoElemento);

lista.appendChild(nuovoElemento);
