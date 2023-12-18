


/**
 * @param {Function[]} functions
 * @return {Function}
 */

//Method 01
var compose = function(functions) {

    return function(x) {
        result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
    };
    };


    //Method 02
    var compose = function (functions) {
        return function (x) {
          let result = x;
      
          functions.reverse().forEach(function (func) {
            result = func(result);
          });
      
          return result;
        };
      };
      