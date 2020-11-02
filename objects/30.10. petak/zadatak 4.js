// Pretvoriti dati input string u novi string,
// kojem je svako drugo slovo veliko i svako slovo A veliko


var input = "abrakadabra"

var velika = input.split('').map(function (e, i) {
    if (e === 'a' || i % 2 === 1) {
        return e.toUpperCase()
    }
    return e
}).join('')

// Sva velika slova pretvoriti u zvezdice

var zvezdice = velika.split('').map(function (element) {
    if (element === element.toUpperCase()) {
        return '*'
    }
    return element
}).join('')
console.log(zvezdice)

var razmak = zvezdice.split('**').join('* *')
console.log(razmak)