/**
 * 
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?



 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row_flag = false,
    col_flag = false;
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && matrix[i][j] === 0) row_flag = true;
      if (j === 0 && matrix[i][j] === 0) col_flag = true;
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (row_flag) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
  if (col_flag) {
    for (let j = 0; j < m; j++) {
      matrix[j][0] = 0;
    }
  }
  return matrix;
};
