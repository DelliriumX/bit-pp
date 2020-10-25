// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

// Prolazimo kroz array i identifikujemo min i max a cuvamo njihove indexe
// Potom prepisujemo elemente 1 po 1 ali umesto min pisemo max i obratno

function swap(arr) {
  var min = Infinity;
  var minIndex;
  var max = -Infinity;
  var maxIndex;
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (i === minIndex) {
      result[i] = max;
    } else if (i === maxIndex) {
      result[i] = min;
    } else {
      result[i] = arr[i];
    }
  }
  return result;
}

console.log(swap([3, 500, 12, 149, 53, 414, 1, 19]));
