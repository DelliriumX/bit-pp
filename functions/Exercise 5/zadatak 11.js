// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

// Ovo smo vec radili sa array-evima
// a s obzirom da string mozemo da CITAMO kao array,
// zadatak je maltene pa copy paste. Jedina razlika je sto imamo
// razmake, ali to cemo lako da resimo konverzijom iz stringa u array
// prilikom cega necemo pisati razmake

function palindrome(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      arr[arr.length] = str[i];
    }
  }
  for (var i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("Geek"));
console.log(palindrome("a nut for a jar of tuna"));

// =====================================================================================================================

function palindrome(str) {
  var arr = str.split('').filter(function (e) {
    return e !== " ";
  });
  return arr.join('') === arr.reverse().join('')
}
