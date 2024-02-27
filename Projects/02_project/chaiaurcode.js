// const button = document.querySelector('#calculate')

// button.addEventListener('click', (e)=>{
//      e.preventDefault();
//      console.log(e.target.id);
//      const height = parseInt(document.querySelector( '#height' ).value);
//      const weight = parseInt(document.querySelector('#weight').value);
//      const result = height/weight;
//      console.log(result);

//      const output = document.querySelector('#results')
//      // const value = document.textContent(result)
//      output.append(result)

// })



//ANOTHER METHOD
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
     e.preventDefault();
     
     const height = parseInt(document.querySelector('#height').value);
     const weight = parseInt(document.querySelector('#weight').value);

     const result = document.querySelector('#results');
     if(height === '' || height<0 || isNaN(height) ){
          result.innerHTML = "Please give a valid height";
     }else if(weight === '' || weight<0 || isNaN(weight) ){
          result.innerHTML = "Please give a valid weight";
     }else {
          const bmi = (weight / ((height * height)/10000)).toFixed(2)
          result.innerHTML = `<span>${bmi}</span>`
     }



})