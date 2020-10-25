// Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

// Postavimo min na pocetnu vrednost Infinity jer je to NAJVECI broj i od njega je sve manje (dakle nece uticati - neutralan je)
// Prolazimo ceo array i ako nadjemo broj koji je MANJI od trenutnog minimuma, prepisemo ga i zabelezimo mu index

function findMin(arr) {
  var min = Infinity;
  var minIndex;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  console.log(min, minIndex);
}
