const { CharacterHelper } = require('../utils/CharacterHelper.js');

/*Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.

Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")   -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false*/
console.log(`/n--------- Task1---------n/`);

const hasUpperCase = str => {
    let ascii = str.charCodeAt(0);
    if((ascii >= 65 && ascii <= 90)) return true;
    else return false;
}

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));


/*Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .

Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"*/
console.log(`/n--------- Task2---------n/`);

const noDigit = str => {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char < '0' || char > '9') {
            newString += char;
        }
    }
    return newString;
}
console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));



/*Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .

Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("Javascript")  -> ""
noVowel("125$")  -> "125$"*/
console.log(`/n--------- Task3---------n/`);

const noVowel = str => {
    let newStr = "";
    let vowel = ['a', 'o', 'u', 'e', 'i', 'A', 'O', 'U', 'E', 'I'];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!vowel.includes(char)) {
            newStr += char;
        }
    }
    return newStr;
}
console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));



/*Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  

Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []*/

console.log(`/n--------- Task4---------n/`);

function no13(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        num === 13 ? newArray.push(0) : newArray.push(num);
        /*if (num === 13) newArray.push(0);
        else newArray.push(num);*/
    }
    return newArray;
}
console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13, 13]));
console.log(no13([]));



/*Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10*/

console.log(`/n--------- Task5---------n/`);

const middleInt = (num1, num2, num3) => {
if((num1 <= num2 && num2 <= num3)|| (num3 <= num2 && num2 <= num1)) return num2
else if((num2 <= num1 && num1 <= num3 ) || (num3 <= num1 && num1 <= num2)) return num1
else return  num3
}
console.log(middleInt(1, 2, 2) );
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

/*Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  

Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0*/

console.log(`/n--------- Task6---------n/`);

const sumOfDigits = str => {
let sum = 0;
for(const char of str ){
    if(char >= '0' && char <= '9')
    sum += parseInt(char)
}
return sum
}
console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29") );
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));


/*Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.

Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []*/

console.log(`/n--------- Task7---------n/`);

const factorial = num => {
    if (num === 0) return 1;
    else return num * factorial(num - 1)
}
const arrFactorial = arr => {
    return arr.map(num => factorial(num))
}

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));

/*Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]*/

console.log(`/n--------- Task8---------n/`);

const categorizeCharacters = word => {
    let letters = [];
    let digits = [];
    let special = [];
    const charArray = word.toLowerCase().split('');
    charArray.forEach(char =>{
        if(char >= 'a' && char <= 'z') letters.push(char);
        else if(char >= '0' && char <='9') digits.push(char);
        else special.push(char);
    });
    return [letters.join(''), digits.join(''), special.join('')];
}


console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));
