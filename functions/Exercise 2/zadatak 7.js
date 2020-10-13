// Konvertujemo string u array karaktera
//  space se konvertuje u null

// input: neki string / text
// output: array

function str2arr(text) {
    result = [];

    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            result[result.length] = null
        } else {
            result[result.length] = text[i]
        }
    }
    return result
}

var a = str2arr("petar petrovic pera")
console.log(a)