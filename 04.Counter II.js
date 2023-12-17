var createCounter = function(init) {
    let count = init;
    let obj ={
        increment : function increment(){
           count++;
           return count;
        },
        decrement: function decrement(){
            count --;
;            return count;
        },
        reset : function reset(){
           count = init;
            return count;
        }
    }
    return obj;
    
};
 const counter = createCounter()