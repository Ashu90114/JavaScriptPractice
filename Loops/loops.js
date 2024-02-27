//for of

//["", "", ""]
//[{}, {}, {}]

// const arr = [1,2,3,4,5]
// for (const i of arr) {
//      console.log(i); 
// }

// const greeting = "Hello World!"
// for (const greet of greeting) {
//      console.log(`each char is ${greet}`);
// }


//Maps

const map = new Map()

map.set('IN', 'INDIA')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {
     //console.log(key, ':-', value);
}

const myObject = {
     'game1': 'NFS',
     'game2': 'Spiderman',
     'game3': 'GTA',
     'game4': 'Fortnite'
}

//OBJECTS ARE NOT ITERABLE
// for (const [key, value] of myObject){
//      console.log(key, ':-', value);
// } 

//BUT WE CAN DO IT THIS WAY
// Object.entries(myObject).forEach(([key,value]) =>{
//   console.log(`${key}:-${value}`);
// })

for (const key in myObject) {
     // console.log(myObject[key]);
     // console.log(`${key} = ${myObject[key]}`);
}


//FOR EACH
const coding = ['js', 'ruby', 'python', 'java', 'cpp'];

// coding.forEach( function (item){
//      console.log(item);
// })

// coding.forEach( (item) => {
//      console.log(item);
// })

// function printMe(item){
//      console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//      console.log(item, index, arr);
// })


const myCoding =[
     {
          langName: "java",
          langFileName: "java"
     },
     {
          langName: "javascript",
          langFileName: "js"
     },
     {
          langName: "python",
          langFileName: "py"
     }
]

myCoding.forEach( (key) => {
     // console.log(key.langFileName , key.langName);

})

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNum.filter( (num) =>{
     return num > 4
})
// console.log(newNums);


//MAP
 const myNumbers = [1,2,3,4,5]
//  const latestNums = myNumbers.map( (nums) => {
//      return nums+10;
//  })

const latestNums = myNumbers.map( (nums) => nums*10).map( (nums) => nums +1 )
// console.log(latestNums);


// ===========================================
//REDUCE
// const myTotal = myNumbers.reduce( function (accumulator, currentValue) {
//     return accumulator + currentValue
// }, 0)
const myTotal = myNumbers.reduce( (acc, curr) => acc+curr,0)

// console.log("The total is ", myTotal);


const shoppingCart = [
     {
          itemName: "js course",
          price: 199
     },
     {
          itemName: "data science course",
          price: 799
     },
     {
          itemName: "web development course",
          price: 599
     },
     {
          itemName: "react development course",
          price: 299
     }
]


const totalPrice = shoppingCart.reduce( (acc, curr) =>{
     return acc+curr.price
}, 0)

console.log(totalPrice);




















































