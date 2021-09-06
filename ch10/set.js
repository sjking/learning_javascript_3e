"use strict"

const roles = new Set();

roles.add("User");
roles.add("Admin");

console.log(roles.size);
roles.add("User");
console.log(roles.size);
roles.delete("Admin");
console.log(roles);


