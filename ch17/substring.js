'use strict'

// substring matching and replacing
const input = "As I was going to Staint Ives";
//             01234567890123456

const examples = [
  input.startsWith("As"),                // true
  input.endsWith("Ives"),                // true
  input.startsWith("going", 9),          // true, start at index 9
  input.endsWith("going", 14),           // true, treat index 14 as end of string (or length)
  input.includes("going"),               // true
  input.includes("going", 10),           // false, start at index 10 => 'oing to'...
  input.indexOf("going"),                // 9
  input.indexOf("going", 9),             // 9 start at index 9
  input.indexOf("going", 10),            // -1 start at index 10
  input.indexOf("nope"),                 // -1
  input.toLowerCase().startsWith("as"),  // true
  input.replace("going", "making my way"),
];

for (let example of examples) {
  console.log(example);
}



