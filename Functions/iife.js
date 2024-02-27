//(IIFE) Immediately Invoked Function Expressions


(function chai(){
     //named IIFE
     console.log(`DB CONNECTED`);
})();


( (name) => {
     //Unnamed IIFE
     console.log(`DB CONNECTED TWO ${name}`);
}) ('Hitesh') ;//self executing function 