'use strict'

function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function() {
        if (i > 0) {
          console.log(i + '...');
        } else {
          resolve(console.log("GO!"));
        }
      }, (seconds - i) * 1000);
    }
  });
}

countdown(5).then(
  function() {
    console.log("countdown completed successfully");
  },
  function(err) {
    console.log("countdown experienced an error: " + err.message);
  }
);

// use catch handler
const p = countdown(5);
p.then(function() { console.log("Success!"); });
p.catch(function(err) { console.log("Error: " + err.message) });


