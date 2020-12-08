/**
 * Given an array of integers print the next greater element for each element of the array
 input : [15,12,16,2,1,0,7,8]
 output:[16,16,null,7,7,7,null]
 */
const isEmpty = function (arr) {
  return arr.length === 0;
};
const nextGreater = function (arr) {
  let st = [];
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let next = arr[i];
    if (!isEmpty(st)) {
      let element = st.pop();
      while (element < next) {
        console.log(next);
        if (isEmpty(st)) break;
        element = st.pop();
      }
      if (element > next) {
        st.push(element);
      }
    }
    st.push(next);
  }
  while (!isEmpty(st)) {
    console.log(null);
    st.pop();
  }
};
const arr = [15, 12, 16, 2, 1, 0, 7, 8];
console.log(nextGreater(arr));
