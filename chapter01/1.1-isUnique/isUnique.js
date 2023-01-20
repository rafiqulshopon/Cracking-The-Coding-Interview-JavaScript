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
