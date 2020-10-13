// Pronalazimo PRVU pojavu karaktera
// string = array karaktera

//  input: karakter, string za pretragu
//  output: pozicija karaktera || -1

function findChar(char, text) {
    var position = -1
    for (var i = 0; i < text.length; i++) {
        if (text[i] === char) {
            position = i + 1
        }
    }
    return position
}