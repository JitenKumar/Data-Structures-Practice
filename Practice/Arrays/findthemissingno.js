/*
Given the array of size n where each no is consecutive one no is missing find the missing no

*/

function findMissingNo(arr,n){
    let sumOfNo = (n * (n+1) /2); // draw back of max interger value -> will create overflow 
    let sumOfGivenArray = math.sum(arr);
    return sumOfNo - sumOfGivenArray;
}

function findMissingNo2(arr,n){
    let xor1=0;
    for (let i=1;i<n;i++){
        xor1^=i;
    }
    let xor2=0;
    for (let i=0;i<n-2;i++){
        xor2^=arr[i];
    }
    return xor1^xor2;
}

const arr = [1,2,3,4,5,6,7,8,9,11];
const n = 11;

console.log(findMissingNo2(arr,n));