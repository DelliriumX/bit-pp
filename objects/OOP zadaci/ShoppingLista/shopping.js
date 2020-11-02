(function () {

    function formatPrice(price) {
        var formatted;
        var converted = Number(price)
        if (!isNaN(converted) && isFinite(converted)) {
            formatted = Number(converted.toFixed(2))
        } else {
            console.log("The given price is not valid")
        }
        return formatted;
    }

    function generateId() {
        // return Math.floor(Math.random() * 90000 + 10000)
        var id = '';
        for (var i = 0; i < 5; i++) {
            id += Math.floor(Math.random() * 10)
        }
        return id
    }

    function checkDate(datum) {
        if (datum instanceof Date) {
            return datum
        } else {
            console.log("Invalid date given to constructor.")
        }
    }

    function Product(ime, cena, rok) {
        this.name = ime;
        this.price = formatPrice(cena)
        this.id = generateId()
        this.expirationDate = checkDate(rok)

        this.getInfo = function () {
            var info = ''
            var productCode = ''
            productCode += this.name[0].toUpperCase() +
                this.name[this.name.length - 1].toUpperCase() +
                this.id
            info += productCode + ', ' + this.name + ', ' + this.price.toFixed(2)
            return info
        }
    }

    function ShoppingBag() {
        this.list = []
    }

    var a = new Product('Milka', 15.859858, new Date(Date.now()))
    console.log(a.getInfo())












})()