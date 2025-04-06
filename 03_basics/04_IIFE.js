                     // Immediately Invoked  Function Expresion (IIFE)
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED ONE ${name}`);
}) ('ASHWANI')