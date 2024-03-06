
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19
const numbers = [3, 4, 7, 3, 2, 2, 7];


console.log('\n----------Sum of elements that has Even Indexes--------------\n');

sumEvenIndexes = 0;
for(let i = 0; i <= numbers.length; i++){
    if(i % 2 === 0)  sumEvenIndexes += numbers[i];
}
console.log(sumEvenIndexes);


// Find the multiplication of numbers that has odd index -> 4 * 3 * 2 -> 24

console.log('\n----------Product of elements that has Odd Indexes--------------\n');

productOddIndexes = 1;
 
for(let i = 1; i < numbers.length; i++){
    if(i % 2 !== 0)productOddIndexes *= numbers[i];
}
console.log(productOddIndexes);


/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];
const arr3 = []

for(let i = 0; i < arr1.length; i++){
   arr3.push(arr1[i] * arr2[i]);
}
console.log(arr1);
console.log(arr2);
console.log(arr3);


// Diferent size of array

const array1 = [ 5, 8 ];
const array2 = [ 9, 3, 5, 1, 0 ];
let array3 = []
let shortArray = array1.length < array2.length ? array1 : array2
let longArray = array1.length > array2.length ? array1 : array2

for(let i = 0;  i < shortArray.length; i++) {
array3.push(array1[i] * array2[i]);
}
console.log(array3.concat(longArray.slice(shortArray.length)));




// Put together all these elements from a1, a2 and a3 in an descending order -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]

const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0 ,9 , 4, 3];
const a123 = [...a1, ...a2, ...a3];
 a123.sort((a,b) => b - a);


console.log( a123);


// Please find the first even number from the array -> 0
//1
const nums = [-1, 1, 3, 0, 2, 2, 6, 8];
 for(i = 0; i < nums.length; i++){
if(nums[i] % 2 === 0) break;
 }
console.log(nums[i]);


//2
let firstEven;
for(const number of nums){
    if(number % 2 === 0) {
        firstEven = number;
        break;
}
}
console.log(firstEven);



// Please find the biggest odd number from the array -> 3

let biggestOdd;
for(const number of nums){
    if(number % 2 !== 0 && (biggestOdd === undefined || number > biggestOdd )){
     biggestOdd = number;
     
}
}
console.log(biggestOdd);