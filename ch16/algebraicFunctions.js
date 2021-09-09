'use strict'

const examples = [
  Math.pow(2, 2),
  Math.sqrt(4),
  Math.cbrt(8),
  Math.exp(1),
  Math.expm1(1),     // e^x - 1
  Math.hypot(3, 4),  // Math.sqrt(x^2 + y^2)
];

for (let example of examples) {
  console.log(example);
}
