//  Pretvoriti brojeve u redne brojeve (engl)
//  input: broj
//  output: string

function a(broj) {
    var suffix = '';
    var strBroj = String(broj) // ili: '' + broj
    if (!(broj < 10) && strBroj[strBroj.length - 2] === '1') {
        suffix = 'th'
    } else {
        switch (strBroj[strBroj.length - 1]) {
            case '1': {
                suffix = 'st'
                break;
            }
            case '2': {
                suffix = 'nd'
                break;
            }
            case '3': {
                suffix = 'rd'
                break;
            }
            default: {
                suffix = 'th'
            }
        }
    }
    return broj + suffix;
}

console.log(a(1))
console.log(a(2))
console.log(a(3))
console.log(a(4))
console.log(a(11))
console.log(a(22))
console.log(a(113))