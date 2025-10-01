
export class House {
  constructor(private rooms: number, private hasGarage: boolean) {
    if (rooms <= 0) throw new Error('rooms must be > 0');
  }
  static Builder = class {
    private rooms = 1; private hasGarage = false;
    roomsCount(r: number) { this.rooms = r; return this; }
    garage(g: boolean) { this.hasGarage = g; return this; }
    build() { if (this.rooms <= 0) throw new Error('rooms must be > 0'); return new House(this.rooms, this.hasGarage); }
  }
  toString() { return `House[rooms=${this.rooms},garage=${this.hasGarage}]`; }
}
