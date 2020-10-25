//  Write a function that says whether a number is perfect.

//  Note: According to Wikipedia: In number theory, a perfect number is a positive integer
//  that is equal to the sum of its proper positive divisors, that is, the sum of its positive
//  divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect
//  number is a number that is half the sum of all of its positive divisors (including itself).

//  E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors,
//  and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive
//  divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
//  This is followed by the perfect numbers 496 and 8128.

//  Dakle treba da saberemo SVE brojeve sa kojima je dati broj deljiv
//  ako njihov zbir daje taj isti broj, u pitanju je perfektan broj
//  petlju pocinjemo od 2 (jer ne smemo da delimo sa nulom, a takodje
//  svi brojevi su deljivi sa 1. Petlja ide DO (ali ne i ukljucujuci)
//  broj koji nam je dat. Pocinjemo od broja 1 (koji je preskoce u petlji)
//  jer znamo da on jeste delilac.

//  Ako naidjemo na broj koji je delioc bez ostatka dodajemo ga u listu
//  Na kraju sabiramo listu i poredimo je sa dobijenim brojem

function perfectNumber(num) {
  var suma = 1;

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      suma += i;
    }
  }
  return suma === num;
}

console.log(perfectNumber(28));
console.log(perfectNumber(27));
