// 1.   Napisati konstruktyorsku funkciju koja kreira objekat Osoba
// svaka osoba ima sledece property-je:
//      name - string
//      gender - 'M' || 'F'
//      age  - number
//      familyMembers   -   Array[]

// 2.   Konstruktorska funkcija treba da prima parametre: name, age, gender
// 3.   Napisati u konstruktorskoj funkciji metod koji dodaje drugu osobu kao clana porodice
// 4.   Svaka osoba treba da dobije dodatne propertije: father / mother.
//      a niz family, treba da se pretvori u niz "children"
// 5.   metod "dodajClanaPorodice" treba prosiriti tako da njegov drugi parametar govori o tome
//      da li je novododati clan dete ili roditelj
// 6.   Ako je neki clan porodice vec jednom dodat, ne moze se dodati jos jednom

function Person(ime, pol) {
    // this = {}
    // var rezultat = {}

    this.name = ime
    this.gender = pol
    this.children = []
    this.father = null
    this.mother = null

    this.addMother = function (majka) {
        this.mother = majka
    }
    this.addFather = function (otac) {
        this.father = otac
    }



    // return rezultat
    // return this
}

var osoba1 = new Person('pera', 'm')
var osoba2 = new Person('maja', 'z')

osoba1.addMother(osoba2)
