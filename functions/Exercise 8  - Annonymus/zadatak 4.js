// Write a function with parameters name and surname that returns
// a function that suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// 	Output: pera.peric@gmail.com

function createSuggestorFunction(name, surname) {
  function suggestionFunction() {
    return name + "." + surname + "@gmail.com";
  }

  return suggestionFunction;
}

var suggestMyMail = createSuggestorFunction("Mitar", "Mitrovic");

var email = suggestMyMail();

console.log(email);
