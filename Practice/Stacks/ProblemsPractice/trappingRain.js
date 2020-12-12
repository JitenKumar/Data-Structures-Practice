/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length,
    result = 0,
    stack = [];
  if (n <= 0) return 0;
  for (let current = 0; current < n; current++) {
    while (
      stack.length !== 0 &&
      height[current] > height[stack[stack.length - 1]]
    ) {
      let p = stack.pop();
      if (stack.length === 0) break;
      let distance = current - stack[stack.length - 1] - 1;
      let bh =
        Math.min(height[current], height[stack[stack.length - 1]]) - height[p];
      result += distance * bh;
    }
    stack.push(current);
  }
  return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length,
    left = 0,
    right = n - 1,
    left_max = 0,
    right_max = 0,
    result = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) left_max = height[left];
      else {
        result += left_max - height[left];
      }
      left += 1;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        result += right_max - height[right];
      }
      right -= 1;
    }
  }
  return result;
};
