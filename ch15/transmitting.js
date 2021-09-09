'use strict'

const before = { d: new Date() };
console.log(before.d instanceof Date); // true
const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(after.d instanceof Date);  // false
console.log(typeof after.d);           // "string"

after.d = new Date(after.d);
console.log(after.d instanceof Date);  // true

// Or use the numeric value of the date
console.log("========");
const before2 = { d: new Date().valueOf() };
console.log(typeof before2.d);             // "number"
const json2 = JSON.stringify(before2);
const after2 = JSON.parse(json2);
console.log(typeof after2.d);              // "number"
const d = new Date(after2.d);
console.log(d instanceof Date);
