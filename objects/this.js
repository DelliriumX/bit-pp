function Hero(ime, godine) {
    this.a = 'ABC'
    this.name = ime
    this.age = godine
    this.sayName = function () {
        console.log(this.name)
    }
}

var nasHeroj = new Hero("Aleksandar", 50)
var nasaHeroina = new Hero("Sonja", 42)