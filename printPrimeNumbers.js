const isPrime = (number) => {
  if (number == 1){
      return false
  }
  for (let i = 2; i <= Math.sqrt(number); i++){
      if (number % i == 0){
          return false
      }
  }
  return true
}


const number = Array.from({length: 100}, (_, index) => index + 1)
const primeNumbers = number.filter(isPrime)
console.log(primeNumbers)
