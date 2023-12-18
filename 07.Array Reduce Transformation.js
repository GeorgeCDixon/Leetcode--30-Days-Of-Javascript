/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accum = init;
    let numResult;
    if(nums.length ==0){
        return numResult = accum;
    }else{
        nums.forEach((ele, i)=>{
        accum = fn(accum, ele);
        numResult = accum;
        
    })

    }
    
    return numResult;
};