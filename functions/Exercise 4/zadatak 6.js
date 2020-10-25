// Write a program that checks if a given array is symmetric.
// An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: true / false.

// Citamo array sa oba kraja i gledamo da li su elementi jednaki
// idemo od 0 do POLA array-a

function symetric(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(symetric([2, 4, -2, 7, -2, 4, 2]));
