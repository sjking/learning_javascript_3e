"use strict"

const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map();

// Option 1
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

// Option 2
userRoles
  .set(u1, 'User')
  .set(u2, 'User')
  .set(u3, 'Admin');

// Option 3
const userRoles2 = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin'],
]);

console.log(userRoles.get(u2))

console.log(userRoles.has(u1))
console.log(userRoles.get(u1))
console.log(userRoles.has(u4))
console.log(userRoles.get(u4))

// replace existing key
userRoles.set(u1, 'Admin')
console.log(userRoles.get(u1))

// size
console.log('size: ' + userRoles.size)

for(let u of userRoles.keys())
  console.log(u.name);

for(let r of userRoles.values())
  console.log(r);

for(let ur of userRoles.entries())
  console.log(`${ur[0].name}: ${ur[1]}`);

// destructuring for entries
for (let [u, r] of userRoles.entries())
  console.log(`${u.name}: ${r}`);

// the entries() method is the default iterator for
// a Map, so you can shorten the previous example to:
for(let [u, r] of userRoles)
  console.log(`${u.name}: ${r}`);


// get array using spread operator
console.log([...userRoles.values()])

// delete single entry
userRoles.delete(u2)
console.log(userRoles.size)

userRoles.clear();
console.log(userRoles.size)











