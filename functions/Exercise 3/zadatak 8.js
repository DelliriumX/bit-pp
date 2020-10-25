// Zadatak 8.
// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

// input: text
// output: broj pronalazaka

function find(str, find) {
  // nalepicemo dodatno space na kraju da bi smo detektovali
  // i psolednju rec, inace bi se petlja samo zavrsila i mi
  // ne bismo proverili da li se reci slazu
  var str = str + " ";
  var word = "";
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      // kopiramo slovo po slovo AKO NIJE space
      word += str[i];
    } else {
      // ako jeste space, zavrsili smo rec
      // gledamo da li je to nasa trazena rec
      if (word === find) {
        counter++;
      }
      // na kraju resetujemo rec na prazan string da krenemo novu
      word = "";
    }
  }
  return counter;
}

// =====================================================================================================================

// Ili na primer:

function find(str, find) {
  return str.split(" ").filter(function (rec) {
    return rec === find;
  }).length;
}

// =====================================================================================================================

// Treba imati na umu da koristeci predefinisane funkcije mi samo gomilamo "kod" ako ih uvek stavljamo u nase funkcije
// ako vec koristimo ove stvari treba ih koristiti pravilno - pa ako imamo definisane variable (a u realnom svetu cemo ih imati)
var str = "The quick brown fox";
var find = "fox";

// onda je taj ceo code od gore ovo:
str.split(" ").filter((e) => e === find).length;
