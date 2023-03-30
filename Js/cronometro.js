
function formatData(segundo){
    const data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'UTC'
    });
}
//console.log(formatData(10))

const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');
const pausar = document.querySelector('.pausar');
const relogio = document.querySelector('.relogio');

let segundos = 0;
let contar;

document.addEventListener('click', function(e){
    const elemento = e.target;

if(elemento.classList.contains('zerar')){
    relogio.classList.remove('pausado');
    clearInterval(contar);
    relogio.innerHTML = '00:00:00';//volta ao status inicial
    segundos = 0; //iniciar a contagem do zero
    }
if(elemento.classList.contains('iniciar')){
    relogio.classList.remove('pausado');//retiro a cor quando aperto botão
    clearInterval(contar);//não rodar dois contarCronometro duas vezes
    contarCronometro();
}
if(elemento.classList.contains('pausar')){//estou selecionando as classses de html
    clearInterval(contar);//serve para parar ou pausar o cronometro
    relogio.classList.add('pausado');
}
});
function contarCronometro(){
    contar = setInterval(function(){
        segundos++;
        relogio.innerHTML = formatData(segundos);
    }, 1000 );
}

// iniciar.addEventListener('click', function(){
//     relogio.classList.remove('pausado');//retiro a cor quando aperto botão
//     clearInterval(contar);//não rodar dois contarCronometro duas vezes
//     contarCronometro();
// });
// pausar.addEventListener('click', function(){
//     clearInterval(contar);//serve para parar ou pausar o cronometro
//     relogio.classList.add('pausado');
// });
// zerar.addEventListener('click', function(){
//     relogio.classList.remove('pausado');
//     clearInterval(contar);
//     relogio.innerHTML = '00:00:00';//volta ao status inicial
//     segundos = 0; //iniciar a contagem do zero
// });