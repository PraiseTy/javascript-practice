let isPrime = true;
 
let i =2;
while(i <= 100){
  let j=2;
  while(j < i - 1){
    if(i % j == 0){
      isPrime = false;
      break;
    }
    j++;
  }
  if(isPrime){
    console.log(i);
  }
  isPrime = true;
  i++;
}