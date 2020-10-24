// Zadatak 7.
// Write a program that calculates a number of appearances of a given number in a given array.

// Moramo da prodjemo kroz sve elemente niza da bi smo izbrojali broj pojava
// U petlji koja prolazi od prvog do poslednjeg cemo da proveravamo da li svaki od njih
// podudara sa trazenim brojem

var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1];

function imeFunkcijeKojeGodHocete(imeParametraKojiNecemoKoristiti) {
  var counter = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
      counter++;
    }
  }
  return counter;
}
var rezultat = imeFunkcijeKojeGodHocete();
console.log(rezultat);

// =====================================================================================================================


// Ajmo ovo da uradimo na nacin sa predefinisanim funkcijama nad Array-em o kojima smo pricali:
var rezultat = a.filter(function (broj) {
  return broj === e;
}).length;
console.log(rezultat);



// =====================================================================================================================

// Moze i krace ali to jos nismo ucili
console.log(a.filter(e => e === 7).length);
