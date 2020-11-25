/**
 * 
Search in Rotated Sorted Array
Given and array which is circulated rotated and sorted find the sum of two elements given to an elements
if Found return true
else return false
 */
var searchRotatedArray = function (arr, sum) {
  let l, r;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > arr[i + 1]) {
      r = i;
      l = (i + 1) % len;
    }
  }
  while (l != r) {
    if (arr[l] + arr[r] === sum) return true;
    if (arr[l] + arr[r] < sum) l = (l + 1) % len;
    else r = (len + r - 1) % len;
  }
  return false;
};

const arr = [11, 15, 6, 8, 9, 10];
const sum = 34534;
console.log(searchRotatedArray(arr, sum));
