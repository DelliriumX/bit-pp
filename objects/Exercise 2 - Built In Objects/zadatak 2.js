// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

(function () {
    var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]

    console.log(input.filter(function (el, index, arr) {
        return arr.indexOf(el, index + 1) === -1
    }))

})()

