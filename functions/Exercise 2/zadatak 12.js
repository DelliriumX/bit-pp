//  Izracunava godine do penzije
//  Penzija za muskarce je u 65. god
//  Penzija za zene je u 60. god
//  Ako je neko vec u penziji, ispisati poruku o tome

//  input: godina rodjenja, pol
//  output: number 

var trenutnaGodina = 2020

function retirement(god, pol) {
    var brojGodina = trenutnaGodina - god
    var maxGodina;

    if (pol === 'm') {
        maxGodina = 65
    } else {
        maxGodina = 60
    }
    if (brojGodina > maxGodina) {
        console.log('Vec je u penziji')
        return 0
    }

    return maxGodina - brojGodina
}

console.log(retirement(1950, 'z'))