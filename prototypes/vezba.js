function Osoba(ime) {
    this.name = ime
}
Osoba.prototype.predstaviSe = function () {
    return "Ja sam " + this.name
}

function Student(ime, studijskiProgram) {
    this.name = ime
    this.program = studijskiProgram
}
Student.prototype = Object.create(Osoba.prototype)
Student.prototype.constructor = Student
Student.prototype.predstaviSe = function () {
    return Osoba.prototype.predstaviSe.call(this) + " i studiram: " + this.program
}










var ana = new Student('Ana', 'Farmacija')
console.log(ana.predstaviSe())