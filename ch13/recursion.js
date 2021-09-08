'use strict'

function findNeedle(haystack) {
  if(haystack.length === 0)
    return "no haystack here!";

  if(haystack.shift() === 'needle')
    return "found it!"

  return findNeedle(haystack);
}

let res = findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']);
console.log(res);
