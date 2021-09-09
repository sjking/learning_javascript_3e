'use strict'

const beer99 = "99 bottles of beer on the wall " +
  "take 1 down and pass it around -- " +
  "98 bottles of beer on the wall.";

const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);

console.log(matches);

const m1 = beer99.match(/[0123456789]/g); // good
const m2 = beer99.match(/[0-9]/g);        // double-plus good

console.log(m1);
console.log(m2);

// match letters, numbers, dashes, misc punctuation
const match = beer99.match(/[\-0-9a-z.]/ig);

console.log(match);

// ...
console.log("Negating character sets");

const m3 = beer99.match(/[^\-0-9a-z.]/);
console.log(m3);
