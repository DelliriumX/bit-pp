// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”

var input = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function joinTheDarkSide(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i] !== undefined &&
      arr[i] !== null &&
      !isNaN(arr[i]) &&
      arr[i] !== Infinity
    ) {
      result += arr[i];
    }
  }
  return result;
}

console.log(joinTheDarkSide(input));
