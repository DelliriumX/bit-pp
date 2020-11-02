// Dat je string "abrakadabra". 
// Zameniti slova "a" sa slovima "A"

var input = "abrakadabra"
var result = ''

for (var i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
        result += 'A'
    } else {
        result += input[i]
    }
}

// console.log(result)
var result = []
// ['a','b','r'...]
input.split('').forEach(function (el) {
    if (el === 'a') {
        // result[result.length] = 'A'
        result.push('A')
    } else {
        result.push(el)
    }
})

result = input.split('').map(function (e) {
    if (e === 'a') {
        return 'A'
    }
    return e
}).join('')

// console.log(result)