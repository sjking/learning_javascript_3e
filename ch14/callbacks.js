'use strict'

console.log("Before timeout: " + new Date());

function f() {
  console.log("After timeout: " + new Date());
}

setTimeout(f, 5 * 1000); // 5 seconds

console.log("I happened after setTimeout!");
console.log("Me too!");

// setInterval
const start = new Date();
let i = 0;
const intervalId = setInterval(function() {
  let now = new Date();
  if (now.getMinutes() !== start.getMinutes() || ++i > 10) {
    return clearInterval(intervalId);
  }
  console.log(`${i}: ${now}`);
}, 5 * 1000);


