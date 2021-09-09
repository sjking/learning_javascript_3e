'use strict'

const randoms = [
  Math.random(),                                                  // [0,1)
  ((x, y) => x + (y - x) * Math.random())(1,2),                   // [x, y)
  ((m, n) => m + Math.floor((n - m) * Math.random()))(5, 10),     // Integer in [5, 10)
  ((m, n) => m + Math.floor((n - m + 1) * Math.random()))(5, 10), // Integer in [5, 10]
];

for (let r of randoms) {
  console.log(r);
}

// for seeded pseudo random number generators (PRNGs)
// checkout out:
// * https://github.com/davidbau/seedrandom
