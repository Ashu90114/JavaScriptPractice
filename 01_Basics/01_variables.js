console.log("hii")

const accountId = 1234;
let accountEmail = "heyashukumar@gmail.com"
var accoundPassword = "123456"

accountCity = "jaipur"

//accountId = 2 //not allowed

accountEmail = "ashu90114@gmail.com"
accoundPassword = "232323232"
accountCity = "Delhi"

console.log(accountId);
console.table([accountEmail, accoundPassword, accountCity]);




// JavaScript is a dynamically typed language, 
// which means that data types of variables are determined by the value they hold at runtime and 
// can change throughout the program as we assign different values to them.

// JavaScript has two keywords for declaring variables: var and let. Both keywords allow you to create a named storage location for a value, but they differ in the scope of the variable they create.
// Here is a table summarizing the key differences between var and let:
// Feature
// var
// let

// Scope

// Function-scoped or global-scoped
// Block-scoped

// Redeclaration

// Allowed
// Not allowed

// Hoisting

// Yes
// No


// Scope
// The scope of a variable determines where in your code you can access it. A function-scoped variable is only accessible within the function where it is declared. A global-scoped variable is accessible anywhere in your code.
// A block-scoped variable is only accessible within the block where it is declared. A block is a section of code enclosed in curly braces ({}).

// Redeclaration
// Redeclaration means declaring a variable with the same name as an existing variable. Redeclaration is allowed with var, but not with let.

// Hoisting
// Hoisting is a JavaScript feature that moves all variable declarations to the top of their scope. This means that you can access a variable before it is declared in your code.
// Hoisting occurs with var variables, but not with let variables.




// function varScoping() {
//      var x = 1;
   
//      if (true) {
//        var x = 2;
//        console.log(x); // will print 2
//      }
   
//      console.log(x); // will print 2
//    }
   
//    function letScoping() {
//      let x = 1;
   
//      if (true) {
//        let x = 2;
//        console.log(x); // will print 2
//      }
   
//      console.log(x); // will print 1
//    }
   
















