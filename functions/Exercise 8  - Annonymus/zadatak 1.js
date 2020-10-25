// Write IIFE that replaces the first and the last element of the given array and prints out its elements.
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

(function () {
  var input = [4, 5, 11, 9];
  var result = [];

  for (var i = 0; i < input.length; i++) {
    if (i === 0) {
      result[i] = input[input.length - 1];
      continue;
    }
    if (i === input.length - 1) {
      result[i] = input[0];
      continue;
    }
    result[i] = input[i];
  }
  console.log(result);
})();
