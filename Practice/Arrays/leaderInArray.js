/**
 * Given an array of size n an element is said to to be '
 * A leader element is if  the all the elements to the right are less than the current element
 * Print the leaders in array
 */
var leaderInArray = function (arr) {
  let currentMax = Number.MIN_VALUE;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > currentMax) {
      console.log(arr[i]);
      currentMax = arr[i];
    }
  }
};
const array = [8, 4, 2, 3, 1];
leaderInArray(array);
