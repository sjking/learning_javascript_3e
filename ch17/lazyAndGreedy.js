'use strict'

// greedy match by default
const input = "Regex pros know the difference between\n" +
  "<i>greedy</i> and <i>lazy</i> matching.";
const res1 = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');

// so it matches as much as possible...

console.log(res1);
// Regex pros know the difference between
// <strong>greedy</i> and <i>lazy</strong> matching.

// woops...
// time to get lazy

console.log("Lazy");

const res2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(res2);
