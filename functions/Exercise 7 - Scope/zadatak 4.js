// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var cel = 28;
var fah = 82;

function celsiusToFahrenheit() {
  console.log(cel + "°C is " + (cel * 1.8 + 32) + "°F");
}

function fahrenheitToCelsius() {
  console.log(fah + "°F is " + (fah - 32) / 1.8 + "°C");
}

celsiusToFahrenheit();
fahrenheitToCelsius();