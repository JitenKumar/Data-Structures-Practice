/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  //console.log(intervals);
  let ans = [];
  intervals.forEach(function (item, index) {
    if (index === 0) {
      ans.push(item);
    } else {
      l = ans.length - 1;
      if (ans[l][1] >= item[0]) {
        ans[l] = [ans[l][0], Math.max(item[1], ans[l][1])];
      } else {
        ans.push(item);
      }
    }
    //console.log("After Loop",ans)
  });
  return ans;
};
