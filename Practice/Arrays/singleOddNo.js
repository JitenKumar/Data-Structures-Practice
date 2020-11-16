/*
Given an array of size n find the no that is occurring odd no of times . Provided only one no occurs odd no of times.
*/
function singleNo(arr,n){
    let ans=0;
    for(let index=0;index<n; index++){
        ans^=arr[index];
    }
    return ans;
}
const array = [1,2,3,2,3,1,3]
const n = array.length;
console.log(singleNo(array,n));