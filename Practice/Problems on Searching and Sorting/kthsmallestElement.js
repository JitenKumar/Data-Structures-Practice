var kthSmallest = function (arr, k, low, high) {
  while (low < high) {
    let q = partition(arr, low, high);
    if (k - 1 === q) {
      //console.log("Element found is " + arr[q]);
      return arr[q];
    } else if (k - 1 < q) {
      high = q - 1;
    } else {
      low = q + 1;
    }
  }
};

function getRandomIndex(min, max) {
  let min1 = Math.ceil(min);
  let max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
}

var partition = function (a, low, high) {
  let pivot_Index = getRandomIndex(low, high+1);
  //console.log("pivot_Index", pivot_Index);
  [a[pivot_Index], a[low]] = [a[low], a[pivot_Index]];
  let pivot = a[low];
  let i = low;
  //console.log("Pivot Element is ", pivot);
  for (let j = low + 1; j < high + 1; j++) {
    if (a[j] <= pivot) {
      i++;
      [a[j], a[i]] = [a[i], a[j]];
    }
  }
  [a[i], a[low]] = [a[low], a[i]];
  return i;
};
const arr = [13, 12, 11, 14, 15, 17, 18, 20, 19, 16];
const k = 1;
console.log(kthSmallest(arr, k, 0, arr.length - 1));
