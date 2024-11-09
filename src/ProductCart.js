export default class Product {
  constructor(name = "", price = 0) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  calculateTotal() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

export { Cart };
