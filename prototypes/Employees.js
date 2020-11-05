
function Person(ime, prezime) {
    this.name = ime
    this.surname = prezime
}



function Employee(ime, prezime, posao, plata) {
    Person.call(this, ime, prezime)
    this.job = posao
    this.salary = plata
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee
Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary
}
Employee.prototype.getSalary = function () {
    console.log(this.salary)
}
Employee.prototype.increaseSalary = function () {
    this.salary = this.salary + this.salary * 0.1
}


function Developer(ime, prezime, posao, plata, spec) {
    Employee.call(this, ime, prezime, posao, plata)
    this.specialization = spec
}
Developer.prototype = Object.create(Employee.prototype)
Developer.prototype.constructor = Developer
Developer.prototype.getSpecialization = function () {
    console.log(this.specialization)
}

function Manager(ime, prezime, posao, plata, departman) {
    Employee.call(this, ime, prezime, posao, plata)
    this.department = departman
}
Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager
Manager.prototype.getDepartment = function () {
    console.log(this.department)
}
Manager.prototype.changeDepartment = function (noviDepartman) {
    this.department = noviDepartman
}


var petra = new Person('Petra', 'Petrovic')
var milan = new Employee('Milan', 'Milankovic', 'doktor', 60000)
var jovan = new Developer('Jovan', 'Jovanovic', 'programer', 200000, 'web')
var ana = new Manager('Ana', 'Milosevic', 'Head of Marketing', 500000, 'Marketing')
console.log(ana.getData())