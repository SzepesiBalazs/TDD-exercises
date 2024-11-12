export class Vehicle {
    constructor(type = "") {
        this.type = type;
    }
    funFunction(){
        return "Hello"
    }
}

export class Car extends Vehicle {
    constructor() {
        super("Car");
    }
    funFunction(){
        return "Hello Car"
    }
}

export class Bike extends Vehicle {
    constructor() {
        super("Bike");
    }
}

export const createVehicle = (vehicleType) =>{
    switch (vehicleType) {
        case "Car":
            return new Car()

        case "Bike":
            return new Bike()

        default:
            return new Vehicle()
    }
}
