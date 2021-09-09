'use strict'

const moment = require('moment-timezone');

const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

const msDiff = d2 - d1;
const daysDiff = msDiff/1000/60/60/24;

console.log(msDiff);
console.log(daysDiff);

const dates = [];
// create some random dates
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;

for(let i=0; i<10; i++)
  dates.push(new Date(min + delta*Math.random()));
// dates are random and (probably) jumbled
// we can sort them (descending):
dates.sort((a, b) => b - a);

console.log(dates);

// moment.js jazz
const m = moment(); // now
m.add(3, 'days'); // 3 days in future
m.subtract(2, 'years');

console.log(m);

const m2 = moment();
m2.startOf('year');
m2.endOf('month');

console.log(m2);

console.log("Moment chaining");

const m3 = moment().add(10, 'hours').subtract(3, 'days').endOf('month');


