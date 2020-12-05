/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    nums.sort(function(a,b){return a-b});
    let out=[];
    let n=nums.length
    for(let i=0;i<n;i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left=i+1;
        let right=n-1;
        while(left<right){
            let currSum=nums[i]+nums[left]+nums[right];
            if (currSum===0){
                out.push([nums[i],nums[left],nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left+=1;
                right-=1;
            }
            else if (currSum<0){
                left+=1;
            }else{
                right-=1
            }
        }
    }
   
    return out;
    
};
const arr=  [-2,0,0,2,2];
console.log(threeSum(arr));