// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

var input = ["1", "21", undefined, "42", "1e+3", Infinity];

function toNumbers(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var broj = Number(arr[i]);
    if (!isNaN(broj) && isFinite(broj)) {
      result[result.length] = broj;
    }
  }
  return result;
}

console.log(toNumbers(input));
