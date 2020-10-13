//  Replace " " sa separatorom
//  input: text, separator
//  output: string

function strReplace(text, separator) {
    separator = separator || '-'
    var result = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            result = result + separator
        } else {
            result = result + text[i]
        }
    }
    return result
}

console.log(strReplace("Evo stefane ovo radi", '_'))