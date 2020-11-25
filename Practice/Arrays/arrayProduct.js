/**
 * Given and array of
 * Return and output array
 * Output array consist the product of the values of array excluding the current value;
 *
 */
var arrayProduct = function (a, n) {
  let op = [];
  op[0] = 1;
  for (let i = 1; i < n; i++) {
    op[i] = a[i - 1] * op[i - 1];
  }
  let r = 1;
  for (let i = n - 1; i >= 0; i--) {
    op[i] *= r;
    r *= a[i];
  }
  return op;
};
const arr = [1, 2, 3, 4, 5, 6];
const n = arr.length;
console.log(arrayProduct(arr, n));
