'use strict'

const moment = require('moment-timezone');

const d = new Date(Date.UTC(2016, 4, 27));  // May 27, 2016 UTC

console.log(d);

// passing an array to Moment.js uses the same parameters as JavaScript's Date
// constructor, including zero-based months (0=Jan, 1=Feb, etc.). toDate()
// converts back to a JavaScript Date object.
const d2 = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();

console.log(d2); // Date instance
