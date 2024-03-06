const {generateRandomNumber} = require('../utils/MathHelper.js');

let i = 1, j = 1;
while(i <= 3){
    console.log(`This is while loop block`);
    i++;
}


do{
    console.log(`This is do-while loop block`);
j++;
    } while(j <= 3);


    //PHONE PIN
const setPassword = 1234;
let generateCode;
let attempt = 0;
do{
// enter passcode
generateCode = generateRandomNumber(1000, 9999);
attempt++;
}while(setPassword !== generateCode);
 console.log(`We found the pin after ` + attempt+ `times!`);


 const gameNumber = 4;
 let guessNumber ;
 let counter = 0;

 do{
    guessNumber = generateRandomNumber(1, 10);
    counter++
 }while(guessNumber !== gameNumber);

 let timeOrTimes = counter === 1 ? 'time' : 'times';

 console.log(`The number is found after ${counter} ${timeOrTimes}!`);

 
 // Generate an even number bt 1 and 10 
// Calculate how many attempts it takes to generate it

 
//for loop
 let att2 = 0
 let rNum2 ;
for(; ;){
    rNum2 = generateRandomNumber(1, 10);
    att2++;
    if(rNum2 % 2 === 0) break;
 }
console.log(`We found a even number after ${att2} time/s wich is ${rNum2}`);


//do-while
let att = 0; 
let rNum; // undefined

do{
    rNum = generateRandomNumber(1, 10);
    att++;
}while(rNum % 2 !== 0);

console.log(`We found a even number after ${att} time/s wich is ${rNum}`);


//while

let att1 = 0;
let rNum1; // undefined 

while(true) {
    rNum1 = generateRandomNumber(1, 10);
    att1++;

    if(rNum1 % 2 === 0) break;
}

console.log(`We found an even number after ${att1} time/s which is ${rNum1}`); 