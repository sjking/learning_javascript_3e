"use strict"

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGears[0];
  }

  toString() {
    return `${this.make} ${this.model}`;
  }

}

const c = new Car('Toyota', 'Tercel');

console.log(`${c}`)

