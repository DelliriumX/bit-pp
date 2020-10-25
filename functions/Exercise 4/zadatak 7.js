// Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

// S obzirom da su array-evi iste duzine, nema potrebe da prolazimo kroz oba
// umesto toga dodajemo redom elemente iz oba

function intertwine(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    result[result.length] = a[i];
    result[result.length] = b[i];
  }
  return result;
}

console.log(intertwine([4, 5, 6, 2], [3, 8, 11, 9]));
