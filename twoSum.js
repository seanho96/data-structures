const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const want = target - num;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === want) return [i, j];
    }
  }
};

const twoSum2 = (nums, target) => {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const want = target - num;
    if (want in hashTable) {
      const leftIndex = hashTable[want];
      return [leftIndex, i];
    } else {
      hashTable[num] = i;
    }
  }
};
