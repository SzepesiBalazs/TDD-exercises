export default class Logger {
  static instance = null;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
  }
}
