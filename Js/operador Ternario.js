//operador ternario ? :
const valor = 1000;
/*if(valor == 1000){
    console.log ('usuário vip');
}else {
    console.log ('usuário normal');
}*/
const pontuacao = valor >=1000 ? 'usuário vip' : 'usuário normal';

const cor = null;
const corPadrao = cor || 'preta';

console.log (pontuacao, corPadrao);