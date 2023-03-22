//executa uma carefa constante 
const iniciarScript = setInterval( function (){
    console.log('executou')
}, 5000)
//eu paro a setInterval depois de 20s
setTimeout(function (){
    clearInterval(iniciarScript)
    console.log('tarefa parada ')
}, 20000)
