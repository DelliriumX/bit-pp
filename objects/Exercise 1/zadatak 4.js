function getObj() {
    var a = {
        name: 'Gulas',
        cuisine: 'Hungarian',
        complexity: 2,
        ingredients: ['paprika', 'crni luk', 'mesa'],
        prepTime: 4.5 * 60,
        instructions: "Moja tajna",
        getIngredients: function () {
            console.log(a.ingredients)
        },
        canMakeIn15: function () {
            return 15 > a.prepTime
        },
        setCuisine: function (newCuisine) {
            a.cuisine = newCuisine
        },
        removeIngredient: function (sastojak) {
            var noviSastojci = []
            for (var i = 0; i < a.ingredients.length; i++) {
                if (a.ingredients[i] !== sastojak) {
                    noviSastojci[noviSastojci.length] = a.ingredients[i]
                }
            }
            a.ingredients = noviSastojci
        }

    }
    return a
}

var mojObjekat = getObj()
mojObjekat.setCuisine("Serbian")
console.log(mojObjekat.cuisine)   
