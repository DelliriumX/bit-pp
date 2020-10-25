// Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

// Brisanje elementa cemo raditi tako sto cemo SVE OSTALE prepisivati, jedno po jedno

function del(el, arr) {
  result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != el) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

console.log(del(2, [4, 6, 2, 2, 8, 2, 2]));

// =====================================================================================================================

// Rekli smo na casu postoji .filter za upravo ovo:

[4, 6, 2, 2, 8, 2, 2].filter(function (element, index) {
  return element !== 2;
});

// ili krace:

[4, 6, 2, 2, 8, 2, 2].filter((e) => e !== 2);
