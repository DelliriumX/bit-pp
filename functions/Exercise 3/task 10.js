function freq(niz) {
    var counter = 0;
    var maxCount = 0;
    var element;
    for (var i = 0; i < niz.length; i++) {
        // var izabraniElement = niz[i]
        for (var j = 0; j < niz.length; j++) {
            if (niz[j] === niz[i]) {
                counter++;
            }
        }
        if (counter > maxCount) {
            maxCount = counter
            element = niz[i]
        }
        counter = 0
    }
    return element
}

console.log(freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))