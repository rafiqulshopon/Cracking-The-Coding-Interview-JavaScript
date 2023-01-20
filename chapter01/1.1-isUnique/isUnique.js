'use strict';

// Solution 1
const isUnique1 = (input) => {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (obj[input[i]] && obj[input[i]] >= 1) {
      return false;
    } else {
      obj[input[i]] = 1;
    }
  }
  return true;
};

// Solution 2
const isUnique = (input) => {
  let chars = new Set();

  for (let i = 0; i < input.length; ++i) {
    if (chars.has(input[i])) {
      return false;
    }
    chars.add(input[i]);
  }
  return true;
};

/* TEST CASE */
console.log(isUnique('xyz'), 'true');
console.log(isUnique('tyts'), 'false');
console.log(isUnique('sdfs'), 'false');
console.log(isUnique('tnod'), 'true');
