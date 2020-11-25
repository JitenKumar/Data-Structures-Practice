/**
 * Given a non-empty array nums containing only positive integers, 
 * find if the array can be partitioned into two 
 * subsets such that the sum of elements in both subsets is equal.

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let leftSum = sum;
  let rightSum = 0;
  for (let j = nums.length - 1; j >= 0; j--) {
    rightSum += nums[j];
    leftSum -= nums[j];
    if (leftSum === rightSum) {
      return true;
    }
  }
  return false;
};
const arr=[1,2,3,4,5,5]
console.log(canPartition(arr));