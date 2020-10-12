//  Write a program that calculates the number of appearances of a letter a
//  in a given string. Modify the program so it calculates the number of both
//  letters a and A.

// vraca BROJ pojavljivanja slova "a"
// prima STRING

function test(text) {
    var broj = 0;

    for (var i = 0; i < text.length; i++) {
        var slovo = text[i]
        if (slovo === "a" || slovo === "A") {
            broj++
        }
    }
    return broj;
}
var rezultat = test("Neki text ovde: Abrakadabra")
console.log(rezultat)