// Write a function that checks if a given string is valid password.
// The password is valid if it is at least 6 characters long and contains at least one digit.
// The function should receive two callbacks named successCallback and errorCallback that
// should be called in case password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!

// 	Input: JSGuru123
// 	Output: Your password is cool!

var input = "JSGuru123";

function check(pass, successCallback, errorCallback) {
  if (pass.length < 6) {
    return errorCallback();
  }
  for (var i = 0; i < pass.length; i++){
    if (!isNaN(Number(pass[i]))){
      return successCallback()
    }
  }
  return errorCallback()
}

function dobar() {
  console.log("Your password is cool!");
}
function los() {
  console.log("Your password is invalid!");
}

check(input, dobar, los);
