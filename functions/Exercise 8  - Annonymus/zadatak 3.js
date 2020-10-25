// Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
// 	Input: prograMming
// 	Output: progra**ing, 2

(function () {
  var input = "prograMming";
  var result = "";
  var counter = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] === "m" || input[i] === "M") {
      result += "*";
      counter++;
      continue;
    }
    result += input[i];
  }
  console.log(result, counter);
})();


// moze se isto napisati i sa "if / else" umesto continue, ali forsiram sad continue jer ga niste koristili