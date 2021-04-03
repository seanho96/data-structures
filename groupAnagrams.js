const groupAnagrams = (strs) => {
  const hashTable = {};

  for (let str of strs) {
    const sorted = str.split('').sort().join('');

    if (hashTable[sorted]) {
      hashTable[sorted].push(str);
    } else {
      hashTable[sorted] = [str];
    }
  }
  return Object.values(hashTable);
};

console.log(groupAnagrams(['ab', 'ba', 'abc', 'abd', 'bb']));
