const isPalindrome = (str) => {
  const sanitised = str.replace(/[^\w]/gi, '').toLowerCase();
  return sanitised.split('').reverse().join('') === sanitised;
};

const isPalindromePointer = (str) => {
  str = str.replace(/[^\w]/gi, '').toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
};
