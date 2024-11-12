export default class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} received news: ${news}`);
  }
}


