function App(name, licence, stars) {
    this.name = name
    this.licence = licence
    this.stars = stars
}
App.prototype.isCCLicence = function () {
    return this.licence === "CC"
}
App.prototype.like = function () {
    this.stars++
}
App.prototype.showStars = function () {
    console.log(this.stars)
}

function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars)

    this.url = url
    this.technologies = technologies
}

WebApp.prototype = Object.create(App.prototype)
WebApp.prototype.constructor = WebApp

WebApp.prototype.getData = function () {
    console.log(this.name, this.url, this.technologies, this.licence, this.stars)
}
WebApp.prototype.reactBased = function () {
    var imaReact = this.technologies.some(function (element, index, niz) {
        return element === "React"
    })
    return imaReact
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars)

    this.platforms = platforms
}

MobileApp.prototype = Object.create(App.prototype)
MobileApp.prototype.constructor = MobileApp

MobileApp.prototype.getData = function () {
    console.log(this.name, this.platforms, this.licence, this.stars)
}
MobileApp.prototype.forAndroid = function () {
    var zaAndroid = this.platforms.some(function (element, index, niz) {
        return element === "Android"
    })
    return zaAndroid
}


var mojApp = new MobileApp('Huawei Health', ['Android', 'windowsPhone'], 'OPEN', 4)

mojApp.showStars()
mojApp.like()
mojApp.showStars()