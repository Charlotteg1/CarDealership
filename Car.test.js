const Car = require('./Car');

const car = new Car("Audi", "£200", "Petrol");

describe('Car tests', () => {

    test('can get car manufacturer ', () => {
        const expected = "Audi";
        const actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can get car manufacturer ', () => {
        const expected = "Volvo";
        car.setManufacturer("Volvo")
        const actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can get car price ', () => {
        const expected = "£200";
        const actual = car.getPrice();
        expect(actual).toBe(expected);
    });

    test('can get car price ', () => {
        const expected = "£100";
        car.setPrice("£100")
        const actual = car.getPrice();
        expect(actual).toBe(expected);
    
    });

    test('can get car engineType ', () => {
        const expected = "Petrol";
        const actual = car.getEngineType();
        expect(actual).toBe(expected);
    });

    test('can get car engineType ', () => {
        const expected = "Electric";
        car.setEngineType("Electric")
        const actual = car.getEngineType();
        expect(actual).toBe(expected);
    
    });
})