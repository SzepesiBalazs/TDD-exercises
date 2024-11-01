export default class Car {
  constructor(make = "", model = "", year = "") {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return "The " + this.model + " model of " + this.make + " made in " + this.year;
  }
}
