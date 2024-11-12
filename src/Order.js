export default class Order {
  constructor(maxTotal = 1000) {
    this.items = [];
    this.maxTotal = maxTotal;
  }

  addItem(item) {
    if (!this.isValidItem(item)) {
      throw new InvalidItemError(
        "Invalid item. Each item must have a name and price."
      );
    }
    this.items.push(item);
    return this;
  }

  calculateTotal() {
    const total = this.items.reduce((acc, item) => acc + item.price, 0);

    if (total > this.maxTotal) {
      throw new TotalExceededError(
        `Total price exceeds the limit of $${this.maxTotal}. Current total is $${total}.`
      );
    }

    return total;
  }

  isValidItem(item) {
    return (
      item && item.name && typeof item.price === "number" && item.price >= 0
    );
  }
}
export class InvalidItemError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidItemError";
  }
}

export class TotalExceededError extends Error {
  constructor(message) {
    super(message);
    this.name = "TotalExceededError";
  }
}
