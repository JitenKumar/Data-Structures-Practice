/*
Given an array of size n Right Rotate it by K times
A: [1,2,3,4,5,6,7,8], k=3
Out:[6,7,8,1,2,3,4,5]
Algo: First Reverse the Last K Elements 
2, Reverse the n-k-1 Elements
2. Reverse the entire array
*/
function rightRotate(arr,n,k){
    reverse(arr,n-k,n-1);
    reverse(arr,0,n-k-1);
    reverse(arr,0,n-1);
}

function reverse(arr,l,h){
    let i=l;
    let j=h;
    while (i<j){
        let temp=arr[i];arr[i]=arr[j];arr[j]=temp;
        i+=1;
        j-=1;
    }
}
const array = [1,2,3,4,5,6,7,8]
const n = array.length;
const k=2;
rightRotate(array,n,k);
console.log(array);
