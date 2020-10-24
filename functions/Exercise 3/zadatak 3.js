// Write a program to filter out falsy values from the array

// input: array
// output: array

var nasArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function filter(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

console.log(filter(nasArray));


// =======================================================================================================


// Naravno postoji predefinisana funkcija, i vidimo kako je zgodna

console.log(
  nasArray.filter(function (e) {
    return e;
  })
);


// =======================================================================================================


// i da naravno da moze i krace

console.log(nasArray.filter((e) => e));
