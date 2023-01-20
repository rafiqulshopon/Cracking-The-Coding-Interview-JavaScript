const stringCompression = (string) => {
  let compressed = '';
  let currChar = '';
  let currCount = '';
  let maxCount = 1;
  for (let i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      compressed = compressed + currChar + currCount;
      maxCount = Math.max(maxCount, currCount);
      currChar = string[i];
      currCount = 1;
    } else {
      currCount++;
    }
  }
  compressed = compressed + currChar + currCount;
  maxCount = Math.max(maxCount, currCount);

  return maxCount === 1 ? string : compressed;
};

/* TEST CASE */
console.log('raaafiqul', stringCompression('raaafiqul'), 'r1a3f1i1q1u1l1');
console.log(
  'shoooopoooonnnnn',
  stringCompression('shoooopoooonnnnn'),
  's1h1o4p1o4n5'
);
