/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


var map = function(arr, fn) {
    let numbers=[];
    arr.forEach((num ,i)=>{
   numbers.push(fn(arr[i],i));
    
    });
    return numbers;
   
};