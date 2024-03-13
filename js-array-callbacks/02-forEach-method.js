const names = ['John', 'Jane', 'Alex', 'Max'];

// Print each name in the array
names.forEach(name => console.log(name));

// Output first letter of each name
//1.
names.forEach(name => console.log(name[0]));

//2.
for(const name of names){
    console.log(name[0]);
}

//3
for(i = 0; i < names.length; i++){
    console.log(names[i][0]);
}

//Output each name uppercased
names.forEach(name => console.log(name.toUpperCase()));


// Output names that start with J -> John and Jane
names.forEach( (name) => {
if(name.toUpperCase().startsWith('J'))console.log(name);

});

// Count haw many names has 4 letters -> 3
// This task is better to solve with reduce method and we'll learn
let count = 0;
names.forEach((name) => {
    if(name.length === 4) count++;
});
console.log(count);


const numbers = [5, 10, 3, 0 ,-2];

// Print each number
numbers.forEach(number => console.log(number));


// Print true for even numbers and false for odd numbers -> false, true, false, true, true 
//1.
numbers.forEach((number) => {
if(number % 2 === 0) console.log (true);
else console.log (false)

});

//2.
numbers.forEach(number => console.log(number % 2 === 0));



//Creat a new array that multiplies and store each of the numbers element by 3 - >[ 15, 30, 9, 0, -6 ]
//// We can solve this with map() method and we'll learn it
const newArray = []
numbers.forEach(number => newArray.push(number * 3));
    console.log(newArray);

 
    // Create a new array that stores even numbers -> [ 10, 0, -2 ]
// We can solve this with filter() method and we'll learn it 
const evens = []
numbers.forEach((number) => {
if(number % 2 === 0) evens.push(number);
});
    console.log(evens);


    
       