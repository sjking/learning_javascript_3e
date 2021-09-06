"use strict"

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }

  get userGear() { return this._userGear; }

  set userGear(value) {
    if(this._userGears.indexOf(value) < 0)
      throw new Error(`Invalid gear: ${value}`);
    this._userGear = value;
  }

  shift(gear) {
    // automatically calls the "set" method with gear
    // as single argument
    this.userGear = gear;
  }
}



const car1 = new Car()
const car2 = new Car()
console.log(car1.shift === Car.prototype.shift)
car1.shift('D')

//console.log(car1.shift('d'))  // error

console.log(car1.userGear)
console.log(car1.shift === car2.shift)

car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
console.log(car1.shift === Car.prototype.shift)

console.log(car1.shift === car2.shift)

car1.shift('d'); // no longer error
console.log(car1.userGear)

