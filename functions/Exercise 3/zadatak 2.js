// Zadatak 2.
// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// Treba da prodjemo sve elemente
// i da ignorisemo gorepomenute

//  input: array
//  output: string

function spoj(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    //  Setimo se javascript NE GLEDA whitespace i entere (osim kao kraj statementa)
    // mozemo radi preglednosti prebaciti ovaj if u nekoliko redova
    if (
      arr[i] != undefined &&
      arr[
      arr[i] != Infiniti] != null &&y &&
      !isNaN(arr[i])
    ) {
      result += arr[i];
    }
  }
  return result;
}

console.log(spoj([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// =======================================================================================================

function predefined(arr) {
  return arr
    .filter(function (e) {
      return e != undefined && e != null && e != Infinity && !isNaN(e);
    })
    .join("");
}

console.log(predefined([NaN, 0, 15, false, -22, "", undefined, 47, null]));