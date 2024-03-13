const {CharacterHelper} = require('../utils/CharacterHelper.js');


/*
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0*/

console.log(`\n--------TASK1----------\n`);
function countPos(arr){
    let count = 0;
    for(const numbers of arr){
        if(numbers > 0) count++;
    }
    return count;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

/*
Requirement:
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0 */

console.log(`\n--------TASK2----------\n`);
 function countA(str){
    let count = 0;
    for(const string of str){
        if(string.toUpperCase().includes('A')) count++;
    }
    return count;
 }
 console.log(countA("TechGlobal is a QA bootcamp"));
 console.log(countA("QA stands for Quality Assurance"));
 console.log(countA("Cypress"));

 /* 
Requirement: 
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0*/

console.log(`\n--------TASK3----------\n`);

function countVowels(word){
    let count = 0;
    for(let i = 0; i < word.length ; i++){
        if(('A,E,O,U,I,a,e,o,u,i').includes(word[i])) count++;
    }
    return count;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/* 
Requirement: 
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0*/

console.log(`\n--------TASK4----------\n`);

function countConsonants(words){
    let count = 0;
    for(let i = 0; i < words.length; i++){
        if(!('A,E,O,U,I,a,e,o,u,i').includes(words[i])) count++;
    }
    return count;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

/*
Requirement:
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") -> 6 
countWords("1 2 3 4") -> 4 */
console.log(`\n--------TASK5----------\n`);

function countWords(str){
let stringArr = str.trim().split(' ');
let count = 0;

for(let i = 0; i < stringArr.length; i++){
 stringArr[i] = stringArr[i].split(' ').join(''); count++
}
return count;
};

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));


/* 
Requirement:
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1*/

console.log(`\n--------TASK6----------\n`);

function factorial(num){
let result = 1

for(let i = 1; i <= num; i++){
    result *= i;
         }
    return result;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/* 
Requirement: 
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true*/

console.log(`\n--------TASK7----------\n`);

const isPalindrome = (str =>  str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

/*
Requirement: 
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) -> 4
countMultipleWords([ ]) -> 0 */
console.log(`\n--------TASK8----------\n`);

function countMultipleWords(arr){
let count = 0;
for(const array of arr){
   if(array.trim().split(' ').length > 1)count++
}
return count;
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([ ]));

/*
Requirement: 
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0 */
console.log(`\n--------TASK9----------\n`);

function count3OrLess(word){
    if(word === '') return ('').length;
    let count = 0;
   const words = word.split(" ");
for(const str of words){
       if(str.length <= 3) {
    count++;
        }
}
    return count;
};
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

/*
Requirement:
Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false */
console.log(`\n--------TASK10----------\n`);
function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));


/*
Requirement:
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0] */
console.log(`\n--------TASK11----------\n`);

function add (arr1, arr2){
    let arr3 = [];
    for(let i = 0; i < Math.max(arr1.length,arr2.length,); i++){
let num1 = arr1[i] || 0;
let num2 = arr2[i] || 0;
arr3.push(num1 + num2);
    }
return arr3;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2] ));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

/*Requirement: 
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello World" 
removeExtraSpaces("     JavaScript is          fun")  -> "JavaScript is fun”
removeExtraSpaces("")  -> "" */


console.log(`\n--------TASK12----------\n`);

function removeExtraSpaces(word){
    let result = "";
    let firstChar = "";
     for(let i = 0; i < word.length ; i++){
        let currentChar = word[i];
        if(firstChar === " " &&  currentChar === " "){
            continue;
        }
        result += currentChar;
        firstChar = currentChar
     }
     return result.trim('');
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

/* 
Requirement: 
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0*/

console.log(`\n--------TASK13----------\n`);

function findClosestTo10 (arr){
    let closestNum = null;
    let minDiff = null;
for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        let diff = Math.abs(num - 10);
       if(num === 10){
            continue;
        }else if (minDiff === null || diff < minDiff || (diff === minDiff && num < closestNum)){
            closestNum = num ;
            minDiff = diff;
        }
}
return closestNum;
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));

/* 
Requirement: 
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true*/
console.log(`\n--------TASK14----------\n`);
function  isEmailValid(email){
 if(email.length === 0 || email.includes(" ")) return false;
    
 let count = email.split("@").length;
  if(count !== 2) return false;
  
  let username = email.split("@")[0];
 if(username.length < 2) return false

let firstPart = email.split("@")[1];
let lastPart = firstPart.indexOf('.');
 if(lastPart < 2 || lastPart === -1) return false;
 else return true;
}

console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("johndoe@.com"))  
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));

/* 
Requirement: 
Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Chicago123$")")  -> true*/

console.log(`\n--------TASK15----------\n`);

function isPasswordValid (email){
    if(email.length < 8 || email.length > 16 || email.includes(" ")) return false;
let hasUpperCase = false;
let hasLowerCase = false;
let hasDigit = false;
let hasSpecialChar = false;
    for(let i = 0; i < email.length; i++){
    const charCode = email.charCodeAt(i);

        if(charCode >= 65 && charCode <= 90) hasUpperCase =  true;
        else if(charCode >= 97 && charCode <= 122) hasLowerCase = true;
        else if((charCode >= 48 && charCode <= 57)) hasDigit = true;
        else if((charCode >= 33 && charCode <= 47) || 
        (charCode >= 58  && charCode <= 64) || 
        (charCode >= 91  && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)) hasSpecialChar = true;
}
return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
};
console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Chicago123$"));


