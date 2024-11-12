export default class NewsPublisher {
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber) {
    const index = this.subscribers.indexOf(subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }
  notifySubscribers(news) {
    for (let subscriber of this.subscribers) {
      subscriber.update(news);
    }
  }
}
