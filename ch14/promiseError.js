'use strict'

function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for(let i=seconds; i>=0; i--) {
      setTimeout(function() {
        if(i===13) return reject(new Error("DEFINITELY NOT COUNTING THAT"));
        if(i>0) console.log(i + '...');
        else resolve(console.log("GO!"));
      }, (seconds-i)*1000);
    }
  });
}

// use catch handler
const p = countdown(5);
p.then(function() { console.log("Success!"); });
p.catch(function(err) { console.log("Error: " + err.message) });

const e = countdown(15);
e.then(function() { console.log("Success!"); });
e.catch(function(err) { console.log("Error: " + err.message) });
