const checkPermute = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    const sortedStringOne = stringOne.split('').sort().join('');
    const sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};

/* TEST CASE */
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aa'), false);
console.log(checkPermute('bbba', 'bbab'), true);
