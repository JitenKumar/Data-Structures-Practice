/**
 * 
 *Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

 

Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 */

/**
 *

 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  /**
   * Time Complexity O(nlogn)  because of the sorting approach
   */
  let nums1 = [...nums].sort(function (a, b) {
    return a - b;
  });
  let start = nums1.length,
    end = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums[i] != nums1[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }
  if (end - 1 < 0) return 0;
  return end - start + 1;
};

var findUnsortedSubarray = function (nums) {
  /**
   * Time Complexity O(n)  because of loop only on the Arrays
   */
  let start = nums.length,
    end = 0;
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack && nums[stack[stack.length - 1]] > nums[i]) {
      start = Math.min(start, stack.pop());
    }
    stack.push(i);
  }
  stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack && nums[stack[stack.length - 1]] < nums[i]) {
      end = Math.max(end, stack.pop());
    }
    stack.push(i);
  }
  if (end - 1 < 0) return 0;
  else return end - start + 1;
};
