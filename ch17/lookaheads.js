'use strict'

// using multiple regexes
function validPassword(p) {
  return /[A-Z]/.test(p) &&   // at least one uppercase letter
    /[0-9]/.test(p) &&        // at least one number
    /[a-z]/.test(p) &&        // at least one lowercase letter
    !/[^a-zA-Z0-9]/.test(p);  // only letters and numbers
}

// lookaheads don't consumer input
function validPassword2(p) {
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}

const examples = [
  validPassword("aB9"),
  validPassword("ab9*"),
  validPassword2("aB1"),
  validPassword2("ab9*"),
];

for (let res of examples) {
  console.log(res);
}
