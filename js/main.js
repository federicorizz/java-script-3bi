const $ = document.querySelector;
const $$ = document.querySelectorAll;

function test(){
    console.log('test');
}

const t = test;

t();
test();

const paragrafo = document.querySelector('p');

paragrafo.classList.add('red');

console.log(paragrafo);

const paragrafi = document.querySelectorAll('p');
console.log(paragrafi);




const lista = document.querySelector('#lista');

const nuovoElemento = document.createElement('li');

nuovoElemento.textContent = 'Tre';

console.log(nuovoElemento);

lista.appendChild(nuovoElemento);
