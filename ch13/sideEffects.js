"use strict"

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let colorIndex = -1;

// return value changes every time (breaks referential transparency)
// mutates the colorIndex variable (side effect)
function getNextRainbowColor() {
  if(++colorIndex >= colors.length) colorIndex = 0;
  return colors[colorIndex];
}

console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
