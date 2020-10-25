// Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var input = [2, 8, 11, 4, 9, 3];

function kriterijum(e) {
  return e % 2 !== 0;
}

function filter(arr, callback) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

console.log(filter(input, kriterijum));



// =====================================================================================================================


// Upravo smo napisali nativnu funkciju .filter nad arrayom. Ako koristimo ove funkcije sve sto treba je da uradimo:

var res = input.filter(kriterijum)
console.log(res);

