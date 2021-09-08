"use strict"

function a() {
  console.log('a: calling b');
  b();
  console.log('a: done');
}
function b() {
  console.log('b: calling c');
  c();
  console.log('b: done');
}
function c() {
  console.log('c: throwing error');
  throw new Error('c error');
  console.log('c: done');
}
function d() {
  console.log('d: calling c');
  c();
  console.log('d: done');
}

try {
  a();
} catch(err) {
  console.log(err.stack);
}

try {
  d();
} catch(err) {
  console.log(err.stack);
}


// try... catch... finally
try {
  console.log("this line is executed...");
  throw new Error("whoops");
  console.log("this line is not...");
} catch(err) {
  console.log("there was an error...");
} finally {
  console.log("...always executed");
  console.log("perform cleanup here");
}



