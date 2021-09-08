"use strict"

// pure function
function isLeapYear(year) {
  if(year % 4 !== 0) return false;
  else if(year % 100 != 0) return true;
  else if(year % 400 != 0) return false;
  else return true;
}

// No (external) side effects but not pure (lack referential transparency)
const getNextRainbowColor = (function() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let colorIndex = -1;
  return function() {
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
  };
})();


// The author says that this is now a pure function
function getRainbowIterator() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let colorIndex = -1;
  return {
    next() {
      if(++colorIndex >= colors.length) colorIndex = 0;
      return { value: colors[colorIndex], done: false };
    }
  };
}

const rainbowIterator = getRainbowIterator();
console.log(rainbowIterator.next().value);
console.log(rainbowIterator.next().value);
console.log(rainbowIterator.next().value);
console.log(rainbowIterator.next().value);
