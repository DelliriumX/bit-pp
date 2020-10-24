// Zadatak 3
// Write a program that checks if a given number is a three digit long number.

// Ne mozemo da proveravamo DUZINU broja, za razliku od Array-a i Stringa oni nemaju
// ono cuveno .length. Stoga mozemo da proverimo ovo na dva nacina:

// Nacin 1: Matematicki - Trocifreni brojevi su svi brojevi od 100 - 999
// Nacin 2: Konverzijom - Pretvoricemo broj u string i videti duzinu

function prviNacin(num) {
  if (num >= 100 && num < 1000) {
    return true;
  }
  return false;
}

function drugiNacin(num) {
  return String(num).length === 3;
}

console.log(prviNacin(101)); // true
console.log(prviNacin(1322)); // false
console.log(drugiNacin(644)); // true
console.log(drugiNacin(1053)); // false
