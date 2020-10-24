// Zadatak 1:
// Write a program that calculates the maximum of two given numbers.

function max(num1, num2) {
  if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

console.log(max(2, 5));   // 5
console.log(max(8, 5));   // 8
console.log(max(2, 3));   // 3
console.log(max(4, 2));   // 4

