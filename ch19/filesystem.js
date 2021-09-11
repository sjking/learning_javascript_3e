'use strict'

const fs = require('fs');
const path = require('path');

fs.writeFile('hello.txt', 'hello from Node!', function(err) {
  if (err) {
    return console.log('Error writing to file.');
  }
});

// Always write to the directory where the source file resides
fs.writeFile(__dirname + '/hello2.txt', 'Hello again from Node!', function(err) {
  if (err) {
    return console.error('Error writing to file.');
  }
});

// returns a buffer of raw data by default
fs.readFile(path.join(__dirname, 'hello2.txt'), function(err, data) {
  if (err) {
    return console.error('Error reading file.');
  }
  console.log('Read file contents (raw buffer):');
  console.log(data);
});

// specify encoding for human-friendly output
// Note: utf8 encoding is the default for writing with fs.writeFile as above
fs.readFile(path.join(__dirname, 'hello2.txt'), { encoding: 'utf8' }, function(err, data) {
  if (err) {
    return console.error('Error reading file.');
  }
  console.log('Read file contents (utf8):');
  console.log(data);
});

///////////////////////////
// Synchronous functions //
///////////////////////////

try {
  fs.writeFileSync(path.join(__dirname, 'hello3.txt'), 'Hello sync');
} catch(err) {
  console.error('Error writing file.');
}
try {
  const data = fs.readFileSync(path.join(__dirname, 'hello3.txt'), { encoding: 'utf8' });
  console.log('Read file sync:');
  console.log(data)
} catch(err) {
  console.error('Error reading file.');
}

// List directory
fs.readdir(__dirname, function(err, files) {
  if (err) {
    return console.error('Unable to read directory contents.');
  }
  console.log(`Contents of ${__dirname}:`);
  console.log(files.map(f => '\t' + f).join('\n'));
});
