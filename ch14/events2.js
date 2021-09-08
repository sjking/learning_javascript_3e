'use strict'

const EventEmitter = require('events').EventEmitter;

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

const c = new Countdown(15, true)
  .on('tick', function(i) {
    if (i > 0) {
      console.log(i + '...');
    }
  });

c.go()
  .then(function() {
    console.log('GO!');
  })
  .catch(function(err) {
    console.error("got error: " + err.message);
  })


