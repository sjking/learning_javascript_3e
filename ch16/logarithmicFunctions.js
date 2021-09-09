'use strict'

// Note, log is the natural logarithm (i.e., base e)
const examples = [
  Math.log(Math.E),
  Math.log10(10),
  Math.log2(2),
  Math.log1p(Math.E - 1), // Math.log(1 + x)
];

for (let example of examples) {
  console.log(example);
}
