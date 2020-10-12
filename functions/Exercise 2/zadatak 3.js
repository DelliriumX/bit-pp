// input: neki string i neki broj
// output: vraca string n puta

function nify(text, n) {
    var result = '';
    n = n || 1
    for (var i = 0; i < n; i++) {
        result += text
    }

    return result;
}
console.log(nify('abc'))
console.log(nify('abc', 3))