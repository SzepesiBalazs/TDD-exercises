export default class House {
    constructor(rooms, floors, color) {
      this.rooms = rooms || 0;
      this.floors = floors || 0;
      this.color = color || "white";
    }
    describe() {
      console.log(
        `This house has ${this.rooms} rooms, ${this.floors} floors, and is painted ${this.color}.`
      );
    }
  }
  

export class HouseBuilder {
  constructor() {
    this.rooms = 0;
    this.floors = 1;
    this.color = "white";
  }

  setRooms(rooms) {
    this.rooms = rooms;
    return this;
  }

  setFloors(floors) {
    this.floors = floors;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }
  build() {
    return new House(this.rooms, this.floors, this.color);
  }
}
