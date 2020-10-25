// Write a program that inserts a given element e on the given position p in the array a.
// If the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

// Prolazimo elemente i redom ih prepisujemo
// kad naidjemo na poziciju P, PRVO cemo da ubacimo element
// a potom cemo da nastavimo prepisivanje

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];

function insert(el, pos, arr) {
  var result = [];

  if (pos > arr.length) {
    console.log("Error, position must be less than array length");
    return;
  }
  for (var i = 0; i < arr.length; i++) {
    if (i === pos) {
      result[result.length] = el;
    }
    result[result.length] = arr[i];
  }
  return result;
}

console.log(insert(e, p, a));

// =====================================================================================================================

// moramo da kloniramo arrary jer splice MENJA originalni.
// slice() - bez parametara klonira array, ako nam originalni nije bitan dovolno je napisati:
//        
//        a.splice(pos, 0, el);  console.log(a)

function usingSplice(el, pos, arr) {
  var clone = arr.slice();
  clone.splice(pos, 0, el);
  return clone;
}


