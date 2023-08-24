const Dealership = function(name , maxCars, numberInStock){
    this.name = name;
    this.maxCars = maxcars;
    this.numberInStock = numberInStock;
}


Dealership.prototype.setName = function(name) {
    this.name = name;
}

Dealership.prototype.getName = function() {return this.name;}

Dealership.prototype.setMaxCars = function(maxCars) {
    this.maxCars = maxCars;
}

Dealership.prototype.getMaxCars = function() {return this.maxCars;}

Dealership.prototype.setNumberInStock = function(numberInStock) {
    this.numberInStock = numberInStock;
}

Dealership.prototype.getNumberInStock = function() {return this.numberInStock;}

module.exports = Dealership;