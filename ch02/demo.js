'use strict';
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' },
];
// es6 feature: object destructuring
function say({ subject, verb, object }) {
  // es6 feature: template strings
  // note that quotes below are backticks (`), not single quotes (')
  console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for..of
for(let s of sentences) {
  say(s);
}

const _ = require('underscore')
const verbs = _.pluck(sentences, 'verb')
for (let verb of verbs) {
  console.log(`found verb: ${verb}`)
}
