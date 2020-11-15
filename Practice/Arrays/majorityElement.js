/*
Given an array of no find the maojority element having frequencies greater than n/2 of the array
Solution using Boyer's Moore Algorithm
Time Complexity -> O(n)
Space Complexity-> O(1)
*/

function majority(arr, n) {
  let maj;
  let count = 0;
  for (let cnt = 0; cnt < n; cnt++) {
    if (count == 0) {
      count += 1;
      maj = arr[cnt];
    } else {
      if (maj === arr[cnt]) {
        cnt += 1;
      } else {
        count -= 1;
      }
    }
  }
  let majCount = 0;
  for (let cnt = 0; cnt < n; cnt++) {
    if (arr[cnt] === maj) {
      majCount += 1;
    }
  }
  if (majCount > n / 2) return maj;
  return null;
}
const array = [5,6,7,5,5,5,5,4]
const n = array.length;
console.log(majority(array,n))
