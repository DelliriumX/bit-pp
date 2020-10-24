// Zadatak 4.
// Write a program that calculates an arithmetic mean of four numbers.

// Za ove sto su slabiji sa matematikom, prosek se racuna tako sto se prvo
// svi brojevi saberu, a potom se zbir podeli sa brojem cinioca

function prosek(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

// ajmo sad da napravimo funkciju koja radi sa koliko god parametara jer ovo
// ovako rucno napisano je odvratno

function prosek2() {
  var zbir = 0;
  for (i = 0; i < arguments.length; i++) {
    zbir = zbir + arguments[i];
  }
  if (arguments.length) {
    return zbir / arguments.length;
  }
  return 0;
}

console.log(prosek(2, 3, 6, 7)); // 4.5
console.log(prosek2(2, 3, 6, 7)); // 4.5
