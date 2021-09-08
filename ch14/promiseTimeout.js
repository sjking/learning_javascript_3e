'use strict'

const EventEmitter = require('events').EventEmitter;

function launch() {
  return new Promise(function(resolve, reject) {
    if (Math.random() < 0.5) return;
    console.log("Lift off!");
    setTimeout(function() {
      resolve("In orbit!");
    }, 2*1000);
  });
}

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    const countdown = this;
    const timeoutIds = [];
    return new Promise(function(resolve, reject) {
      for(let i=countdown.seconds; i>=0; i--) {
        timeoutIds.push(setTimeout(function() {
          if(countdown.superstitious && i===13) {
            // clear all pending timeouts
            timeoutIds.forEach(clearTimeout);
            return reject(new Error("DEFINITELY NOT COUNTING THAT"));
          }
          countdown.emit('tick', i);
          if(i===0) resolve();
        }, (countdown.seconds-i)*1000));
      }
    });
  }
}

function addTimeout(fn, timeout) {
  if (timeout === undefined) {
    timeout = 1000; // default timeout
  }
  return function(...args) {
    return new Promise(function(resolve, reject) {
      const tid = setTimeout(reject, timeout, new Error("promise timed out"));
      fn(...args)
        .then(function(...args) {
          clearTimeout(tid);
          resolve(...args);
        })
        .catch(function(...args) {
          clearTimeout(tid);
          reject(...args);
        });
    });
  }
}

const c = new Countdown(2).on('tick', i => console.log(i + '...'));

c.go()
  .then(addTimeout(launch, 4*1000)) // randomly fails to launch 1/2
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("Houston, we have a problem: " + err.message);
  });



