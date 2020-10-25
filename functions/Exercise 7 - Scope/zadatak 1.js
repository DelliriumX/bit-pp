// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChildren, partner, loc, job){
  console.log("You will be a " + job + " in " + loc + ', and married to ' + partner + ' with ' + numChildren + ' kids.')
}

tellFortune(2, "Jovana", "Belgrade", "programmer");
tellFortune(3, "Henrik", "Vienna", "doctor");
tellFortune(1, "John", "New York", "teacher");