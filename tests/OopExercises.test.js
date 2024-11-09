import Car from "../src/Car";
import BankAccount from "../src/BankAccount";
import Person from "../src/Person";
import Animal from "../src/Animal";
import { Dog } from "../src/Animal";
import Shape from "../src/Shape";
import { Rectangle } from "../src/Shape";
import { Circle } from "../src/Shape";
import User from "../src/Encryption";
import MathHelper from "../src/MathHelper";
import Product, { Cart } from "../src/ProductCart";
import Logger from "../src/Logger";
import { Bike } from "../src/VehicleFactory";

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

  test("should calculate total price after adding products", () => {
    const logger1 = new Logger();
    const logger2 = new Logger();

    expect(logger1).toBe(logger2);

    expect(logger1 instanceof Logger).toBe(true);
  });

  test("should create correct vehicle instances based on input", () => {
    const car = new Car

    expect(car instanceof Car).toBe(true);
  });

  test("should create correct vehicle instances based on input", () => {
    const bike = new Bike

    expect(bike instanceof Bike).toBe(true);
  });
});
