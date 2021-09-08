'use strict'

function countdown() {
  let i; // note we declare let outside of the for loop
  console.log("Countdown:");
  for(i=5; i>=0; i--) {
    setTimeout(function() {
    console.log(i===0 ? "GO!" : i);
    }, (5-i)*1000);
  }
}
countdown();

function countdown2() {
  console.log("Countdown:");
  for(let i=5; i>=0; i--) { // i is now block-scoped
    setTimeout(function() {
      console.log(i===0 ? "GO!" : i);
    }, (5-i)*1000);
  }
}
countdown2();
