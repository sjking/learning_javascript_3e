'use strict'

const trigs = [
  Math.sin(Math.PI/2),
  Math.cos(Math.PI),
  Math.tan(Math.PI/4),
  Math.asin(0),
  Math.acos(0),
  Math.atan(0),
  Math.atan2(0, 1), // counterclockwise angle (in radians) from the x-axis to the point (x, y)
];

for (let t of trigs) {
  console.log(t);
}

// convert degrees to radians
function deg2rad(d) {
  return d/180 * Math.PI;
}

console.log(deg2rad(180) === Math.PI);

// convert radians to degrees
function rad2deg(r) {
  return r/Math.PI * 180;
}

console.log(rad2deg(Math.PI) === 180);
