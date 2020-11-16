/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let count = {};
  let nums1 = [...nums].sort(function (a, b) {
    return a - b;
  }); // to sort the numeric values
  for (let i = 0; i < nums1.length; i++) {
    if (count[nums1[i]] == undefined) {
      count[nums1[i]] = i;
    }
  }
  let out = [];
  for (let i = 0; i < nums.length; i++) {
    out[i] = count[nums[i]];
  }

  return out;
};
const a = [5, 0, 10, 0, 10, 6];
smallerNumbersThanCurrent(a);

/*
Approach 2 
Given the array ->
1.create an array of size 101 and at index get the count fromt he sums arrays
2.get the prefix sum for the index to 1 to 101 using arr[i]= arr[i] + arr[i-1]
2. create new array of size equal to to nums and then get the index value from the result array by out[i] = prefixarray[i-1] ; i belongs to original sums
*/
var smallerNumbersThanCurrent1 = function (nums) {
  let count = new Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] += 1;
  }
  // get the prefix sum of the elements
  for (let i = 1; i < 101; i++) {
    count[i] += count[i - 1];
  }
  let result = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[i] += count[nums[i] - 1];
    }
  }
  return result;
};

const a1 = [5, 0, 10, 0, 10, 6];
console.log(smallerNumbersThanCurrent1(a1));
