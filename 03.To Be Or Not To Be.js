var expect = function(val) {
    let obj = {
        toBe : function toBe(val1){
            if(val===val1){
                return true;
            }else{
                throw new Error('Not Equal');
            }
        },
        notToBe: function notToBe(val2){
            if(val !== val2){
                return true;
            }else{
                throw new Error('Equal');
            }
        }
    }
    return obj;
};
