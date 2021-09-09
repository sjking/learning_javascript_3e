'use strict'

const moment = require('moment-timezone');

const friendly = [
  moment().subtract(10, 'seconds').fromNow(),
  moment().subtract(44, 'seconds').fromNow(),
  moment().subtract(45, 'seconds').fromNow(),
  moment().subtract(5, 'minutes').fromNow(),
  moment().subtract(44, 'minutes').fromNow(),
  moment().subtract(45, 'minutes').fromNow(),
  moment().subtract(5, 'hours').fromNow(),
  moment().subtract(21, 'hours').fromNow(),
  moment().subtract(22, 'hours').fromNow(),
  moment().subtract(344, 'days').fromNow(),
  moment().subtract(345, 'days').fromNow(),
];

for (let f of friendly) {
  console.log(f);
}
