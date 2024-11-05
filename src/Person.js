export default class Person {
  constructor(name = "UnNamed", age = 0) {
    this.name = name;
    this.age = age;
  }

  isAdult(){
   return this.age >= 18 
    }
  }
