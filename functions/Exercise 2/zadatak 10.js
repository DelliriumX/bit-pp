// Zadatak 10.
// Write a function to get the first n characters and add “...” at the end of newly created string.


function basicWay(str, num){
  var ispis = ''
  for (var i = 0; i < num; i++)  {
    ispis += str[i]
  }
  ispis += '...'
  return ispis
}

basicWay("ovo je veoma naporno", 12)


// =======================================================================================================

function itd(str, num) {
  return str.split("").slice(0, num - 1).join('') + '...'
}

itd("idemo ljudi na predefinisane stalno iznova", 15)