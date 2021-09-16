// object property attributes
const obj = { foo: "bar" };

let attr = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(attr);

// make foo property read-only
Object.defineProperty(obj, 'foo', { writable: false });

attr = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(attr);
obj.foo = 'nope';
console.log(obj);

// add access property
// Note: this is only way possible after an object was already created
Object.defineProperty(obj, 'color', {
  // note that we have to use a property name other than "color", since
  // that is the property we are defining; thanks to alert reader
  // Jauntxo Cruz for pointing this out
  get: function() { return this._color; },
  set: function(value) { this._color = value; },
});

obj.color = "blue";
console.log(obj);

// Add data property
Object.defineProperty(obj, 'name', {
  value: 'Cynthia',
});

Object.defineProperty(obj, 'greet', {
  value: function() { return `Hello, my name is ${this.name}!`; }
});

console.log(obj.name);
console.log(obj.greet());

// Should avoid using Object.keys, or for..in on array,
// but a way to mitigate problems is making properties of
// array non-enumerable.
const arr = [3, 1.5, 9, 2, 5.2];
arr.sum = function() { return this.reduce((a, x) => a+x); }
arr.avg = function() { return this.sum()/this.length; }
Object.defineProperty(arr, 'sum', { enumerable: false });
Object.defineProperty(arr, 'avg', { enumerable: false });

console.log(arr.sum());
console.log(arr.avg());

const arr2 = [3, 1.5, 9, 2, 5.2];
Object.defineProperty(arr2, 'sum', {
  value: function() { return this.reduce((a, x) => a+x); },
  enumerable: false
});

Object.defineProperty(arr2, 'avg', {
  value: function() { return this.sum()/this.length; },
  enumerable: false
});

const arr3 = [3, 1.5, 9, 2, 5.2];
Object.defineProperties(arr3, {
  sum: {
    value: function() { return this.reduce((a, x) => a+x); },
    enumerable: false
  },
  avg: {
    value: function() { return this.sum()/this.length; },
    enumerable: false
  }
});

console.log(arr3.sum());
console.log(arr3.avg());
console.log(Object.keys(arr3));

