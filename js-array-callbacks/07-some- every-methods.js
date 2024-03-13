
const numbers = [-5, 0, 5, 10, 23, -10];
// find if some of these number are divisble by 5 -> true
// check if every element is positive -> false
// check if some elements are negative -> true
// Find the last element that has 4 letters -> K

console.log(numbers.some(num => num  % 5 === 0));
console.log(numbers.filter(num => num  % 5 === 0).length > 0);
console.log(numbers.every(num => num  > 0));
console.log(numbers.filter(num => num  > 0).length === numbers.length);
console.log(numbers.some(num => num < 0));
console.log(numbers.filter(num => num < 0).length > 0);



console.log(cities.find(el => el.length === 7)); // undefined
console.log(cities.findLast(el => el.length === 7)); // undefined
console.log(cities.findIndex(el => el.length === 7)); // -1
console.log(cities.findLastIndex(el => el.length === 7)); // -1