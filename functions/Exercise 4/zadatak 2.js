// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var input = [-3, 11, 5, 3.4, -8];

function double(arr) {
  var dupli = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      // pozitivne dupliramo
      dupli[i] = arr[i] * 2;
    } else {
      // negativne prepisujemo
      dupli[i] = arr[i];
    }
  }
  return dupli;
}

// =====================================================================================================================

input.map(function (e) {
  if (e > 0) {
    return e * 2;
  }
  return e;
});

// ili krace - tj direktno konvertujemo array

[-3, 11, 5, 3.4, -8].map((e) => (e > 0 ? e * 2 : e));
