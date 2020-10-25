// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(age) {
  console.log("Your doggie is " + 7 * age + " years old in dog years!");
}

calculateDogAge(6)
calculateDogAge(15)
calculateDogAge(2)

// BONUS:

function calculateDogAge(age, rate) {
  rate = rate || 7
  console.log("Your doggie is " + rate * age + " years old in dog years!");
}