


console.log("I start pactice \"JavaScript\" today, and I like it.");
console.log("The secret of getting ahead is getting started.");
console.log(`"Don't limit yourself."`);
console.log("Invest in your dreams. Grind now. Shine later.");
console.log(`It's not the load that breaks you down, it's the way you carry\nit.`);
console.log("The hard days are what make you stronger.");
console.log(`You can waste your lives drawing lines. Or you can live your\nlife crossing them.`);





console.log(`\tJavaScript is a high-level programming language\nprimarily used to build web applications. It is not limited\nto the web; it can also be used for the backend\ndevelopment with technologies like Node.js.
\tIt is open source and has a huge community support,\nwhich means there are plenty of resources and support\navailable for learning. It uses a syntax like other\nprogramming languages and easy to learn.`)



let myAge = 32;
console.log(myAge);

let myFavoriteNumber = 100;
console.log(myFavoriteNumber);

let myHeight = 5.2;
console.log(myHeight);

let myWeight = 137;
console.log(myWeight);

let myFavoriteLetter = 'N';
console.log(myFavoriteLetter);





let num1 = 25;
let num2 = 35;
console.log('The sum of the numbers = '+ (num1 + num2));



 
let n1 = 5;
let n2 = 7;
console.log('The product of the numbers = '+ n1 * n2);




 

let number1 = 24;
let number2 = 10;
console.log(`The sum of the numbers is = ${number1 + number2}`);
console.log(`The product of the numbers is = ${number1 * number2}`);
console.log(`The subtraction of the numbers is = ${number1 - number2}`);
console.log(`The division of the numbers is = ${number1 / number2}`);
console.log(`The remainder of the numbers is = ${number1 % number2}`);





let i1 = 7;
let i2 = 11;
console.log('The average of the numbers is: '+(7+11) /2);





let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;
console.log(`The average of the numbers is: ${(a1 + a2 + a3 + a4 + a5) / 5}`);





 

let b1 = 5;
let b2 = 6;
let b3 = 10;
console.log("The 5 multiplied with 5 is = " +(b1 * b1));
console.log("The 6 multiplied with 6 is = " +(b2 * b2));
console.log("The 10 multiplied with 10 is = " +(b3 * b3));






let side = 7;
console.log(`The perimeter of the square = `+(4 * 7));
console.log(`The area of the square = `+(7 * 7));






let favBook = 'JS Algorithms & Data Structures',favColor = 'Blue',favNumber = 7;

console.log(`The favorite book is ${favBook}
The favorite color is ${favColor}
The favorite number is ${favNumber}`);





let firstName ='John'
    lastName ='Doe'
    age = 45
    emailAddress ='johndoe@gmail.com'
    phoneNumber ='(123) 123 1234'
    address = '123 St Chicago IL 12345';


console.log(`\tUser who joined this program is ${firstName} ${lastName}. ${firstName}'s age is ${age}.\n${firstName}’s email address is ${emailAddress},phone number is\n${phoneNumber},and address is ${address}.`);
       

/*Requirement:
Write a program that generates a random number 
between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below 
message
Expected result:
The random number * 5 = {result}*/

let randomNumber = Math.floor(Math.random() * 51);
console.log('The random number = '+ randomNumber);
console.log ('The random number * 5 = ' + randomNumber * 5);

         ///////////Task2////////

         /*Requirement:
Write a program that generates two random numbers 
between 1 and 10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers
Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}*/
 let random1 = Math.ceil(Math.random() * 10);
 let random2 = Math.ceil(Math.random() * 10);
 console.log('The random number1 = '+ random1);
 console.log('The random number2 = '+ random2);
 let max = Math.max(random1,random2);
 let min = Math.min(random1,random2);
 let diff = max - min;
 console.log('Max number = '+ max);
 console.log('Min number = '+ min);
 console.log('Difference = '+ diff);


 /* Write a program that generates a random number 
between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result}*/


let randomNumber1 = Math.floor(Math.random() * 101);
console.log('The random number  = '+randomNumber1);
console.log('The random number % 10 = ' +randomNumber1 % 10);

/*Requirement:
Write a program that generates 5 random numbers between 
1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the 
points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
Test data:
3 7 2 1 8
Expected result:
59*/

let ranNumber1 = Math.ceil(Math.random() + 10);
let ranNumber2 = Math.ceil(Math.random() + 10);
let ranNumber3 = Math.ceil(Math.random() + 10);
let ranNumber4 = Math.ceil(Math.random() + 10);
let ranNumber5 = Math.ceil(Math.random() + 10);
let result = ranNumber1 * 5 + ranNumber2 * 4 +ranNumber3 * 3 + ranNumber4 * 2 +ranNumber5 * 1;
console.log(result); 


/*
Requirement:
Write a program that generates 4 random numbers as 
below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
Find the absolute difference between the max and min 
number
Find the absolute difference between the second and 
third number
Find the average of all 4 numbers
Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average} */

let ranNum1 = Math.ceil(Math.random() * 25);
let ranNum2 = Math.ceil(Math.random() * 50) + 25;
let ranNum3 = Math.ceil(Math.random() * 75) + 50;
let ranNum4 = Math.ceil(Math.random() * 100) + 75;
console.log(ranNum1);
console.log(ranNum2);
console.log(ranNum3);
console.log(ranNum4);

console.log ('Difference of max and min = ' +(ranNum4 - ranNum1));
console.log('Difference of second and third = ' +(ranNum3 - ranNum2))
console.log((ranNum1 + ranNum2 +ranNum3 + ranNum4 ) /4);


