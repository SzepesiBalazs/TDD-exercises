export default class Calculator {
    constructor() {
      this.result = 0;
    }

    add(num) {
      this.result += num;
      return this;  
    }
  
    subtract(num) {
      this.result -= num;
      return this;  
    }
  
    multiply(num) {
      this.result *= num;
      return this; 
    }
  
    divide(num) {
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      this.result /= num;
      return this; 
    }
  
    getResult() {
      return this.result;
    }
  
    reset() {
      this.result = 0;
      return this;  
    }
  }