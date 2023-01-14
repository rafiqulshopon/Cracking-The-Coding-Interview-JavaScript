'use strict';

const isUnique = (input) => {
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

/* TEST CASE */
console.log(isUnique('xyz'), 'true');
console.log(isUnique('tyts'), 'false');
console.log(isUnique('sdfs'), 'false');
console.log(isUnique('tnod'), 'true');
