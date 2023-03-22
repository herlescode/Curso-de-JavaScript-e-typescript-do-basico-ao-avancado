// for classico - funciona com interaveis (array ou string)
//for in - retorna o indice ou chave (string, array ou objetos)
//for of - retorna o valor em si (interaveis, array ou  strings)
const frutas = [
    'maça',  'uva', 'limão', 'melão'
];

// for(let todasFrutas in frutas){
//     console.log (frutas[todasFrutas])
// }

// const pessoa = {
//     nome: 'Herles',
//     idade: 41,
//     altura: 1.80 
// };

// const dado = 'altura';
// console.log(pessoa[dado]);

// for(let final of frutas){
//     console.log (final);
// }

frutas.forEach((dadosPessoais, indice) => {
   console.log(dadosPessoais, indice);
        
 });

