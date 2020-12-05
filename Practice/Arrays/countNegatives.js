/**
 * Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.
Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let row = grid.length,
    cols = grid[0].length;
  let i = row - 1,
    j = 0;
  let count = 0;
  while (i >= 0 && j <= cols) {
    if (grid[i][j] < 0) {
      count += cols - j;
      i -= 1;
    } else j += 1;
  }
  return count;
};
