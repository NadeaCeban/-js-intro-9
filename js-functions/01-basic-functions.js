function startTheClass() {
    console.log('Online students! Please send "here" in the chay!');
    console.log('RECAP!');
    console.log('Start with the new topic!');
}
startTheClass(); //invoke the function - execute or run the function
startTheClass(); 
startTheClass(); 


function generateRandomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}


console.log(generateRandomNumber(3,5));
console.log(generateRandomNumber(50,100));

let randomNumber = generateRandomNumber(-5, 5);
console.log(randomNumber);
console.log(randomNumber > 0);


function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    
    
    return random = Math.floor(Math.random() * (max - min + 1)) + min;
    
}


console.log(generateRandomNumber(5, 3));
console.log(generateRandomNumber(1, 3));