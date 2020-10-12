// input: string i broj
// output string * broj

function tralala(text, broj) {
    var rezultat = ''

    for (var i = 0; i < broj; i++) {
        rezultat = rezultat + text
    }
    console.log(rezultat)
}

tralala('abc', 3)