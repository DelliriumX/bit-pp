// Napisati funkciju, koja ce da primi neki string
// rezultat funkcije (return) treba da bude isti taj string
// sa razlikom u tome sto je predzadnje slovo, pretvoreno
// u veliko slovo.

function nekoIme(str) {
    var niz = str.split('')
    var poslednje = niz.pop()
    var pretposlednje = niz.pop()
    niz.push(pretposlednje.toUpperCase())
    niz.push(poslednje)
    return niz.join('')
}

var rezultat = "neki nas string".split('').map(function (el, i, niz) {
    if (i === niz.length - 2) {
        return el.toUpperCase()
    }
    return el
}).join('')

console.log(rezultat)

var promena = nekoIme("Abrakadabra")
console.log(promena)