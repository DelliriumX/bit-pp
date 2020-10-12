// input: nesto
// output: true / false

// Proveravamo NE DA LI JE u pitanju STRING vec da li je prazan

function isEmptyString(a) {
    if (typeof a === "string" && a === "") {
        return true
    }
    return false
}

console.log(isEmptyString("ja jesam string"));
console.log(isEmptyString(123));
console.log(isEmptyString(""));