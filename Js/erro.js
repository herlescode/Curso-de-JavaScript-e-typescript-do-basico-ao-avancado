

// function soma(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new EvalError('y ou x não são numeros');
//     }
//     return x + y;
// }
// try{
//     console.log(soma(5,7));
//     console.log(soma(5,'7'));
// } catch(error) {
//     console.log('entre em contato com o administrador do sistema');
    
// }

//-------com o Finaly--------------

try {
    console.log('execução');
    console.log('a');
    try {
        console.log(g); 
    }catch {
        console.log ('erro do segundo try');
    }finally {
        console.log('também passo por aqui na finaly 1');
    }

}catch { //sou executado quando tiver um erro evidente
    console.log('aqui foi gerado um erro');
}finally { //dando erro ou não sempre é executado
    console.log('sempre vai passar por aqui');
}