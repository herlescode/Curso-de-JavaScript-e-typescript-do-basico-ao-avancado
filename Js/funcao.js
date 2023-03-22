function greet (){
    console.log(this)
}
// const me = {
//     nome: 'Herles',
//     greet(){
//         console.log(this)
//     }
// }
//me.greet()

//-----------
function retornoDaIdade(age){
    return age - 18
}
const retorno = retornoDaIdade(41);
//console.log(retorno)
function sum(a, b){
    console.log(this);
    return a + b
}
const me = {nome: 'Herles'}

//-------------
const getRemainingYears = (age) => {
    return age - 18;
}

const formTwo = (age2) => age2 - 18;
//-------------
function sum1 (a, b){
    console.log(a, b);
    return a + b
}
function sum2 (a, b){
    return arguments[0] + arguments[1];
}
//---------------
const soma = (a = 1, b = 5) => a + b 
const result = soma()
console.log(result);

const mostraNaTela = somaHoisting(4, 85)
function somaHoisting (a = 1, b = 89) {
    return a + b
}
console.log (mostraNaTela);
//-----------------

