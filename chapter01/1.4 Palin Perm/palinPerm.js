const palinPerm = (string) => {
  // create Map to store char count
  const chars = new Map();
  let mulligan = false;
  // pump characters in, spaces not counted, all lowercase
  for (const char of string.toLowerCase()) {
    if (char !== ' ') {
      if (!chars.has(char)) {
        chars.set(char, 0);
      }
      chars.set(char, chars.get(char) + 1);
    }
  }
  // check that all chars are even count, except for one exception
  for (const [char, count] of chars) {
    if (count % 2 > 0) {
      if (mulligan) {
        return false;
      } else {
        mulligan = true;
      }
    }
  }
  return true;
};

/* TEST CASE */
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
console.log(palinPerm('abccba'), true);
console.log(palinPerm('abcdba'), false);
console.log(palinPerm('aaa'), true);
console.log(palinPerm('aab'), true);
console.log(palinPerm('abc'), false);
console.log(palinPerm(''), true);
