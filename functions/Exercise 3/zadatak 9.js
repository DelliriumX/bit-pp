// Write a function to hide email address

// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

// imali smo vec ovo, tj. slicno

var mejl = "myemailaddress@bgit.rs";

function hideEmail(email) {
  var hidden = "";
  var suffix = "";
  var copy = false;

  for (var i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      // pronalazimo @ i ukljucujemo "copy" mode kad ga nadjemo
      copy = true;
    }

    if (copy) {
      // ako je copy mode ukljucen, kopiramo ostatak slovo po slovo
      suffix += email[i];
    }
  }

  hidden += email[0] + email[1] + email[2] + "..." + suffix;

  return hidden;
}

hideEmail(mejl);

// =====================================================================================================================

mejl.split("@").reduce(function (address, suffix) {
  return address[0] + address[1] + address[2] + "...@" + suffix;
});

// =====================================================================================================================


mejl.split("@").reduce((a, b) => a[0] + a[1] + a[2] + "...@" + b);
