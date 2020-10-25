// Write a program that calculates a number of integer values in the array.

// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

// prolazimo ceo array
// izbacujemo sve sto nije broj, jeste NaN ili jeste Infinite

var input = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

function countInts(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i]) || !isFinite(arr[i])) {
      continue;
    }
    // sad imamo samo brojeve, decimalne i cele
    // ako sada konvertujemo sve brojeve u int putem parseInt
    // i potom proverimo da li je broj pre i posle konvertovanja isti
    // na ovaj nacin znacemo koji su bili celi a koji su bili decimalni
    if (arr[i] === parseInt(arr[i])) {
      counter++;
    }
  }
  return counter;
}

console.log(countInts(input));
