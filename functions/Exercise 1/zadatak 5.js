// Zadatak 5.
// OOOO nismo li ga uradili dovoljno puta?

function stars(len) {
  var result = "";
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (i === 0 || j === 0 || i === len - 1 || j === len - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  console.log(result);
}

stars(5);
stars(3);
stars(10);
