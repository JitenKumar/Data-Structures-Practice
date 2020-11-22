/**
 * A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  /**
   * Linear Approach
   */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return nums.length - 1;
};
const arr = [1, 2, 3, 1];
console.log(findPeakElement(arr));

var findPeakElement2 = function (nums) {
  /**
   * Binary Search Modified Approach
   */
  return binarySearch(nums, 0, nums.length - 1, nums.length);
};

var binarySearch = function (a, start, end, n) {
  let mid = Math.floor((start + end) / 2);
  if (
    (mid === 0 || a[mid - 1] < a[mid]) &&
    (mid === n - 1 || a[mid + 1] < a[mid])
  ) {
    return mid;
  } else if (mid > 0 && a[mid - 1] > a[mid]) {
    return binarySearch(a, start, mid - 1, n);
  }
  return binarySearch(a, mid + 1, end, n);
};
console.log(findPeakElement2(arr));
