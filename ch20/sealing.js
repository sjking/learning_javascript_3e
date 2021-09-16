class Logger {
  constructor(name) {
    this.name = name;
    this.log = [];
  }
  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now(),
    });
  }
}

const log = new Logger("Captain's Log");
Object.seal(log);
console.log(Object.isSealed(log));        // true
log.name = "Captain's Boring Log";        // OK
log.add("Another boring day at sea...."); // OK

// TypeError: Can't add property newProp, object is not extensible
log.newProp = 'test';

log.name = 'test'; // OK

// TypeError: Cannot delete property 'name' of [object Object]
delete log.name;

// TypeError: Cannot redefine property: log
Object.defineProperty(log, 'log', { enumerable: false });
