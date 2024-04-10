/* 
* Event
* - Simply an Object

*/

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const btnEl = document.querySelector('#btn');
const btn2El = document.querySelector('#btn2');

/* 
* Mouse Events

*/
 //Click
 
  btnEl.addEventListener('click',(event) =>{
    event.preventDefault();
    //do stuff
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
  })

  
  
  // Doble Click
 btn2El.addEventListener('dbclick',(event) =>{
    event.preventDefault();
    //do stuff
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
  })

  //Try: mousemove, mouseup,mousedown

/*
*Keyword Events
* - keydown.keyup
*/
const bodyEl = document.querySelector('body');
bodyEl.addEventListener('keydown',(event) => {
    console.log(event)
    if(event.code = 'Enter'){
        console.log(event)
    }else{
        console.log('Wrpng keyboard')
    }
})



