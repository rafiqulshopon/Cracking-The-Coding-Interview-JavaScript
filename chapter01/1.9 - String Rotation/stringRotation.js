const stringRotation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  return string2.concat(string2).indexOf(string1) !== -1;
};

/* TEST CASE */
console.log(stringRotation('abcd', 'dabc'), true);
console.log(stringRotation('abc', 'cba'), false);
console.log(stringRotation('', ''), true);
console.log(stringRotation('123', '231'), true);
console.log(stringRotation('hello', 'ohell'), true);
