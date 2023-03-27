function criarData(segundo){
    const data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });    
}


// function criaTempo(segundos){
//     const data = new Date(segundos * 1000);
//     return data.toLocaleTimeString('pt-BR', {
//     hour12: false,
//     timeZone: 'GMT'
//     });
// }

//console.log(criaTempo(10));

// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
const relogio = document.querySelector('.relogio')

let segundos = 0;
let timer

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarData(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const capturar = e.target;

    if (capturar.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if(capturar.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
    if (capturar.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
});

// iniciar.addEventListener('click', function(){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function(evento){
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// });

// zerar.addEventListener('click', function(evento){
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// });

//const segundo = 0;

//  function iniciarRelogio(){
//     const timer = setInterval(function(){
//         segundo++;
//         relogio.innerHTML = criaTempo(segundo);
//      }, 1000);
// }
// iniciar.addEventListener('click', function(evento){
//    iniciarRelogio();
//     //relogio.innerHTML = 'teste 2';
// })