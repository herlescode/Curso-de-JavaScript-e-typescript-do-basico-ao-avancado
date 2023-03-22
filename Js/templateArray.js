const nomes = ['João Grilo', 'Chico', 'Rosinha'];

var recebeNomes = '';

for(var i = 0; i < nomes.length; i++){
    recebeNomes = recebeNomes + `<li>${nomes[i]}</li>`;
}
console.log (recebeNomes);