/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr =[];
    arr.forEach((n, i)=>{
        if(fn(n, i)){
            newArr.push(n);
        };
    

    })
    return newArr;

};