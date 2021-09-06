"use strict"

class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created");
  }
  addPassenger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log("Car created");
  }
  deployAirbags() {
    console.log("BWOOSH!");
  }
}

const v = new Vehicle();

v.addPassenger("Frank");
v.addPassenger("Judy");

console.log(v.passengers)

const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");

console.log(c.passengers)

//console.log(v.deployAirbags())  // error
c.deployAirbags()

class Motorcycle extends Vehicle {}
const c2 = new Car();
const m = new Motorcycle();

console.log(c2 instanceof Car)
console.log(c2 instanceof Vehicle)
console.log(m instanceof Car)
console.log(m instanceof Motorcycle)
console.log(m instanceof Vehicle)



