'use strict'

const misc = [
  Math.abs(-1),
  Math.sign(-11),
  Math.ceil(1.2),
  Math.floor(3.8),
  Math.trunc(4.2),
  Math.round(5.4),
  Math.min(1,2,3),
  Math.max(1,2,3),
];

for (let num of misc) {
  console.log(num);
}
