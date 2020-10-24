// Zadatak 4.
// Write a function to count the number of letter occurrences in a string.

// Radili malopre u Excercise 1. Zadatak 10

// Zato cemo sad malo sa predefinisanim

function countLetters(str, trazenoSlovo) {
  return str.split("").filter(function (slovo) {
    return slovo === trazenoSlovo;
  }).length;
}

console.log(countLetters("My random string", "n")); // 2
console.log(countLetters("Abrakadabra", "a")); // 4
