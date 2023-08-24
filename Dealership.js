const Car = require('./Car');

const Dealership = function(name , maxCars, carsInStock){
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
}


Dealership.prototype.setName = function(name) {
    this.name = name;
}

Dealership.prototype.getName = function() {return this.name;}

Dealership.prototype.setMaxCars = function(maxCars) {
    this.maxCars = maxCars;
}

Dealership.prototype.getMaxCars = function() {return this.maxCars;}

Dealership.prototype.setCarsInStock = function(carsInStock) {
    this.carsInStock = carsInStock;
}

Dealership.prototype.getCarsInStock = function() {return this.carsInStock;}

Dealership.prototype.getNumberOfCarsInStock = function() {return this.carsInStock.length;}

Dealership.prototype.addCarToStock = function(Car) {this.carsInStock.push(Car);}

Dealership.prototype.getEachManufacturer = function() {
    const manufacturers = new Array()
     this.carsInStock.forEach(car => {manufacturers.push(car.getManufacturer());})
     return manufacturers;
}

Dealership.prototype.getCarsByManufacturer = function(manufacturer) {
    return this.carsInStock.filter(car => car.getManufacturer() === manufacturer);
}

Dealership.prototype.getTotalValue = function(manufacturer) {
    return this.carsInStock.reduce((total, car) => total + car.getPrice(), 0);
};
module.exports = Dealership;