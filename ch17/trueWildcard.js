'use strict'

const sentence = "\nabc.+$3";

// match everything that is whitespace
// and everything non whitespace
const match = sentence.match(/[\s\S]/g);

console.log(match);
