const coefficients = {
  a: 1,
  b: 2,
  c: 5,
};

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

const coefficients2 = {
  a: 1,
  b: 2,
};

const betterCoefficients = new Proxy(coefficients2, {
  get(target, key) {
    if(!/^[a-z]$/.test(key)) return target[key];
    return target[key] || 0;
  },
});


console.log(betterCoefficients.a);
console.log(betterCoefficients.b);
console.log(betterCoefficients.c);
console.log(betterCoefficients.d);
console.log(betterCoefficients.wat);

// set
const cook = {
  name: "Walt",
  redPhosphorus: 100, // dangerous
  water: 500,         // safe
};

const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if(key === 'redPhosphorus') {
      if(target.allowDangerousOperations)
        return target.redPhosphorus = value;
      else
        return console.log("Too dangerous!");
    }
    // all other properties are safe
    target[key] = value;
  },
});

protectedCook.water = 550;         // 550
protectedCook.redPhosphorus = 150; // Too dangerous!

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150; // 150

console.log(protectedCook);
