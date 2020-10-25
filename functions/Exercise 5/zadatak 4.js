// Sort a previously defined array.
// Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

// S obzirom da smo sada vec prosli "metode" i "objekte" ovo nije tako tesko samo moramo da poznajemo
// predefinisane metode nad arrayom.

var input = [13, 11, 15, 5, 6, 1, 8, 12];
var novi = input
  .sort(function (a, b) {
    return a - b;
  })
  .map(function (el) {
    return el * 2;
  });

console.log(novi);

// =====================================================================================================================

input.sort((a, b) => a - b).map((e) => 2 * e);
