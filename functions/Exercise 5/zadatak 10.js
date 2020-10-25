// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

// svi brojevi su deljivi sa 1
// svi brojevi su deljivi sa samim sobom
// svi brojevi mogu biti deljivi SAMO sa brojevima manjim od samih sebe

// dakle treba samo da utvrdimo da broj NIJE deljiv ni sa jednim drugim brojem
// manjim od sebe, koji nije broj 1. Pravimo petlju koja krece od 2 i ide do broja
// ako nije deljiv ni sa jednim, to je primarni

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(17))
console.log(isPrime(15))
