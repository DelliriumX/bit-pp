// Zadatak 5.
// Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// Ovaj zadatak je "zamka"
// neko bi pomislio da treba da krene kroz niz sa kraja

// Tazi se da se vrati n elementa. Dakle 100% ne idemo kroz ceo niz.
// vrtimo petlju onoliko puta koliko se trazi, a sta cemo da vratimo to je drugo

function last(arr, koliko) {
  var rezultat = [];
  koliko = koliko || 1;
  for (var i = 0; i < n; i--) {
    //  popunjavamo nas rezultat na prvo prazno mesto rezultat[rezultat.length]
    //  i tu upisaujemo redom od nazad od poslednjeg (arr.length-1) pa koliko god da treba
    rezultat[rezultat.length] = arr[arr.length - 1 - i];
    //  Mozemo dati veliki broj tipa ocu 100 od nazad, a damo rec na primer "dinosaurus"
    //  to definitivno nema 100 slova. Prema tome ako je index elementa koji smo upravo dodali
    //  jednak nuli (0) to znaci da smo stigli "do pocetka" niza i treba da prekinemo petlju
    if (arr.length - 1 - i === 0) {
      break;
    }
  }
  // U slucaju da je broj n bio = 1, moramo da vratimo samo taj element, u suprotnom vise
  if (koliko === 1) {
    return rezultat[0];
  }
  return rezultat;
}
