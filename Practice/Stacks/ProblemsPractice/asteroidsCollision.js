/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let curr = 0; curr < asteroids.length; curr++) {
    let p = true;
    if (asteroids[curr] < 0 && stack[stack.length - 1] > 0) {
      while (stack.length !== 0 && stack[stack.length - 1] > 0) {
        if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroids[curr])) {
          stack.pop();
        } else if (
          Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[curr])
        ) {
          stack.pop();
          p = false;
        } else {
          p = false;
        }
        if (!p) break;
      }
    }
    if (p) stack.push(asteroids[curr]);
  }
  return stack;
};

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let i = -1;
  for (j = 0; j < asteroids.length; j++) {
    let e = true;
    while (i >= 0 && asteroids[i] >= 0 && asteroids[j] < 0) {
      if (Math.abs(asteroids[i]) < Math.abs(asteroids[j])) {
        i -= 1;
        continue;
      } else if (Math.abs(asteroids[i]) === Math.abs(asteroids[j])) {
        i -= 1;
        p = false;
      } else {
        p = false;
      }
      if (!p) break;
    }
    if (e) {
      asteroids[i + 1] = asteroids[j];
      i += 1;
    }
  }
  return asteroids.slice(0, i + 1);
};
