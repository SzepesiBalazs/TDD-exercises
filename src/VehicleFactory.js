export default class Vehicle {
    constructor(type = "") {
        this.type = type;
    }
}

class Car extends Vehicle {
    constructor() {
        super("Car");
    }
}

class Bike extends Vehicle {
    constructor() {
        super("Bike");
    }
}

export { Car }
export { Bike }