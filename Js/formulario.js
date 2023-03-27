const dados = document.querySelector('.inserir-dados');
const botao = document.querySelector('.botao-enviar');
const tarefa = document.querySelector('.tarefa-visualizar');



//criando uma li dentro da ul para mostrar o texto
function criarLi(){
    const li = document.createElement('li');
    return li;
}
//capturando o texto do input e apresentando na tela
// function pegarTexto(){
//     const li = criarLi();
//     const textoInput = dados.value;
//     li.innerText = textoInput;
//     tarefa.appendChild(li);
// }
function pegarTexto(textoInput){
    const li = criarLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
}
//capturar o click do botao
botao.addEventListener('click', function(){
    if(!dados.value) return;
    //console.log(dados.value)
    pegarTexto(dados.value);
});