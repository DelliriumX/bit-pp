// Use the following array to make a new one by dividing its values by two and adding 5.
// If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

// Pravimo novi array (prazan)
// radimo neke magije matematicke i prepisujemo rezultate u novi niz
// vracamo novi array

function doStuff(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var broj = arr[i] / 2 + 5;
    if (broj === 0) {
      broj = 20;
    }
    result[i] = broj;
  }
  return result;
}

console.log(doStuff([3, 500, -10, 149, 53, 414, 1, 19]));
