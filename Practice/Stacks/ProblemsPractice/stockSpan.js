/**
 * The span of the stock's price today is defined as 
 * the maximum number of consecutive days 
 * (starting from today and going backwards) for 
 * which the price of the stock was less than or equal to today's price.

For example, if the price of a 
stock over the next 7 days were 
[100, 80, 60, 70, 60, 75, 85], then 
the stock spans would be [1, 1, 1, 2, 1, 4, 6].
 * 
 * 
 * 
*/
const isEmpty = function (arr) {
  return arr.length === 0;
};
const stockSpan = function (arr, n) {
  let ans = [];
  let st = [];
  if (n < 0) return [];
  st.push(0);
  ans[0] = 1;
  for (let i = 1; i < n; i++) {
    let next = arr[i];
    while (!isEmpty(st) && arr[st[st.length - 1]] <= next) {
      st.pop();
    }
    ans[i] = isEmpty(st) ? i + 1 : i - st[st.length - 1];
    st.push(i);
  }
  return ans;
};
const arr = [100, 80, 60, 70, 60, 75, 85];
console.log(stockSpan(arr, arr.length));
