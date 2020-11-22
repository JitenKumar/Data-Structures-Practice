/**
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
 

Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5
 * 
 * 
 * 
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length;
    let max=arr[n-1];
    arr[n-1]=-1;
    for(let i=n-2;i>-1;i--){
        let temp=arr[i]
        arr[i]=max;
        if(temp>max){
            max=temp;
        }
    }
    
    return arr;
};
let array = [17,18,5,4,6,1];
console.log(replaceElements(array));

