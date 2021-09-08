'use strict'

const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';
fs.readFile(fname, function(err, data) {
  if (err) {
    return console.error(`error reading file ${fname}: ${err.message}`);
    console.log(`${fname} contents: ${data}`);
  }
});

// callback hell
function dont() {
  fs.readFile('a.txt', function(err, dataA) {
    if (err) console.error(err);
    fs.readFile('b.txt', function(err, dataB) {
      if (err) console.error(err);
      setTimeout(function() {
        fs.writeFile('d.txt', dataA + dataB + dataC, function(err) {
          if (err) console.error(err);
        });
      }, 5*1000);
    });
  });
}


// won't work
// try... catch blocks only work within same function
function readSketchyFile() {
  try {
    fs.readFile('does_not_exist.txt', function(err, data) {
      if(err) throw err;
    });
  } catch(err) {
    console.log('warning: minor issue occurred, program continuing');
  }
}
readSketchyFile();
