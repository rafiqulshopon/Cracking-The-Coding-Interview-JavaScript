const stringCompression = (string) => {
  let currChar = string[0];
  let currCount = 1;
  let compressed = '';
  for (let i = 1; i < string.length; i++) {
    if (currChar === string[i]) {
      currCount++;
    } else {
      compressed += currChar + currCount;
      currChar = string[i];
      currCount = 1;
    }
  }
  compressed += currChar + currCount;
  return compressed.length < string.length ? compressed : string;
};

/* TEST CASE */
console.log(
  'shoooopoooonnnnn',
  stringCompression('shoooopoooonnnnn'),
  's1h1o4p1o4n5'
);
console.log('raaafiqul', stringCompression('raaafiqul'), 'r1a3f1i1q1u1l1');
