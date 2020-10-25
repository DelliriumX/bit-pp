// Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

// zadao mi je vise muke nego sto bih voleo da priznam......

// logika je malo drugacija od prethodnog - ovo ako (a bice) pitanja, na casu, predugo je da se
// objashnjava pisanjem

function nemamDobroIme(arr) {
  var min1 = arr[0];
  var min2 = Infinity;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }

  if (arr.length === 1) {
    return arr[0];
  }
  return min2;
}

// =====================================================================================================================

// s druge strane koristeci array mehtode je super easy:

[4, 2, 2, -1, 6].sort().filter((e, i, a) => a.indexOf(e) === i)[1];
