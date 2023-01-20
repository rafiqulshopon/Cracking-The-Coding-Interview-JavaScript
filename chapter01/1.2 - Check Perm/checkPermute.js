const checkPermute = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  const charCount = {};
  for (let char of stringOne) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  for (let char of stringTwo) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};

/* TEST CASE */
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aa'), false);
console.log(checkPermute('bbba', 'bbab'), true);
