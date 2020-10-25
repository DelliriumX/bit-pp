// Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: true/false

var nasArray = [5, -4.2, 3, 7];
var trazi = 3;

function containsElement(element, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

containsElement(trazi, nasArray);

// =====================================================================================================================

// Ovo je lose resenje, jer ne uzima sve u obzir, na primer, ukoliko budete trazili "undefined" moze da ne bude dobro

!!nasArray.find(function (el) {
  return el === trazi;
});

// Ovo je bolje:

nasArray.some(function (el) {
  return el === trazi;
});

// =====================================================================================================================

// i naravno kraca verzija
nasArray.some((e) => e === trazi);
