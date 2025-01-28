
// NON Funziona per un problema con this
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var myParagrafo = document.getElementById("paragrafo");
myParagrafo.onclick = function (e) {
    const lista = document.querySelector('#lista');

    const nuovoElemento = document.createElement('li');

    nuovoElemento.textContent = 'Tre';

    console.log(nuovoElemento);

    lista.appendChild(nuovoElemento);
};





function test() {
    console.log('test');
}

const t = test;
//const paragrafo = $('p');

t();
test();

const paragrafo = document.querySelector('p');

paragrafo.classList.add('red');

console.log(paragrafo);

const nuovoParagrafo = document.createElement('p');

//AGGIUNTA CON appendChild
const testo = document.createTextNode('Testo del paragrafo')
console.log('testo');

// nuovoParagrafo.appendChild(testo);

// aggiunta con textNode
nuovoParagrafo.textContent = 'tst';

// aggiunta con innerText
nuovoParagrafo.innerText = 'tst';

//aggiunta con innerHTML
const mioTesto = 'ciao';
nuovoParagrafo.innerHTML = 'tst';

const parent = $('header');
parent.appendChild(nuovoParagrafo);

console.log(nuovoParagrafo);

const myDom = {
    type: "div",
    id: "container",
    className: "container",
    children: [
        {
            type: "h1",
            children: [{ type: "text", value: "My DOM Framework" }],
        },
        {
            type: "p",
            children: [
                {
                    type: "text",
                    children: [
                        { type: "text", value: "This is a" },
                        {
                            type: "span",
                            className: "bold",
                            children: [{ type: "text", value: " DOM Framework" }],
                        },
                    ],
                },
            ],
        },
    ],
};

function render(dom, parent) {
    const el = document.createElement(dom.type);
    if (dom.id) el.id = dom.id;
    if (dom.className) el.className = dom.className;
    if (!dom.children) return parent.appendChild(el);
    dom.children.forEach((child) => {
        if (child.type === "text" && child.value) {
            el.appendChild(document.createTextNode(child.value));
        } else {
            render(child, el);
        }
    });
    parent.appendChild(el);
}

const rootElement = document.getElementById("root");
render(myDom, rootElement);


const paragrafi = document.querySelectorAll('p');
console.log(paragrafi);

function contoAllaRovescia(num) {
    console.log(num);
    if (num === 0) {
        return;
    }
    contoAllaRovescia(num - 1);
}







