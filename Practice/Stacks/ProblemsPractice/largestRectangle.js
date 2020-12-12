/**
 * @param {number[]} heights
 * @return {number}
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var isEmpty = function(arr){
    return arr.length===0;
}
var largestRectangleArea = function(heights) {
    let stack=[],maxArea=0,cArea=0,index=0;
    while (index< heights.length){
        if(isEmpty(stack) || heights[index]>=heights[stack[stack.length-1]]){
            stack.push(index);
            index+=1;
        }else{
            let top = stack.pop();
            cArea=(heights[top])*(isEmpty(stack)?index:index-1-stack[stack.length-1]);
            maxArea=Math.max(cArea,maxArea);
        }
    }
    while(stack.length>0){
        let top = stack.pop();
            cArea=(heights[top])*(isEmpty(stack)?index:index-1-stack[stack.length-1]);
            maxArea=Math.max(cArea,maxArea);
    }
    return maxArea;
};
const arr = [2,1,5,6,2,3];
console.log(largestRectangleArea(arr));