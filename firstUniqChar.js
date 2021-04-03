const firstUniqChar = (str) => {
  const hashTable = {};

  for (let char of str) {
    if (hashTable[char]) {
      hashTable[char]++;
    } else {
      hashTable[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (hashTable[char] === 1) return char;
  }
  return 'none';
};

const firstUniqChar2 = (str) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return 'none';
};

console.log(firstUniqChar2('aaron'));
