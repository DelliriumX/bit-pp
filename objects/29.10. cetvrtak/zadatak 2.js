// Napraviti NIZ imena studenata (stringova sa imenima studenata)
// Napraviti NIZ bodova studentata (0 - 100)
// Zatim kreirati treci niz, koji ce da sadrzi
// objekte koji predstavljaju studente

// input: niz bodova, niz imena
// output: niz studenata

var imena = ["Pera", "Jovan", "Maja", "Zarko"]
var bodovi = [68, 75, 85, 74]
var studenti = []

for (var i = 0; i < imena.length; i++) {
    var student = {
        ime: imena[i],
        points: bodovi[i]
    }
    studenti.push(student)
}

console.log(studenti)

// Proci kroz niz studenata, i dodeliti im NOVI property
// PASSED, koji govori o tome da li je student polozio kurs
// ako ima manje od 75 bodova, nije polozio, u suprotnom je polozio

for (var i = 0; i < studenti.length; i++) {
    if (studenti[i].points < 75) {
        studenti[i].passed = false
    } else {
        studenti[i].passed = true

    }
}

console.log(studenti)

// Filtrirati niz studenata tako da nam ostanu samo oni
// koji su uspesno polozili kurs


var uspesniStudenti = []

for (var i = 0; i < studenti.length; i++) {
    if (studenti[i].passed) {
        uspesniStudenti.push(studenti[i])
    }
}

var uspesniStudenti = studenti.filter(function (student) {
    if (student.passed === true)
        return true
    else {
        return false
    }
})

