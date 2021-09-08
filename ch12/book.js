"use strict"

const book = [
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
  "Up above the world you fly,",
  "Like a tea tray in the sky.",
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
];

// get an iterator using values method
const it = book.values();

console.log(it.next()) // { value: 'Twinkle, twinkle, little bat!', done: false }
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) // { value: undefined, done: true }


const it2 = book.values();
let current = it2.next();

console.log("Using while loop");

while(!current.done) {
  console.log(current.value);
  current = it2.next();
}

