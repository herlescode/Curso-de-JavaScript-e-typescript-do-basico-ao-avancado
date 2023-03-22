function pulaLinha(){
    document.write('<br>');
}
function mostrar(frase){
    document.write(frase);
    pulaLinha();
}
var vitorias = parseInt(prompt (' por favor digite o número de vitorias'));
var empates = parseInt(prompt (' por favor digite o número de empates'));
var soma = (vitorias * 3 ) + empates;

mostrar(' o numero de vitorias e empates somado é ' + soma);

if (soma > 28){
    document.write('seu time está melhor que o ano passado');
} else if (soma == 28){
    document.write('seu time não mudou ');
} else if (soma < 28){
    document.write('seu time é uma lastima');
} else {
    document.write('Digite empates e vitorias do seu time');
}