// Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// posto na prvi spajamo drugi, proci cemo kroz sve elemente drugog
// i jedan po jedan dodati u prvi.

// Moram naglasiti da u ovakvom radu ima stvari koje nisu dobre, jer menjamo array A.
// ali u vakumu radeci moze - zadatak nije rekao da ne sme

function concat(a, b) {
  for (var i = 0; i < b.length; i++) {
    a[a.length] = b[i];
  }
  return a;
}

// =====================================================================================================================

// Da znate samo da ima metoda na array-u za ovo, i ona NE PRAVI problem, jer ne menja prvi array

[4, 5, 6, 2].concat([3, 8, 11, 9]);
