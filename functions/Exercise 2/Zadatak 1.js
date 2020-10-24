// input: nesto
// output: true / false

function isString(nesto) {
    var b;
    if (typeof nesto === "string") {
        b = true
    } else {
        b = false
    }
    return b;
}

console.log(isString("ja jesam string"));
console.log(isString(123));
