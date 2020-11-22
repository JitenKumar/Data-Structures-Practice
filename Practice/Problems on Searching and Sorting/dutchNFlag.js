/**
 * 
Given an array of 0's 1's and 2's sort the array such that all 0 are on the left side . 1 on the middle and 2 on the right side.

example-> 

A:[0,1,0,1,2,1,2,1]
O/P:[0,0,1,1,1,1,2,2]

 */

function DNF(arr) {
  /**
   * Approach iterate and keep counters current , low and high -> low for 0 and high for 2 and current for 1
   * and push elements to its positions
   */
  let l = 0,
    c = 0;
  let h = arr.length - 1;
  while (c <= h) {
    if (arr[c] === 0) {
      [arr[c], arr[l]] = [arr[l], arr[c]];
      l++;
      c++;
    }
    if (arr[c] === 1) {
      c++;
    }
    if (arr[c] === 2) {
      [arr[c], arr[h]] = [arr[h], arr[c]];
      h--;
    }
  }
  return arr;
}
const array = [0, 1, 0, 1, 2, 1, 2, 1];
console.log(DNF(array));
