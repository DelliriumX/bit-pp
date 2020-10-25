// Write a program to filter out falsy values from the array.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

var input = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function theTruth(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i]) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

console.log(theTruth(input));
