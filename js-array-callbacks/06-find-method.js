const numbers = [0, 10, -4, 5, 2, -3];
// find first pozitive

console.log(numbers.find(number => number > 0));// 10
console.log(numbers.findIndex(number => number > 0)); //1

//Find first pozitive
console.log(numbers.find(number => number > 50)); //undefind
console.log(numbers.findIndex(number => number > 50)); // -1

//Find first number more then 50
console.log(numbers.findLast(number => number > 50)); //2 
console.log(numbers.findLastIndex(number => number > 50))// 4




let company = 'TechGlobal School';
console.log(company.split('').filter(el => el.includes('o')));

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last ellement that has 4 letters -> Kyiv

console.log(cities.find(city => city.length === 4));
console.log(cities.findLast(city => city.length === 6));
console.log(cities.indexOf('LA'));
console.log(cities.find(city => city.toLowerCase().includes('i')));
console.log(cities.find(city => city.toLowerCase().indexOf('i') >= 0));
console.log(cities.findLast(city => city.length === 4));
