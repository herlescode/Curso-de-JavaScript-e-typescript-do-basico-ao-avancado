// document.body.onload = addElement;

// function addElement(){ 

// const criaNovaDiv = document.createElement('h1');
// const insereConteudo = document.createTextNode('aqui vai um texto');

// criaNovaDiv.appendChild(insereConteudo);

// const contemConteudo = document.getElementById('container');
// document.body.insertBefore(criaNovaDiv, contemConteudo);

// }

let arrayTag = [
    {tag: 'h1', texto:'Herles'},
    {tag: 'h2', texto: 'Sabrina'},
    {tag: 'h3', texto: 'Julia'},
    {tag: 'h4', texto: 'Camila'}
];

const container = document.querySelector('#container');
const div = document.createElement('div');

for(let i = 0; i < arrayTag.length; i++){
    let {tag, texto} = arrayTag[i]; //assossiação via desistruturação
    let criarTag = document.createElement(tag);

    criarTag.innerHTML = texto;
    div.appendChild(criarTag);

    //console.log(arrayTag[i]);
}

container.appendChild(div);