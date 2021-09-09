'use strict'

// non-capturing groups
const text = "Visit oreilly.com example.edu wikipedia.org";
const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/ig);
const match2 = text.match(/[a-z]+(\.com|\.org|\.edu)/ig);

// Note: capturing vs. non-capturing doesn't seem to make a difference here
console.log(match);
console.log(match2);

const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
  '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
  '<link rel="stylesheet" href="//anything.com/flexible.css">\n' +
  '<link rel="stylesheet" href="blah://wat.com/flexible.css">';

//const matches = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);

// The example above is used in the book, but I think the intent should be
// the below example:
const matches = html.match(/(?:https?\:)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);

console.log(matches);
