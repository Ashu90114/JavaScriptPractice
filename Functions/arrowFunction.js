const user = {
     username: "hitesh",
     price: 999,

     welcomeMessage : function(){
          console.log(`${this.username} welcome to website`);
          // console.log(this);
     }
}

//this.  referse to current context

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// =============================================
//this   only works in object  method or call back functions
//this   dont works in simple function

// function chai (){
//      let username = "hitesh"
//      console.log(this.username);  //this will not work
// }
// chai()

// const chai = function(){
//      let username = "hitesh"
//      console.log(this.username);  //this will not work
// }
// chai()

// const chai = () => {
//      let username = "hitesh"
//      console.log(this.username);  //this will not work
// }
// chai()
// ====================================================================

// ARROW Function

//EXPLICITE RETURN
// const addTwo = (num1, num2) => {
//      return  num1+num2
// }     //If we writing in {} braces then we have to write  return keyword otherwise it will consider as undefined;

//IMPLICITE RETURN
// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2) //If we are writing in () brackets then we dont have to write return keyword


// const addTwo = (num1, num2) => {username: "hitesh"} //Cannot return object 
// const addTwo = (num1, num2) => ({username: "hitesh"}) //Now we can return object 

// console.log(addTwo(2,4));















