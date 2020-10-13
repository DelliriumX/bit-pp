//  Vraca prvih n karaktera + "..."
//  input:  text, broj n
//  output: string

function getChars(text, x) {
    var result = ''

    for (var i = 0; i < x && i < text.length; i++) {
        result = result + text[i]
    }
    if (x < text.length) {
        result = result + '...'
    }

    return result;
}

console.log(getChars("Stefane proveri svoje resenje", 100))