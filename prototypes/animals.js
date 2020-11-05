function Animal(ime, glas) {
    this.name = ime
    this.voice = glas
}

Animal.prototype.talk = function () {
    return this.name + ' goes ' + this.voice + '!'
}

function Cat(ime) {
    this.name = ime
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Cat.prototype.voice = 'Meow'
Cat.prototype.talk = function () {
    return 'Purr, purr, ' + Animal.prototype.talk.call(this)
}

var garfild = new Cat('Garfield')
console.log(garfild.talk())



function dino(){

}