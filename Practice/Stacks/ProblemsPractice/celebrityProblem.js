/**
 * Given a matrix of know
 * a person is called as celebrity if all person knows him
 * he doesnt know any of the person
 */
const knows = function (a, b, arr) {
  return arr[a][b];
};
const celebrity = function (arr) {
  // loop through each row and check if we can find the potential celebrity
  // a celebrity doesnt not have any outgoing link
  let celeb = 0,
    n = arr.length;
  for (let i = 0; i < n; i++) {
    //know(celeb,i)-> there exists path that i knows the celeb than set it as celeb
    if (knows(celeb, i, arr) === 1) {
      celeb = i;
    }
  }
  // potential celeb might be set but we need to confirm that everyone else know him
  for (let i = 0; i < n; i++) {
    if (
      i != celeb &&
      (knows(celeb, i, arr) === 1 || knows(i, celeb, arr) != 1)
    ) {
      return -1;
    }
  }
  return celeb;
  return 0;
};

const arr = [
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 0],
];
console.log(celebrity(arr));
