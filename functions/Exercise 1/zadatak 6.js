// Zadatak 6:

// Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

// Explicitno pise da prima 3 vrednosti
// stoga ovo moze veoma "rucno" da se resi

function stars(num1, num2, num3) {
  var result = "";
  for (var i = 0; i < num1; i++) {
    result += "*";
  }
  result += "\n";
  for (var i = 0; i < num2; i++) {
    result += "*";
  }
  result += "\n";
  for (var i = 0; i < num3; i++) {
    result += "*";
  }
  console.log(result);
}

// ali ajmo ovo uraditi na bolji nacin,
// a taman i da vezbamo malo nestovane petlje
// takodje cemo koristiti arguments pa cemo napraviti
// da ovo radi za koliko god brojeva da damo

// prva petlja vrti kroz parametre
// druga petlja za svaki parametar vrti od 0 do broja koji je argument
// i dodaje zvezdice. Kad druga (unutrasnja) zavrsi, spoljashnja doda
// jedno "\n" da predjemo u novi red i sve se nastavlja
// na kraju console.log

function stars2() {
  var result = "";
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i]; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}

stars(5, 3, 7);
stars2(5, 3, 7, 6, 2, 8);
