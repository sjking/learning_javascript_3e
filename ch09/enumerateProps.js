"use strict"

class Super {
  constructor() {
    this.name = 'Super';
    this.isSuper = true;
  }
}

Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
  constructor() {
    super();
    this.name = 'Sub';
    this.isSub = true;
  }
}

const obj = new Sub();

// isSuper and isSub defined on instance, while sneaky defined on prototype chain
// note: properties defined in superclass constructor defined on subclass instance
//       as well
for(let p in obj) {
  console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
}

// only properties on instance
console.log(Object.keys(obj))
