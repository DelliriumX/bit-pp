var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1]

function nekoImeNijeBitno(imeParametra) {
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            counter++;
        }
    }
    return counter
}
var rezultat = nekoImeNijeBitno()
console.log(rezultat)