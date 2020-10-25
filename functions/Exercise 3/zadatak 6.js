// Zadatak 6.
// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function fill(count, element) {
  var result = [];
  for (var i = 0; i < count; i++) {
    result[i] = element;
  }
  return result;
}

console.log(fill(6, 0));
console.log(fill(2, "none"));
console.log(fill(2, null));
