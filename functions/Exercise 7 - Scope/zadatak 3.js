// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// necemo uzimati u obzir prestupne godine (sto se tice racunanja dana)

function calculateSupply(age, perDay){
  var maxAge = 80;
  var result = (maxAge - age) * 365 * perDay;
  console.log("You will need " + result + ' to last you until the ripe old age of ' + maxAge);
}

calculateSupply(29, 1)


// Bonus: zaokruziti cifru

function calculateSupply(age, perDay){
  var maxAge = 80;
  var result = (maxAge - age) * 365 * perDay;
  console.log("You will need " + Math.round(result) + ' to last you until the ripe old age of ' + maxAge);
}