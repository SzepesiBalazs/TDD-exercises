export class Appliance {
    constructor(name) {
      if (new.target === Appliance) {
        throw new Error('Cannot instantiate abstract class Appliance directly.');
      }
      this.name = name;
    }

    turnOn() {
      throw new Error('Abstract method "turnOn()" must be implemented by subclass.');
    }
  }
  
 export class WashingMachine extends Appliance {
    constructor(name) {
      super(name);
    }
  
    turnOn() {
      console.log(`${this.name} Washing Machine is now running.`);
    }
  }
  

  export class Microwave extends Appliance {
    constructor(name) {
      super(name);
    }
  
    turnOn() {
      console.log(`${this.name} Microwave is now heating.`);
    }
  }