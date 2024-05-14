/*
Write a function named makeNegative() that takes a number and returns its 
negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no 
mathematical sense. So, zero will stay as zero.

makeNegative(10)       -> -10
makeNegative( -7)      -> -7
makeNegative( 0)        -> 0
makeNegative(0.45)    -> -0.45*/
console.log(`/n------------Task1---------------n/`);

const makeNegative = num => {
if(num === 0) return 0;
else if(num > 0) return -num;
else return num;
};
console.log(makeNegative(10) );
console.log(makeNegative( -7));
console.log(makeNegative( 0));
console.log(makeNegative(0.45));


/*Write a function isSumEvenOrOdd() which takes three numbers as 
arguments and determines if the sum of these numbers is odd or even.

isSumEvenOrOdd(0, 1, 4)     -> "odd"
isSumEvenOrOdd(0, -1, -5)   -> "even"
isSumEvenOrOdd(0, 0, 0)     -> "even"
isSumEvenOrOdd(7, 1, 9)     -> "odd"
isSumEvenOrOdd(1, 1, 1)     -> "odd"*/
console.log(`/n------------Task2---------------n/`);

const isSumEvenOrOdd = (n1,n2,n3) => {
let sum = n1 + n2+ n3;
  if(sum % 2 === 0) return 'even';
else return 'odd';
}
console.log(isSumEvenOrOdd(0, 1, 4));
console.log(isSumEvenOrOdd(0, -1, -5));
console.log(isSumEvenOrOdd(0, 0, 0));
console.log(isSumEvenOrOdd(7, 1, 9));
console.log(isSumEvenOrOdd(1, 1, 1));
/*
Write a function named decimal2() which takes an array of numbers as an 
argument and returns the array with the same numbers rounded up or down and 
represented with only two decimals.

decimal2( [94.356, 8.9752] )                -> [ 94.36, 8.98 ]
decimal2( [76.62, 128.4, 84] )              -> [ 76.62, 128.4, 84 ]
decimal2( [20987, 3.53245, 12.345, 32.9] )  -> [ 20987, 3.53, 12.35, 32.90 ]
decimal2( [ ] )                             -> [  ]
decimal2( [4.35623, 8.9742] )               -> [ 4.36, 8.97 ]*/
console.log(`/n------------Task3---------------n/`);
const decimal2 = arr => {
return arr.map(num => Math.round(num * 100) / 100)
}
console.log(decimal2( [94.356, 8.9752] ) );
console.log(decimal2( [76.62, 128.4, 84] ));
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ));
console.log(decimal2( [ ] ) );
console.log(decimal2( [4.35623, 8.9742] ) );

/*
Write a function named myPow() which takes two numbers, x and n, as its 
arguments and returns x to the power of n without using Math.pow(). 3 to the 
power of 3 is 3*3*3 = 27. 
NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 
equals the number itself.

myPow(3, 3)  -> 27
myPow(10, 1)  -> 10
myPow(100, 0)  -> 1
myPow(1, 1)  -> 1
myPow(4, 2)    -> 16
myPow(0, 0)    -> 1
myPow(5, 3)    -> 125*/

console.log(`/n------------Task4---------------n/`);
const myPow = (x,n) => {
if(n === 0) return 1;
else if(n === 1) return x;
else {
  let result = x;
  for(let i = 2; i <= n; i++){
    result *= x;
  }
  return result;
}
}
console.log(myPow(3, 3));
console.log(myPow(10, 1));
console.log(myPow(100, 0));
console.log(myPow(1, 1));
console.log(myPow(4, 2));
console.log(myPow(0, 0));
console.log(myPow(5, 3));
/*
Write a function named findLongestWord() which takes a string as input and 
returns the longest word in the string.
NOTE: If the string is empty or consists of spaces only, then return empty string.
NOTE: If the string consists of multiple words having the longest word, then 
return the first occurrence.

findLongestWord("The quick brown fox jumped over the lazy dog")  -> "jumped"
findLongestWord("This is a sample string for testing")  ->"testing" 
findLongestWord("One two ten")  -> "One"
findLongestWord("")  -> ""
findLongestWord("      ")  -> ""*/
console.log(`/n------------Task5---------------n/`);
const findLongestWord = str => {
  if (!str.trim()) {
    return "";
}
let words = str.split(' ');

let longestWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
});

return longestWord;
}


console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("This is a sample string for testing"));
console.log(findLongestWord("One two ten"));
console.log(findLongestWord(""));
console.log(findLongestWord("      "));