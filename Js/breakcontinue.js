const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i of numeros){
//     if (i === 7){
//         // console.log('pulei o numero 7');
//     continue;
//     }
//     if (i === 8){
//         console.log('estou dando no pé');
//         break;
//     }
//    console.log(i);
//}

let i = 0;
do {
    let numero = numeros[i];

    if(numero === 2) {
        console.log('pulei o numero 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7){
        console.log('pulei o numero 7');
        i++;
        break;
    }
    i++;
}while ( i < numeros.length);
