const Dealership = require('./Dealership');

const dealership = new Dealership("Car World", 10, []);

const Car = require('./Car');

//before each
const car1 = new Car("Audi", 200, "Petrol");
const car2 = new Car("Volvo", 100, "Petrol");
const car3 = new Car("BMW", 400, "Electric");

dealership.addCarToStock(car1);
dealership.addCarToStock(car2);
dealership.addCarToStock(car3);

describe('Dealership tests', () => {

    // testing add to stock and getNumberOfCarsInStock
    test('can get number of cars in stock ', () => {
        const expected = 3;
        const actual = dealership.getNumberOfCarsInStock();
        expect(actual).toBe(expected);
    });

    test('can return manufacturers', () => {
        const expected = [ 'Audi', 'Volvo', 'BMW' ];
        const actual = dealership.getEachManufacturer();
        expect(actual).toStrictEqual(expected);
    });

    test('can filter by manufacturer', () => {
        const expected = [car1];
        const actual = dealership.getCarsByManufacturer("Audi");
        expect(actual).toStrictEqual(expected);
    });

    test('can total value', () => {
        const expected = 700 ;
        const actual = dealership.getTotalValue();
        expect(actual).toBe(expected);
    });
})