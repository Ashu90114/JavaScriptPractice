function loginUserMessage(username = "sam"){
     if(!username){
          console.log("Please entere a username");
          return
     }

     return `Welcome back ${username}!`;
}

// console.log(loginUserMessage()); // Welcome back sam!
// console.log(loginUserMessage("John")); // Welcome back John!

function calculateCartPrice(val1, val2, ...num1){

     return num1
}

// console.log(calculateCartPrice(200, 300, 400, 532, 765));

const user = {
     username: "ashu",
     price: 1099
}

function handleObject (anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
     username: "sam",
     price: 566
})


// console.log(addOne(5))     //Work fine Hoisting
// function addOne(num){
//      return num+1
// }

// addTwo(5)                   //Error as function not hoisted
// const addTwo = function (num){
//      return num + 2;
// }
// console.log(addTwo(5))       //Works after Function Expression





























