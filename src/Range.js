export default class Range {
    constructor(start, end, step = 1) {
      this.start = start;
      this.end = end;
      this.step = step;
      this.values = this.generateValues();
    }

    generateValues() {
      let values = [];
      for (let current = this.start; (this.step > 0 ? current < this.end : current > this.end); current += this.step) {
        values.push(current);
      }
      return values;
    }

    [Symbol.iterator]() {
      let index = 0;
      const values = this.values;
  
      return {
        next() {
          if (index < values.length) {
            return { value: values[index++], done: false };
          }
          return { value: undefined, done: true };
        }
      };
  }
  getValues() {
    return this.values;
  }
}