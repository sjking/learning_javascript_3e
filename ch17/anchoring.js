'use strict'

const input = "It was the best of times, it was the worst of times";

const beginning = input.match(/^\w+/g);   // "It"
const end = input.match(/\w+$/g);         // "times"
const everything = input.match(/^.*$/g);  // same as input
const nomatch1 = input.match(/^best/ig);  // no match
const nomatch2 = input.match(/worst$/ig); // no match

const examples = [
  beginning,
  end,
  everything,
  nomatch1,
  nomatch2,
];

for (let ex of examples) {
  console.log(ex);
}

// multiline option
const input2 = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input2.match(/^\w+/mg);  // ["One", "Two", "Three", "Four"]
const endings = input2.match(/\w+$/mg);     // ["line", "lines", "lines", "Four"]

console.log(beginnings);
console.log(endings);
