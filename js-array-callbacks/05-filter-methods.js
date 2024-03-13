const numbers = [10, 5, 100, 77, 50, 65, 0];

// Find all the numbers that are 50 or more -> [100, 70 ,50, 65]
//1.
const number50OrMore = numbers.filter(number => number >= 50);
console.log(number50OrMore);


// Find all the numbers that are 50 or more -> [100, 77, 50, 65]
console.log(numbers.filter((number) => number >= 50)); // [ 100, 77, 50, 65 ]
console.log(numbers.filter((number) => number >= 50).length); // 4


//2.for of loop solution
const result = [];

for(const number of numbers){
    if(number >= 50) result.push(number);
}
console.log(result.length);


/* Create a method which takes an array as argument and
 returns all the even numbers from the original
 evens [1, 5, 2, 0 ,6, 7] -> [2, 0, 6]
 */

 function evens(arr){
   return arr.filter(num => num % 2 === 0);
 }
 cansol.logl(evens([1, 5, 2, 0 ,6, 7]));

 
 
 const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
 // Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
 // Count how many elements has a      -> 4
 // Count how many elements has i      -> 2

console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple')))

console.log(fruits.filter(x => x.toLowerCase().indexOf('a') >= 0).length);
console.log(fruits.filter(x => x.toLowerCase().indexOf('i') >= 0).length);
