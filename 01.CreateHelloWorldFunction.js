var createHelloWorld = function() {
    
    return function(x) {
        return 'Hello World';
        
    }
};




 const f = createHelloWorld();
 f();