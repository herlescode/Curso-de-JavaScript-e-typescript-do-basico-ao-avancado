function criaTempo(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
    });
}
console.log(criaTempo(10));

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const relogio = document.querySelector('.relogio')

iniciar.addEventListener('click', function (evento){
    relogio.innerHTML = 'teste 2'
    
});

//     let segundos = 0;
//     let minutos = 0;
//     let horas = 0;



// iniciar.onclick = function segundo() {
//     segundos++;
//     document.getElementById('relogio1').innerHTML = segundos;
// }
// setInterval( function (){
//     segundo()    
// }, );
