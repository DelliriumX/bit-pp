// Define a 10 element array. 
// Take the first two letters from every string (that has at least 2 letters)
// in the array and create a new string from them. Print it out in the console.

// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

// 1. Moramo da uzmemo prva slova od svakog STRINGA, sve sto nije string nas ne interesuje
// 2. Ako je element string, proveravamo duzinu, i ako je ona 2 or more, uzimamo prva 2 slova

var input = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

function randomTask(arr){
  var result = ''
  for(var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
      if (arr[i].length > 1) {
        result += arr[i][0] // prvo slovo
        result += arr[i][1] // drugo slovo
      }
    }
  }
  return result
}

console.log(randomTask(input))