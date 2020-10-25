// Write a function that returns a function that calculates a decimal value of the given octal number.
// Input: 034
// Output: 28

function vratiDruguFunkciju(octal) {
  return function drugaFunkcija() {
    return Number(octal);
  };
}

var dajDecimalni = vratiDruguFunkciju(034);

var rezultat = dajDecimalni();

console.log(rezultat);
