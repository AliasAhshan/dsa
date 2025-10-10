/*
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value 
squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// function same(num, numSquared) {
//   if (num.length !== numSquared.length) {
//     return true;
//   }

//   for (let i = 0; i < num.length; i++) {
//     let correctIndex = numSquared.indexOf(num[i] ** 2);
//     // the -1 checks if the index doesnt exist
//     if (correctIndex === -1) {
//       return false;
//     }
//     numSquared.splice(correctIndex, 1);
//   }
//   return true;
// }

// function same(num, numSquared) {
//   if (num.length !== numSquared.length) {
//     return false;
//   }

//   freq1 = {};
//   freq2 = {};

//   for (let val of num) {
//     freq1[val] = (freq1[val] || 0) + 1;
//   }

//   for (let val of numSquared) {
//     freq2[val] = (freq2[val] || 0) + 1;
//   }

//   for (let key of num) {
//     if (!(key ** 2 in freq2)) {
//       return false;
//     }
//     if (freq2[key ** 2] !== freq1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(same([1, 2, 3, 1], [1, 4, 1, 9]));
