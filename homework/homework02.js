       /////////Task 1///////////
   

let str1 = "5", str2 = "2";
let sum = Number(str1) + Number(str2);
let product = Number(str1) * Number(str2);
let division = Number(str1) / Number(str2);
let subtraction = Number(str1) - Number(str2);
let remainder = Number(str1) % Number(str2);
let exponentiation = Number(str1) ** Number(str2);



console.log(`The sum of ${str1} and ${str2} is = ${sum}`);
console.log(`The product of ${str1} and ${str2} is = ${product}`);
console.log(`The division of ${str1} and ${str2} is = ${division}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${subtraction}`);
console.log(`The remainder of ${str1} and ${str2} is = ${remainder}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${exponentiation}`);

        ///////////Task2//////////


let s1 = '200', s2 = "-50";
let = (Number(s1),Number(s2));
let greatest = Math.max(s1,s2);
let smallest = Math.min(s1,s2);
let absolute = Math.abs(s1 - s2);
s2 = Math.abs(s2);
let average = (s1 - s2) / 2;


console.log (`The greatest value is = ${greatest}`);
console.log(`The smallest value is = ${smallest}`);
console.log(`The average is = ${average}`);
console.log(`The absolute difference is = ${absolute}`);


           //////////Task3//////////


let r1 = Math.ceil(Math.random() * 51);
let r2 = Math.ceil(Math.random() * 51);
let diff = r1 - r2;
console.log(r1,r2);
console.log(`The absolute difference between numbers is = ${diff}`);



            ///////Task4/////////


let r1 = Math.floor(Math.random() * 51);
let r2 = Math.floor(Math.random() * 51);
let r3= Math.floor(Math.random() * 51);
let r4 = Math.floor(Math.random() * 51);
let r5 = Math.floor(Math.random() * 51);

console.log(r1, r2, r3, r4, r5);

let max = Math.max(r1, r2, r3, r4, r5);
let min = Math.min(r1, r2, r3, r4, r5);
console.log('The max value = '+ max);
console.log('The min value = '+ min);


               //////////Task 5/////////
 
let rand1 = Math.floor(Math.random() * 101);
let rand2 = Math.floor(Math.random() * 101);
let rand3 = Math.floor(Math.random() * 101); 
console.log(rand1, rand2, rand3);
let sum = (rand1 + rand2 + rand3);

console.log(`The number 1 = ` +rand1);
console.log(`The number 2 = ` +rand2);
console.log(`The number 3 = ` +rand3);
console.log(`The sum of numbers is = `+sum);


               ///////Task6////////


let r1 = Math.floor(Math.random() * 101);
let r2 = Math.floor(Math.random() * 101);
let r3 = Math.floor(Math.random() * 101);

console.log(r1, r2, r3);
console.log(r1 > 25);   //true 60 > 25
console.log(r2 > 25);   //true 85 > 25
console.log(r3 > 25);   //false 4 <= 25 


  


                /////////Task7//////

let name = "David";
let firstChar = name[0];
let lastChar = name[4];

console.log(name.length);
console.log(firstChar);
console.log(lastChar);
console.log(name.slice (0, 3));
console.log(name.slice(2));

console.log(`The length of the name is = `+ name.length);
console.log(`The first character in the name is = `+ firstChar);
console.log(`The last character in the name is = `+ lastChar);
console.log(`The first 3 characters in the name are = `+ name.slice(0,3));
console.log(`The last 3 characters in the name are = `+ name.slice(2));