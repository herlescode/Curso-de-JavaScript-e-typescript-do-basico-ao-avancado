function pulaLinha(){
    document.write('<br>');
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
function calculaImc(peso, altura){
    return peso / (altura * altura);
}
var nome = prompt('Digite seu nome ');
var num = prompt(nome + 'Digite seu peso ');
var num1 = prompt(nome + 'Digite sua altura ');

var imc = calculaImc(num, num1);

document.write (nome + ' seu peso é ' + num + ' sua altura é ' + num1 + ' e seu IMC é ' + Math.round(imc));

if (imc < 18.5){
    mostra(' seu imc esta abaixo ');
}else if (imc > 18.5 && imc < 25){
    mostra(' você está normal'); 
}else if (imc >= 25 && imc < 30){
    mostra(' você está com obesidade');
}else if(imc >= 30 && imc <= 39){
    mostra(' vc está com obesidade nivel 2');
}else {
    mostra(' você morreu e não sabe')
}