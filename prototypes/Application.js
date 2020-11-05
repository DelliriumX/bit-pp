var app = {
    isCCLicence: function () {
        return this.licence === "CC"
    },
    like: function () {
        this.stars++
    },
    showStars: function () {
        console.log(this.stars)
    }
}

function WebApp(name, url, technologies, licence, stars) {
    this.name = name
    this.url = url
    this.technologies = technologies
    this.licence = licence
    this.stars = stars
}

WebApp.prototype = Object.create(app)
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
    this.name = name
    this.platforms = platforms
    this.licence = licence
    this.stars = stars
}

MobileApp.prototype = Object.create(app)
MobileApp.prototype.constructor = MobileApp

MobileApp.prototype.getData = function () {
    console.log(this.name, this.platform, this.licence, this.stars)
}
MobileApp.prototype.forAndroid = function () {
    var zaAndroid = this.platforms.some(function (element, index, niz) {
        return element === "Android"
    })
    return zaAndroid
}
