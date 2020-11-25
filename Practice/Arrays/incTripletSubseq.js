/**
 * Given an array of find the sorted indices values i,j,k
 * s.t. 0<=i<j<k and a[i]<a[j]<a[k]
 */

var increasingTripletSub = function (a, n) {
  /**
   * Aproach is to keep the pointer element low , mid and minindex s.t that
   * at any point in the array we should know what is the lowest element to the left and current minindex and what is second .next
   * greater element in the array corresponding to the current element
   *
   *
   */
  if (n < 3) return false;
  let minindex = 0,
    low = -1,
    mid = -1;
  for (let i = 1; i < n; i++) {
    if (a[i] < a[minindex]) minindex = i;
    else if (mid === -1) {
      low = minindex;
      mid = i;
    } else if (a[i] <= a[mid]) {
      low = minindex;
      mid = i;
    } else return { low, mid, i };
  }
};
const arr = [5, 4, 3, 7, 6, 1, 9];
const n = arr.length;
var response = increasingTripletSub(arr, n);
console.log(response);
