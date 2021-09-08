'use strict'

const fs = require('fs');

// Node function call
// Convert any Node-style method that takes a callback to a promise
function nfcall(f, ...args) {
  return new Promise(function(resolve, reject) {
    f.call(null, ...args, function(err, ...args) {
      if(err) return reject(err);
      resolve(args.length<2 ? args[0] : args);
    });
  });
}

function ptimeout(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delay);
  });
}

// generator runner
// Based on this: https://davidwalsh.name/es6-generators
function grun(g) {
  // g is a generator function (function* that yields)
  const it = g();
  (function iterate(val) {
    const x = it.next(val);
    if (!x.done) {
      if (x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
      } else {
        // async recursion used for performance benefits
        setTimeout(iterate, 0, x.value);
      }
    }
  })();
}

function* theFutureIsNow() {
  //const dataA = yield nfcall(fs.readFile, 'a.txt');
  //const dataB = yield nfcall(fs.readFile, 'b.txt');
  //const dataC = yield nfcall(fs.readFile, 'c.txt');
  const data = yield Promise.all([
    nfcall(fs.readFile, 'a.txt'),
    nfcall(fs.readFile, 'b.txt'),
    nfcall(fs.readFile, 'c.txt'),
  ]);
  yield ptimeout(60*1000);
  //yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
  yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
}

//grun(theFutureIsNow);

// Don't roll your own generator runners
// see co, and Koa
// https://github.com/tj/co

// Better exception handling
function* theFutureIsBetter() {
  let data;
  try {
    data = yield Promise.all([
      nfcall(fs.readFile, 'a.txt'),
      nfcall(fs.readFile, 'b.txt'),
      nfcall(fs.readFile, 'c.txt'),
    ]);
  } catch(err) {
    console.error("Unable to read one or more input files: " + err.message);
    throw new Error('fail'); // causing weird errors
    // apparently this is an unhandle promise rejection
    // This code is somehow broken, since this is yielding Promises
  }

  yield ptimeout(60*1000);

  try {
    yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
  } catch(err) {
    console.error("Unable to write output file: " + err.message);
    throw err;
  }
}

//grun(theFutureIsBetter);


function* theFutureIsFixed() {
  let data;
  data = yield Promise.all([
    nfcall(fs.readFile, 'a.txt'),
    nfcall(fs.readFile, 'b.txt'),
    nfcall(fs.readFile, 'c.txt'),
  ]).catch(err => {
    console.error("Unable to read one or more input files: " + err.message);
    yield Promise.reject("fail");
  });

  yield ptimeout(60*1000);

  try {
    yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
  } catch(err) {
    console.error("Unable to write output file: " + err.message);
    throw err;
  }
}

//grun(theFutureIsFixed);
