export default class Shape {
  getArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  getArea() {
    return 180;
  }
}

class Circle extends Shape {
  getArea() {
    return 360;
  }
}

export { Circle, Rectangle };

