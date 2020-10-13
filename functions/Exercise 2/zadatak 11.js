//  Konvertujemo niz stringova u niz brojeva
//  Filtriramo sve NE NUMERICKE vrednosti

//  input: array[string]
//  output: array[number]


function str2numArr(strArr) {
    var numArr = []

    for (var i = 0; i < strArr.length; i++) {
        var broj = Number(strArr[i])
        if (typeof broj === 'number' && !isNaN(broj) && isFinite(broj)) {
            numArr[numArr.length] = broj
        }
    }
    return numArr
}

console.log(str2numArr(["1", "21", undefined, "42", "1e+3", Infinity]))