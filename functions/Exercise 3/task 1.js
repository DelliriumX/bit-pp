//  Ubacimo dati STRING unutar drugog STRINGA
//  na poziciju koja nam je data

//  input: string a, string b, broj
//  output: string

function fn(insert, text, pos) {
    var result = '';

    for (var i = 0; i < text.length; i++) {
        if (i === pos) {
            result += insert
        }
        result = result + text[i]

    }
    return result
}

console.log('adadwadawdaw')
console.log(fn('JS ', 'My random string', 10))