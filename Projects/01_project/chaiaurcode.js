// const greyBtn = document.querySelector('#grey');
// const yellowBtn = document.querySelector('#yellow');
// const whiteBtn = document.querySelector('#white');
// const blueBtn = document.querySelector('#blue');

// const bgBody = document.querySelector('body');

// function changeColor(id) {
//      console.log(id);
//   switch (id) {
//      case 'grey':
//           console.log("greyclicked");
//           bgBody.style.backgroundColor = 'grey';
//           break;
//      case 'white':
//           console.log("whiteClicked");
//           bgBody.style.backgroundColor = 'white';
//           break;
//      case 'blue':
//           console.log("blueClicked");
//           bgBody.style.backgroundColor = 'blue';
//           break;
//      case 'yellow':
//           console.log("yellowClicked");
//           bgBody.style.backgroundColor = 'yellow';
//           break;
//   }
// }


//Another Code
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
     console.log(e.target.id);
     switch (e.target.id) {
          case 'grey':
               body.style.backgroundColor = e.target.id;
               break;
          case 'white':
               body.style.backgroundColor = e.target.id;
               break;
          case 'blue':
               body.style.backgroundColor = e.target.id;
               break;
          case 'yellow':
               body.style.backgroundColor = e.target.id;
               break;
       }
   })


}) 
