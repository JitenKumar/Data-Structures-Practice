/*
Given an unsorted array of some size sort it in such a way that 
a[0]<=a[1]>=a[2]<=a[3]>=a[4] and so on

*/

var wigglesort1 = function (arr) {
  /*
    1.First sort the array and then replace the adjacent elements 
    2. Time Complexity -> O(nlogn) by the sorting function
    */
  arr.sort(function (a, b) {
    return a - b;
  });
  //console.log(a);
  for (let i = 1; i < a.length; i += 2) {
    if (i < a.length - 1) {
      [a[i], a[i + 1]] = [a[i + 1], a[i]];
    }
  }
  return a;
};

var wigglesort2 = function (arr) {
  /*
      1.Lop the even element and check if even -1 > even swap . Check if even < even+1 then swap
      2. Time comlexity-> O(N), SPACE COMPLEXITY-> O(1);
      */
  for (let i = 1; i < a.length; i += 2) {
    if (a[i - 1] > a[i]) {
      [a[i], a[i - 1]] = [a[i - 1], a[i]];
    }
    if (i < a.length - 1 && a[i] < a[i + 1]) {
      [a[i], a[i + 1]] = [a[i + 1], a[i]];
    }
    return a;
  }
};
const a = [3, 5, 2, 1, 6, 4];
console.log(wigglesort1(a));
console.log(wigglesort2(a));
