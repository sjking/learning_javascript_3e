'use strict'

const d = new Date(Date.UTC(2021, 8, 13));

const components = [
  d.getFullYear(),
  d.getMonth(),
  d.getDate(),
  d.getDay(),
  d.getHours(),
  d.getMinutes(),
  d.getSeconds(),
  d.getMilliseconds(),
  d.getUTCFullYear(),
  d.getUTCMonth(),
  d.getUTCDate(),
];

for (let component of components) {
  console.log(component);
}
