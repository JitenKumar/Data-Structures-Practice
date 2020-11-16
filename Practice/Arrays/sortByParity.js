/*
Array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

*/
/**
 * Approach 
 * 1. i=0;j=n-1, loop till i<j
 *  if element at i odd swap with i ,j and j--
 * else i--;
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    i=0;j=A.length-1;
    while (i<j){
        if(A[i]%2!=0){
            [A[j],A[i]]=[A[i],A[j]];
            j--;
        }else{
            i++;
        }
    }
    return A;
};
const a1 = [3,1,2,4];
console.log(sortArrayByParity(a1));