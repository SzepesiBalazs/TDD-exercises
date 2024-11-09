export default class Animal {
    speak() {
      return "Generic animal sound";
    }
  }
  
  class Dog extends Animal {
    speak() {
      return "Woof";
    }
  }
  
  export { Dog };