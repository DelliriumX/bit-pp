// Pronalazimo POSLEDNJU pojavu karaktera
// string = array karaktera

//  input: karakter, string za pretragu
//  output: pozicija karaktera || -1

function findChar(char, text) {
  var position = -1;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === char) {
      position = i + 1;
    }
  }
  return position;
}

// =====================================================================================================================

// alternativno mozemo da kao u prethodnom zadatku trazimo PRVU pojavu, ali od nazad:
// krecemo od poslednjeg elementa, idemo do nule (ukljucujuci i nulu)

function findChar2(char, text) {
  for (var i = text.length - 1; i >= 0; i--) {
    if (text[i] === char) {
      return i;
    }
  }
  return -1;
}

// =====================================================================================================================

// I naravno postoji i laksi nacin uz predefinisane
function findChar3(char, text) {
  return text.length - 1 - text.split("").reverse().indexOf(char);
}
