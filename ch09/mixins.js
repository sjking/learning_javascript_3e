"use strict"

class Car {}

class InsurancePolicy {}

function makeInsurable(o) {
  o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
  o.getInsurancePolicy = function() { return this.insurancePolicy; }
  o.isInsured = function() { return !!this.insurancePolicy; }
}

makeInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());


