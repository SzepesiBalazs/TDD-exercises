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
