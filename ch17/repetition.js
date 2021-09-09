'use strict'

const beer99 = "99 bottles of beer on the wall " +
  "take 1 down and pass it around -- " +
  "98 bottles of beer on the wall.";

const match = beer99.match(/[0-9]+/);

console.log(match);

const numbers = "a1 b22 c333 d4444 e55555 f";

console.log("modifiers");

const mods = [
  numbers.match(/\d{2}/g),
  numbers.match(/\d{4,}/g),
  numbers.match(/\d{2,4}/g),
  numbers.match(/\w\d?/g),
  numbers.match(/\w\d*/g),
  numbers.match(/\w\d+/g),
];

for (let m of mods) {
  console.log(m);
}
