//  Ubacimo dati STRING unutar drugog STRINGA
//  na poziciju koja nam je data

//  input: string a, string b, broj
//  output: string

// ideja je da kopiramo prvi string SLOVO PO SLOVO dok ne dodjemo do mesta
// gde treba da ubacimo drugi string
// zatim cemo drugi string U CELOSTI (jer nema nikakve potrebe za slovo po slovo)
// nalepiti i odmah potom nastaviti dalje ko da se nista nije desilo

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