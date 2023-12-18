/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let arr=[];
    arr.push(...args);
    arrLength = arr.length;
    return arrLength;
    
};