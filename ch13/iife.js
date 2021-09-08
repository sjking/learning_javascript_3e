'use strict'

setTimeout(function() { console.log("hello"); }, 1500);

// not what you expected: prints out -1 five times
// since by the time the loop finishes, i == -1
// and none of the logs have happened yet.
var i;
for(i=5; i>=0; i--) {
  setTimeout(function() {
    console.log(i===0 ? "go!" : i);
  }, (5-i)*1000);
}

// better
function loopBody(i) {
  setTimeout(function() {
    console.log(i===0 ? "go!" : i);
  }, (5-i)*1000);
}

var j;

for(j=5; j>=0; j--) {
  loopBody(j);
}

// even better, using IIFE
// Immediately invoked function expression
// No need to have a superfluous named function
var i;
for(i=5; i>=0; i--) {
  (function(i) {
    setTimeout(function() {
      console.log(i===0 ? "go!" : i);
    }, (5-i)*1000);
  })(i);
}

// greatly simplified using block-scoped variables
// See that its using let instead of var now
// Since var would be hoisted
for(let i=5; i>=0; i--) {
  setTimeout(function() {
    console.log(i===0 ? "go!" : i);
  }, (5-i)*1000);
}

