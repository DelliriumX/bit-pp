// Zadatak 2
// Write a program that checks if a given number is odd.

// Rekli smo da sa modulom (%) proveravamo da li je broj deljiv sa deliocem koji koristimo
// parni (even) brojevi su svi brojevi deljivi sa 2
// neparni (odd) brojevi su svi koji NISU deljivi sa dva

// operator % vraca ostatak pri deljenju:
// ostatak se racuna kao sve sto ne moze da bude ceo broj. Primer:

// deljenik / delilac = rezultat (ostatak)
// 8 / 5 = 1 (3)
// 7 / 3 = 2 (1)
// 3 / 2 = 1 (1)
// 4 / 2 = 2 (0)

// ostatak pri deljenju NIKADA ne moze biti VECI od delioca
// u suprotnom bi se rezultat porastao a ostatak opao
// dakle ostatak je uvek broj od [0] do [delilac - 1]

// kad delimo sa 2, ostatak je broj od 0 do 1

// ako nam operator modulo (%) vrati broj 0, to znaci da je deljenik
// deljiv sa deliocem BEZ ostatka.

function isOdd(broj) {
  if (broj % 2 === 0) {
    return false;
  }
  return true;
}

console.log(isOdd(5));    // true
console.log(isOdd(2));    // false
console.log(isOdd(4));    // false
console.log(isOdd(3));    // true
