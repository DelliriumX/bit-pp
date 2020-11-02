// iz niza brojeva, izbaciti sve brojeve koji nisu 2 i 5

var input = [1, 5, 8, 2, 4, 7, 5, 6, 5, 2, 4, 2, 7]

var rez = []
for (var i = 0; i < input.length; i++) {
    if (input[i] === 2 || input[i] === 5) {
        rez[rez.length] = input[i]
    }
}
console.log(rez)

var nasNiz = input.filter(function (el, i, niz) {
    if (el !== 2) {
        return true
    }
})