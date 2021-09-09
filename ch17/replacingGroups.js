'use strict'

// preserve href attribute only
let html = '<a class="nope" href="/yep">Yep</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');

console.log(html);

// preserve class and href attribute only
// note: must be in same order
html = '<a class="yep" href="/yep" id="nope">Yep</a>';
html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');

const input = "One two three";

const res = [
  input.replace(/two/, '($`)'),  // "One (One ) three"    -> everything before match
  input.replace(/\w+/g, '($&)'), // "(One) (two) (three)" -> match itself
  input.replace(/two/, '($\')'), // "One ( three) three"  -> everything after match
  input.replace(/two/, '($$)'), // "One ($) three"        -> dollar itself
];

for (let r of res) {
  console.log(r);
}
