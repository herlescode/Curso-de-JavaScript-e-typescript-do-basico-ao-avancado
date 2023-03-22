function pulaLinha(){
    document.write('<br>');
}
function mostraTela(frase){
    document.write(frase);
    pulaLinha();
}
var num = Math.floor(Math.random() * 10 + 1);

var numdigitado = parseInt(prompt('digite um número de 1 a 10'));

if (numdigitado == num){
    document.write('você acertou ' + num);
}else {
    document.write('Você errou ' + num);
}