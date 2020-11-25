/**
 * Inversion in an array is if given then index i and j such that
 * i<j and A[i]>A[j] in the array
 *
 *
 */
var countInversion = function (a, low, high) {
  /**
   * Inversion is very much similar to the no of elements we have to shift to make an array sorted.
   * All element less than the current element to the right will give the inversion in the array
   * Using merge sort to solve the problem
   */
  if (low >= high) return 0;
  let mid = Math.floor(low + (high - low) / 2);
  console.log("Mid is ",mid);
  let l, r, m;
  l = countInversion(a, low, mid);
  r = countInversion(a, mid + 1, high);
  m = mergeAndCount(a, low, mid, high);
  return l + r + m;
};

var mergeAndCount = function (a, low, mid, high) {
  let count = 0;
  let i = low,
    j = mid;
  let k = 0;
  let temp = a.slice(low, high+1);
  console.log(temp);
  while (i < mid && j <= high) {
    if (a[i] > a[j]) {
      count += mid - i + 1;
      temp[k++] = a[j++];
    } else {
      temp[k++] = a[i++];
    }
  }
  while (i < mid) {
    temp[k++] = a[i++];
  }
  while (j < high) {
    temp[k++] = a[j++];
  }
  console.log("After change array is",temp)
  for (let m = 0; m < temp.length; m++) {
    a[low++] = temp[m];
  }
  console.log("Count is",count);
  return count;
};
const arr = [2,5,1,7,9];
console.log(countInversion(arr,0,arr.length));