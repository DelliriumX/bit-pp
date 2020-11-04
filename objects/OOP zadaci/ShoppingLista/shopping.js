(function () {
    function generateId() {
        // return Math.floor(Math.random() * 90000 + 10000)
        var id = '';
        for (var i = 0; i < 5; i++) {
            id += Math.floor(Math.random() * 10)
        }
        return id
    }

    // KONSTRUKTORSKE FUNKCIJE
    // =============================
    function Product(ime, cena, rok) {
        this.name = ime;
        this.price = Number(cena.toFixed(2))
        this.id = generateId()
        this.expirationDate = rok

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

        this.addProduct = function (proizvod) {
            if (proizvod.expirationDate > new Date()) {
                this.list.push(proizvod)
            }
        }

        this.averagePrice = function () {
            var sum = this.calculateTotalPrice()

            return (sum / this.list.length).toFixed(3)
        }

        this.getMostExpensive = function () {
            return this.list.map(function (el) {
                return el.price
            }).reduce(function (dosadashnjiMax, el) {
                return Math.max(dosadashnjiMax, el)
            })
        }

        this.calculateTotalPrice = function () {
            return this.list.reduce(function (sum, el) {
                return sum + el.price
            }, 0)
        }
    }

    function PaymentCard(novac, aktivna, expDate) {
        this.accountBalance = novac.toFixed(2)
        this.isActive = aktivna
        this.validUntil = expDate
    }

    // NORMALNE FUNKCIJE
    // =============================
    function checkoutAndBuy(korpa, kartica) {
        var novcaNaKartici = kartica.accountBalance
        var ukupnaCena = korpa.calculateTotalPrice()
        console.log(ukupnaCena)
        if (novcaNaKartici > ukupnaCena) {
            console.log("Purchase successful!")
        } else {
            console.log("Purchase unsuccessful, lacking balance: ", novcaNaKartici - ukupnaCena)
        }
    }

    var chocolate = new Product('Milka', 150.859, new Date('2020-12-26'))
    var milk = new Product("Mleko", 88.85, new Date('2020-11-15'))
    var bread = new Product("Hleb", 50.15, new Date('2020-11-12'))

    var kartica = new PaymentCard(30, true, new Date('2020-11-18'))
    var cart = new ShoppingBag()
    cart.addProduct(chocolate)
    cart.addProduct(bread)
    checkoutAndBuy(cart, kartica)











})()