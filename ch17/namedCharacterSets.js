'use strict'

const stuff =
  'hight:        9\n' +
  'medium:       5\n' +
  'low:          2\n';

// zero or more whitespace followed by any digit
const levels = stuff.match(/:\s*[0-9]/g);
const levels2 = stuff.match(/:\s*\d/g);

console.log(levels);
console.log(levels2);

const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');

console.log(neatPhone);

// at least one character that’s not whitespace
const field = '   something  ';
const valid = /\S/.test(field);
console.log(valid); // true
