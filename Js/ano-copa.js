function pulaLinha(){
    document.write('<br>');
}
function digiteFrase(frase){
    document.write(frase);
    pulaLinha();
}
var anoCopa = parseInt(prompt('digite um ano '));
var anosDeCopa = 1930;

while (anosDeCopa < anoCopa){
    anosDeCopa = anosDeCopa + 4;
    digiteFrase('Ano da Copa ' + anosDeCopa);
}