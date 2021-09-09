'use strict'

const moment = require('moment-timezone');

const d = new Date(Date.UTC(1930, 4, 10));

// these show output for someone in Los Angeles

const ds = d.toLocaleDateString();
const ts = d.toLocaleTimeString();
const tss = d.toTimeString();
const utc = d.toUTCString();

console.log(ds);
console.log(ts);
console.log(tss);
console.log(utc);

console.log("========");

const a = moment(d).format("YYYY-MM-DD");
const b = moment(d).format("YYYY-MM-DD HH:mm");
const c = moment(d).format("YYYY-MM-DD HH:mm Z");
const e = moment(d).format("YYYY-MM-DD HH:mm [UTC]Z");
const f = moment(d).format("dddd, MMMM [the] Do, YYYY");
const g = moment(d).format("h:mm a");

console.log(a);
console.log(b);
console.log(c);
console.log(e);
console.log(f);
console.log(g);
