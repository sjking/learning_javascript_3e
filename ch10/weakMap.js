"use strict"

// Use Case: Store private keys in object instances
// Objects (secrets) can be garbage collected
// Not the case with regular maps.
const SecretHolder = (function() {
  const secrets = new WeakMap();

  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }
    getSecret() {
      return secrets.get(this);
    }
  }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('Secret A');
b.setSecret('Secret B');

console.log(a.getSecret());
console.log(b.getSecret());
