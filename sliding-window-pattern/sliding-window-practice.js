// function minSubarraySum(arr, num) {
//   minSum = 0;
//   tempSum = 0;

//   if (arr.length < num) return null;

//   for (let i = 0; i < num; i++) {
//     minSum += arr[i];
//   }

//   tempSum = minSum;

//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     minSum = Math.min(minSum, tempSum);
//   }

//   return minSum;
// }

// console.log(minSubarraySum([5, 1, 3, 7, 2], 2));

// function minSubArrayLen(arr, target) {
//   let minLen = Infinity;
//   let start = 0;
//   let windowSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     windowSum += arr[i];

//     while (windowSum >= target) {
//       minLen = Math.min(minLen, i - start + 1);
//       windowSum -= arr[start];
//       start++;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

// function findLongestSubstring(str) {
//   let start = 0;
//   let maxString = 0;
//   seen = {};

//   for (let i = 0; i < str.length; i++) {
//     const ch = str[i];

//     if (seen[ch] >= start) {
//       start = seen[ch] + 1;
//     }

//     seen[ch] = i;

//     maxString = Math.max(maxString, i - start + 1);
//   }

//   return maxString;
// }

// console.log(findLongestSubstring('abcabcbb'));

function findLongestSubstring(str) {
  let maxLen = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char] >= start) {
      start = seen[char] + 1; //abcaabcc
    }

    seen[char] = i;

    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

console.log(findLongestSubstring('abcaabcc'));
