// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === target - nums[i]) {
//         return [i, j];
//       }
//     }
//   }
// }

// twoSum([2, 7, 11, 15], 9);

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reverseNum =
    parseInt(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x);
  console.log(reverseNum);
  if (reverseNum < Math.pow(2, 31) * -1 || reverseNum > Math.pow(2, 31) - 1) {
    return 0;
  } else return reverseNum;
};
