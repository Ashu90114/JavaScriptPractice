//singleton
// Object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
     name: "Hitesh",
     "full name": "Ashu Kumar",
     [mySym]: "myKey1",
     age: 18,
     location: "Jaipur",
     email: "hitesh@gmail.com",
     isLoggedIn: false,
     lastLocation: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
     console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
     console.log(`Hello Js User ${this.name}`);
}

// console.log(JsUser.greeting); //function reference
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// const tinderUser = new Object() //this is singletone object 
const tinderUser = {} //this is non singletone object

tinderUser.id = "12asfda"
tinderUser.name = "ashu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
     email: "some@gmail.com",
     fullname: {
          userfullname: {
               firstname: "ashu",
               lastname: "kumar"
          }
     }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}  //spred operator
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   //returns an array of the keys in the object
// console.log(Object.values(tinderUser));    // returns an array of values from the given object




//Destructuring Assignment with Default Values
const course ={
     courseName: "Js in hindi",
     price: "999",
     courseInstructor: "hitesh"
}

// const { courseInstructor} = course
// console.log(courseInstructor);

// const { courseInstructor: instructor} = course
// console.log(instructor);

// const {price : pricing , courseName : cName} = course;
// console.log(`The name of the course is ${cName}`);
// console.log(`The cost of this course is ${pricing}`);


const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
     console.log("Object is empty");
}


// false == 0
// true

// false == ''
// true

// 0 == ''
// true




//Nullish Coalescing  Operator (??): NULL UNDEFINED
let x ;
// x = 5 ?? 10;  //OUTPUT  = 5
// x= null ?? 10  //OUTPUT = 10
// x = undefined ?? 10;  //OUTPUT = 10
// x = null ?? 10 ?? 20 

console.log(x);

//Terniary Operator
// condition ? value if true : value if false
let age = 18;
age>= 18 ? console.log('Adult'): console.log('Minor');   // OUTPUT Adult






























































