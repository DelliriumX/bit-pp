// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

var input = "Belgrade Institute of Technology";

function reverse(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  return result;
}

console.log(reverse(input));

// =====================================================================================================================

input.split("").reverse().join("");

