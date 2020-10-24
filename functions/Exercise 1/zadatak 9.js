// Write a program that calculates the sum of odd elements of a given array.

// Spoj od prethodnih zadataka
// input: Array
// output number

// 1. Treba da prodjemo SVE elemente (for petlja)
// 2. Treba da "izaberemo" one koji su nam interesantni (neparni)
// 3. Treba da ih saberemo

function sumOdd(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      // svi brojevi koji "dodju do ovde" su neparni
      // nema potrebe da pravimo NOVI niz u koji dodajemo ove brojeve
      // zadatak trazi da saberemo, ne da cuvamo novi niz
      sum = sum + arr[i];
    }
  }
  return sum;
}

// PAZNJA: treba proslediti ARRAY sa brojevima, ne brojeve sa zarezom
console.log(sumOdd([1, 3, 2, 4, 8])); // 4
console.log(sumOdd([1, 3, 2, 5, 6])); // 9
console.log(sumOdd([2, 4, 8])); // 0

// =====================================================================================================================

// Koristeci predefinisane methode-e sa Array-a
function sumOdd(arr) {
  return arr.reduce(function (zbir, trenutni) {
    if (trenutni % 2 != 0) {
      return zbir + trenutni;
    }
    return zbir;
  }, 0);
}

// =====================================================================================================================

// Naravno moze i krace - jednom ce te i vi da pricate ko vanzemaljci, a ovo dole vam je primer zasto kazem
// da mi je favorite past-time activity da gledam Junior-e kako se muce sa reduce-om
[1, 3, 2, 4, 8].reduce((a, c) => (c % 2 != 0 ? a + c : a));
