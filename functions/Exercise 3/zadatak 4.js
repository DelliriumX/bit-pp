// Zadatak 4.
// Write a function that reverses a number. The result must be a number.

// 1. Pretvaramo u string da bi smo mogli proci kroz ovo cifru po cifru
// 2. Prolazimo kroz string od kraja ka pocetku i prepisujemo ga u novi string
// 3. konvertujemo nazad u broj jer zadatak to trazi

function reverse(num) {
  var str = String(num);
  var noviStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    noviStr += str[i];
  }
  return Number(noviStr);
}

console.log(reverse(12345));

// =======================================================================================================

// ajmo uz metode

console.log(Number(String(12345).split("").reverse().join("")));
