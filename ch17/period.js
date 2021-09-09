'use strict'

// 5 digit zipcode, followed by any character
// don't care about anything else on the line
const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
const match = input.match(/\d{5}.*/);

const input2 = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 5555552525.";
const match2 = input2.match(/\d{5}./);

console.log(match);
console.log(match2);
