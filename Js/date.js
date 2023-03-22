//const data = new Date();
//inserir valores horas minutos segundos, só não pode omitir o ano e o mês
//const data = new Date(2023, 2, 17); //a, m, d, h, M, s, ms
//console.log (data.toString());


//-------------nestas funções estamos inserindo formato de data e hora um por um e criando uma function para inserir o 0 para numero menores de 10
/*
function inserirZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = inserirZero(data.getDate());
    const mes = inserirZero(data.getMonth() + 1);
    const ano = inserirZero(data.getFullYear());
    const hora = inserirZero(data.getHours());
    const min = inserirZero(data.getMinutes());
    const seg = inserirZero(data.getSeconds());
 
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
*/

//----------
// const data =  new Date('2019-10-07 22:52:00');
// let diaSemana  = data.getDay();
// let odiaSemana = data.getDate();
// let oAno = data.getFullYear();
// let mesAno = data.getMonth();
// let hora = data.getHours();
// let minutos = data.getMinutes();
// const diaDaSemanaTexto = getDayWeek(diaSemana);
// const mesDoAno = getMonthAno(mesAno);



// function getDayWeek(diaSemana) {
//     let diaDaSemanaTexto;

//     switch (diaSemana){
//         case 0:
//             diaDaSemanaTexto = 'Domingo';
//             return diaDaSemanaTexto;
//         case 1:
//             diaDaSemanaTexto = 'Segunda';
//             return diaDaSemanaTexto;
//         case 2:
//             diaDaSemanaTexto = 'Terça';
//             return diaDaSemanaTexto;
//         case 3:
//             diaDaSemanaTexto = 'Quarta';
//             return diaDaSemanaTexto;
//         case 4:
//             diaDaSemanaTexto = 'Quinta';
//             return diaDaSemanaTexto;
//         case 5:
//             diaDaSemanaTexto = 'Sexta';
//             return diaDaSemanaTexto;
//         case 6:
//             diaDaSemanaTexto = 'Sábado';
//             return diaDaSemanaTexto;
//         default :
//             diaDaSemanaTexto = ' ';
//             return diaDaSemanaTexto;
//     }
// }

// function setResultado(msg, validar) {
//     const result = document.querySelector('.conteudo');
//     result.innerHTML = `${diaDaSemanaTexto}, ${odiaSemana} de ${mesDoAno} de ${oAno} <br> ${hora}:${minutos}`;
  
// }

// function getMonthAno() {
//     let mes;

//     switch (mesAno) {
//         case 0:
//             mes = 'janeiro';
//             return mes;
//         case 1:
//             mes = 'fevereiro';
//             return mes;
//         case 2:
//             mes = 'março';
//             return mes;
//         case 3:
//             mes = 'abril';
//             return mes;
//         case 4:
//             mes = 'maio';
//             return mes;
//         case 5:
//             mes = 'junho';
//             return mes;
//         case 6:
//             mes = 'julho';
//             return mes;
//         case 7:
//             mes = 'agosto';
//             return mes;
//         case 8:
//             mes = 'setembro';
//             return mes;
//         case 9:
//             mes = 'outubro';
//             return mes;
//         case 10:
//             mes = 'novembro';
//             return mes;
//         case 11:
//             mes = 'dezembro';
//             return mes;
//     }
// }
// console.log (setResultado())

const result = document.querySelector('.conteudo');
const data =  new Date();

 result.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
 
 /*podemos usar dentro do innerHTML
 opcoes)} <br> ${data.getHours()}:${data.getMinutes()}
 com esse codigo depois do new Date();
 const opcoes = {
     dateStyle: 'full',
     //timeStyle: 'short'
 };*/