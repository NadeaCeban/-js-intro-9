/*
bmi = weigth / height ^ 2
*/

//Step1
//Get element
//imput,btn,result
const heightEl = document.getElementById('height');
const weigthEl = document.getElementById('weight');
const btnEl = document.querySelector('button');
const resultsEl = document.querySelector('#results');

//Step2
//attach an event


btnEl.addEventListener('click', (event) => {
    event.preventDefault();
    const heightValue = parseFloat(heightEl.value);
    const weightValue = parseFloat(weigthEl.value);
if(heightValue == '' || heightValue ===  undefined || isNaN(heightValue) || heightValue < 0){
    resultsEl.innerHTML = 'Please provide heigth value'
}else if(weightValue == '' || weightValue ===  undefined || isNaN(weightValue) || weightValue < 0){
resultsEl.innerHTML = ' Please provide weigth value'

}else{
    const bmi = weightValue / ((heightValue / 100) ** 2)
    resultsEl.innerHTML = bmi;

}
   
})
//Get values


//Do calculation

//Step3
//Show results => append to Dom