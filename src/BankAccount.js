export default class BankAccount {
  constructor() {
    this.balance = this.randomBalanceGenerator();
  }

  randomBalanceGenerator() {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }

  getBalance() {
    return this.balance;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  deposit(amount) {
    this.balance += amount;
  }
}
