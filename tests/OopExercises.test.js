import Car from "../src/Car";
import BankAccount from "../src/BankAccount";
import Person from "../src/Person";
import Animal from "../src/Animal";
import { Dog } from "../src/Animal";
import Shape, { Circle, Rectangle } from "../src/Shape";
import User from "../src/Encryption";
import MathHelper from "../src/MathHelper";
import Product, { Cart } from "../src/ProductCart";
import Logger from "../src/Logger";
import {
  Vehicle,
  Car as CarFromFactory,
  Bike,
  createVehicle,
} from "../src/VehicleFactory";
import { HouseBuilder } from "../src/HouseBuilder";
import House from "../src/HouseBuilder";
import { Library } from "../src/Library";
import { Book } from "../src/Library";
import Calculator from "../src/Calculator";
import Range from "../src/Range";
import Order from "../src/Order";
import { InvalidItemError } from "../src/Order";
import { TotalExceededError } from "../src/Order";
import { WashingMachine } from "../src/Applience";
import { Appliance } from "../src/Applience";
import { Microwave } from "../src/Applience";

describe("OopExercises", () => {
  test("should return car info", () => {
    const car = new Car("Audi", "A6", "2022");

    expect(car.getCarInfo()).toBe("The A6 model of Audi made in 2022");
  });

  test("should return car info without inputs", () => {
    const car = new Car();

    expect(car.getCarInfo()).toBe("The  model of  made in ");
  });

  test("should return bank account balance between 1 and 10", () => {
    const bankAccount = new BankAccount();

    expect(bankAccount.getBalance()).toBeLessThan(11);
    expect(bankAccount.getBalance()).toBeGreaterThan(0);
  });

  test("should return original balance -1 unit", () => {
    const bankAccount = new BankAccount();
    const startingBalance = bankAccount.getBalance(); //10

    bankAccount.withdraw(1); //9

    expect(startingBalance - 1).toBe(bankAccount.getBalance());
  });

  test("should return original balance +1 unit", () => {
    const bankAccount = new BankAccount();
    const startingBalance = bankAccount.getBalance(); //10

    bankAccount.deposit(1); //11

    expect(startingBalance + 1).toBe(bankAccount.getBalance());
  });

  test("should return true if age is over than 18", () => {
    const person = new Person("Balázs", 20);
    const adult = person.isAdult();

    expect(adult).toBe(true);
  });

  test("should return false if age is less than 18", () => {
    const person = new Person("Larina", 17);
    const adult = person.isAdult();

    expect(adult).toBe(false);
  });

  test("should return 'generic animal sound for animal'", () => {
    const animal = new Animal();

    expect(animal.speak()).toBe("Generic animal sound");
  });

  test("should return 'Woof'", () => {
    const dog = new Dog();

    expect(dog.speak()).toBe("Woof");
  });

  test("should return 0", () => {
    const shape = new Shape();

    expect(shape.getArea()).toBe(0);
  });

  test("should return 180", () => {
    const rectangle = new Rectangle();

    expect(rectangle.getArea()).toBe(180);
  });

  test("should return 360", () => {
    const circle = new Circle();

    expect(circle.getArea()).toBe(360);
  });

  test("should return true if it is the password", () => {
    const user = new User();
    user.setPassword("myPassword");

    expect(user.validatePassword("myPassword")).toBe(true);
  });

  test("should return false if it isn't the password", () => {
    const user = new User();
    user.setPassword("myPassword");

    expect(user.validatePassword("notMyPassword")).toBe(false);
  });

  test("should add", () => {
    const mathHelper = new MathHelper();
    const result = mathHelper.add(1, 2);

    expect(result).toBe(3);
  });

  test("should subtract", () => {
    const mathHelper = new MathHelper();
    const result = mathHelper.subtract(2, 1);

    expect(result).toBe(1);
  });

  test("should multiply", () => {
    const mathHelper = new MathHelper();
    const result = mathHelper.multiply(2, 2);

    expect(result).toBe(4);
  });

  test("should divide", () => {
    const mathHelper = new MathHelper();
    const result = mathHelper.divide(6, 2);

    expect(result).toBe(3);
  });

  test("should calculate total price after adding products", () => {
    const pear = new Product("Pear", 1);
    const carrot = new Product("Carrot", 2);

    const myCart = new Cart();
    myCart.addProduct(pear);
    myCart.addProduct(carrot);

    const total = myCart.calculateTotal();

    expect(total).toBe(3, 2);
  });

  test("should make all instances of logger to be the same", () => {
    const logger1 = new Logger();
    const logger2 = new Logger();

    expect(logger1).toBe(logger2);
    expect(logger1 instanceof Logger).toBe(true);
    expect(logger1.log()).toBe(logger2.log());
  });

  test("should create correct vehicle instances based on input", () => {
    const car = createVehicle("Car");

    expect(car instanceof CarFromFactory).toBe(true);
    expect(car.type).toBe("Car");
    expect(car.funFunction()).toBe("Hello Car");
  });

  test("should create correct vehicle instances based on input", () => {
    const bike = new createVehicle("Bike");

    expect(bike instanceof Bike).toBe(true);
    expect(bike.funFunction()).toBe("Hello");
  });
});

test("should create correct house instances based on input", () => {
  const myHouse = new HouseBuilder()
    .setRooms(4)
    .setFloors(2)
    .setColor("blue")
    .build();

  expect(myHouse instanceof House).toBe(true);

  expect(myHouse.rooms).toBe(4);

  expect(myHouse.floors).toBe(2);

  expect(myHouse.color).toBe("blue");
});

test("should find book by title", () => {
  const myLibrary = new Library();
  const book1 = new Book("abc", "Good Author");
  const book2 = new Book("cba", "Better Author");

  myLibrary.addBook(book1);
  myLibrary.addBook(book2);

  const searchResults = myLibrary.searchBook("abc");

  expect(searchResults).toEqual(["abc by Good Author"]);
});

test("should remove a book by title", () => {
  const myLibrary = new Library();
  const book1 = new Book("abc", "Good Author");
  const book2 = new Book("cba", "Better Author");

  myLibrary.addBook(book1);
  myLibrary.addBook(book2);

  myLibrary.removeBook("abc");

  expect(myLibrary.books.length).toBe(1);
  expect(myLibrary.books[0].title).toBe("cba");
});

test("should add a book to the library", () => {
  const myLibrary = new Library();
  const book1 = new Book("abc", "Good Author");

  myLibrary.addBook(book1);

  expect(myLibrary.books.length).toBe(1);
  expect(myLibrary.books[0].title).toBe("abc");
  expect(myLibrary.books[0].author).toBe("Good Author");
});

test("should perform arithmetic operations correctly with method chaining", () => {
  const calculator = new Calculator();

  const result = calculator
    .add(10)
    .subtract(3)
    .multiply(4)
    .divide(2)
    .getResult();

  expect(result).toBe(14);
});

test("should perform range correctly with the method", () => {
  const range1 = new Range(1, 10);

  const result = range1.getValues();

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("should add items and calculate their total value", () => {
  const order = new Order(500); 
  const result = order
    .addItem({ name: "Laptop", price: 200 })
    .addItem({ name: "Phone", price: 150 })
    .addItem({ name: "Headphones", price: 100 })
    .calculateTotal(); 

  expect(result).toEqual(450);
});

test("should throw error when adding invalid item", () => {
  const order = new Order(500);

  expect(() => {
    order.addItem({ name: "Laptop", price: -200 });
  }).toThrowError(InvalidItemError);
});

test("should throw error when total exceeds max limit", () => {
  const order = new Order(300);

  expect(() => {
    order.addItem({ name: "Laptop", price: 400 });
    order.calculateTotal();
  }).toThrowError(TotalExceededError);
});

test("should throw error when trying to instantiate the abstract Appliance class", () => {
  expect(() => {
    new Appliance('Generic Appliance');
  }).toThrowError('Cannot instantiate abstract class Appliance directly.');
});

test("should call turnOn() on WashingMachine and log the correct message", () => {
  const washingMachine = new WashingMachine('Samsung');
  console.log = jest.fn();  
  washingMachine.turnOn();
  expect(console.log).toHaveBeenCalledWith('Samsung Washing Machine is now running.');
});

test("should call turnOn() on Microwave and log the correct message", () => {
  const microwave = new Microwave('LG');
  console.log = jest.fn(); 
  microwave.turnOn();
  expect(console.log).toHaveBeenCalledWith('LG Microwave is now heating.');
});


