function numeroRandomico(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
  const min = 1;
  const max = 30;
  let rand = numeroRandomico(min, max);
  
//   while (rand !== 10){
//     rand = numeroRandomico(min, max);
//     console.log(rand);
//   }

do {
    rand = numeroRandomico(min, max);
    console.log(rand);
} while(rand !== 10);