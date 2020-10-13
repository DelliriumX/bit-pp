// Proverimo da l ije broj prost
// Prosti brojevi su deljivi SAMO sa 1 i samim sobom
// 1 nije prost broj

//  input: broj
//  output: true || false

function isPrime(broj) {
    if (broj === 1 || broj === 0) {
        return false
    }
    if (broj === 2) {
        return true
    }
    for (var i = 2; i < broj; i++) {
        if (broj % i === 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(8))
console.log(isPrime(11))