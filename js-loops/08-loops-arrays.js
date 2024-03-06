const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// Count how many positive numbers you have in the array -> 4
console.log('\n------------Count Positive---------\n');

let countP = 0
for(const num of numbers){
    if(num > 0) countP++
}
console.log('Positive = ' + countP);

 
countP = 0
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0) countP++;
}
console.log('Positive = ' + countP);


// Count how many negative or neutral numbers you have in the array -> 6
console.log('\n------------Count Negativ or Neutral---------\n');

let countN = 0
for(const num of numbers){
    if(num <= 0) countN++
}
console.log('Negative or Neutral = ' + countN);

// Count how many even numbers you have in the array -> 7
console.log('\n------------Even---------\n');

let countE = 0
for(const num of numbers){
    if(num % 2 === 0) countE++ // or count += 1
}
console.log('Even = ' + countE);

// Count how many even but not negative numbers you have in the array -> 5
console.log('\n------------Even but not Negative---------\n');


let countE1 = 0
for(const num of numbers){
    if(num % 2 === 0 && num >= 0) countE1++ // or count += 1
}
console.log('Even but not negatives = ' + countE1);



