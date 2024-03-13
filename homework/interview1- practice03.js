/*Find if a number is even or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
2   -> true 
5   -> false 
10   -> true */

let random1 = Math.floor(Math.random() * 11);
console.log(random1);
console.log(random1 === 0);

  

/*Find if a number is odd or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true. 
Otherwise, print false. 
 
Examples: 
1   -> true 
2   -> false 
5   -> true 
10   -> false */

let ran1 = Math.floor(Math.random() * 11);
console.log(ran1);
console.log(ran1 % 2 !== 0);


/*Find if a number is positive or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> false 
-1   -> false 
0   -> false 
1   -> true 
5   -> true */

 
/* Calculate the average of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it. 
 
Examples: 
3, 5, 7     -> 5 
7, 3, 2    -> 4 
5, 5, 5     -> 5 
1, 10, 7    -> 6 
10, 1, 1    -> 4 */

let r1 = Math.floor(Math.random() * 11);
let r2 = Math.floor(Math.random() *11);
let r3 = Math.floor(Math.random()* 11);
let average = ((r1 + r2 + r3) / 3);
console.log(r1, r2, r3);
console.log(average);


 
/*Calculate the absolute difference between max and min of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference. 
 
Examples: 
3, 5, 2     -> 3 
7, 3, 1    -> 6 
5, 5, 5     -> 0 
1, 10, 9    -> 9 
10, 1, 2    -> 9 
 */




/* Calculate the square of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 4 
5   -> 25 
10   -> 100*/

let r1 = Math.floor(Math.random() * 11);
console.log (r1);
let square = (r1 ** 2);
console.log(`${square}`);

/*Convert kilograms to pounds. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as a kilogram unit. 
Convert kilogram unit to pounds and print it. 
Please assume that 1 kilogram equals 2.2 pounds. 
 
Examples: 
1   -> 2.2 
20   -> 44 
75   -> 165 
100   -> 220 */

let r1 = Math.floor(Math.random() * 101);
console.log(r1);
console.log(r1 * 2.2); 




/* Find if 2 numbers are equal or not. 
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). 
If the numbers are equal, print true. 
Otherwise, print false. 
 
 
Examples: 
1, 1     -> true 
1, 2    -> false 
2,3     -> false 
2,2     -> true 
3, 3     -> false*/

let r1 = Math.floor(Math.random() * 4);
let r2 = Math.floor(Math.random() * 4);
console.log(r1, r2);
console.log(r1 == r2);


/*Find if an age is allowed to get Driver License or not. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age. 
If the age is more than or equal to 16, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
15   -> false 
16   -> true 
45   -> true 
100   -> true  */


let r1 = Math.floor(Math.random() * 101);
let age = (r1);
console.log(r1);                                    
console.log(`${age}`>= 16);
   

/*  First Character 
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
firstCharacter("Tech")    -> "T" 
firstCharacter("Global")   -> "G"*/
function firstCharacter(company) {
    return `${company[0]}`
}
console.log(firstCharacter("Global"));



/* Double The Word 
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
doubleWord("Tech")    -> "TechTech" 
doubleWord("Global")     -> "GlobalGlobal"*/
function doubleWord(company){
    return company.repeat(2)
}
console.log(doubleWord("Tech"));


/* First Two Characters 
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
 
Examples: 
firstTwoCharacters("Tech")    -> "Te" 
firstTwoCharacters("Global")     -> "Gl" 
firstTwoCharacters("")      -> "" 
firstTwoCharacters(" ")      -> " " 
firstTwoCharacters("1")     -> "1"  */ 

function firstTwoCharacters(company) {
    return company.slice(0, 2)
}

console.log(firstTwoCharacters("Global"));




/* Last Character 
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
lastCharacter("Tech")    -> "h" 
lastCharacter("Global")    -> "ll" 
lastCharacter(" ")    -> " " 
lastCharacter("123")     -> "3" */

function lastCharacter(company) {
    return company.slice(- 1)
}
console.log(lastCharacter("123"));


/*Last Two Characters 
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
lastTwoCharacters("Tech")  -> "ch" 
lastTwoCharacters("Global")   -> "al" 
lastTwoCharacters("")    -> "" 
lastTwoCharacters(" ")    -> " " 
lastTwoCharacters("1")    -> "1" 
 
 
  */

function lastTwoCharacters(company) {
   return `${company.slice(-2)}`
}
console.log(lastTwoCharacters("1"));



/* 
  20 
Area of a square 
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula:Area = x * x 
 
Examples: 
squareArea(5)   -> 25 
squareArea(3)   -> 9 
squareArea(6)   -> 36*/

function squareArea( side){
    return side * 2
}
 console.log(squareArea(10));


 /*Perimeter of a square. 
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula: Perimeter = 4 * x 
 
Examples: 
squarePerimeter(5)   -> 20 
squarePerimeter(3)   -> 12 
squarePerimeter(6)   -> 24 */

function squarePerimeter(side){
    return side * 4
}  
console.log(squarePerimeter(4));

/*Convert kilograms to pounds. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as a kilogram unit. 
Convert kilogram unit to pounds and print it. 
Please assume that 1 kilogram equals 2.2 pounds. 
 
Examples: 
1   -> 2.2 
20   -> 44 
75   -> 165 
100   -> 220  */

let ran = Math.floor(Math.random() * 101);
let unite = 2.2
console.log(ran);
console.log(ran * 2.2);


/*Concat Two String 
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked. 
NOTE: Concatenation should always be as first string + second string .  
 
Examples: 
concat("Tech", "Global")  -> "TechGlobal" 
concat("Hello", "World")  -> "HelloWorld" 
concat("", "abc")    -> "abc" 
concat("123", "1234")    -> "1231234" */
function concat( company ,name ){
    return company.concat() + name.concat()}
    console.log(concat("Tech", "Global"));

    /* Middle 
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23" */


function middle(company){
    return middle[middle.lenght / 2 - 1],middle[middle.lenght / 2]
}
console.log(middle("Global"));


let ra1 = Math.floor(Math.random( ) * 11);
let ra2 = Math.floor(Math.random( ) * 11);
let ra3 = Math.floor(Math.random( ) * 11);
console.log(ra1, ra2, ra3);
console.log(Math.max(ra1, ra2, ra3));



let random2 = Math.floor(Math.random( ) * 11);
let random3 = Math.floor(Math.random( ) * 11);
let sum1 =(random1 + random2);
console.log(random1, random2 );  //4 ,6
console.log(sum1 % 2 === 0)




let r1 = Math.floor(Math.random() * 11);
let r2 = Math.floor(Math.random() * 11);
console.log(r1, r2);
console.log(Math.max(r1, r2));     


let r1 = Math.floor(Math.random() * 5- (-5)+1)+(-5);
console.log(r1);
console.log(r1 <= - 1);





let s1 = "Tech";

console.log('The length is = ' + s1.length);
console.log('The first char is = ' + s1[0]);
console.log('The last char is = ' + s1.at(-1));

s1 = s1.toLowerCase(); 
console.log(s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('u'));




let r1 = Math.floor(Math.random() * 11);
let r2 = Math.floor(Math.random() * 11);
let r3 = Math.floor(Math.random() * 11);
console.log(r1, r2, r3);
let num = Math.max(r1, r2, r3);
le min = Math.min(r1, r2, r3);
console.log (min ,max)
console.log(Math.abs (max - min ));




function shorter(company, name)   {
    return `${company.length},${name.length}`
     }
   console.log(shorter("Tech", "Global"));
   console.log()

let r1 = Math.floor(Math.random( ) * 11); 
let r2 = Math.floor(Math.random( ) * 11);
let r3 = Math.floor(Math.random( ) * 11);
console.log(r1, r2, r3);
console.log((r1 + r2 + r3) / 3);


function hasFive(word) {
    return word.length >= 5
}

console.log(hasFive("Tech"));  


function middle(str){
   
    if(str % 2 === 0);{
        return str.slice(1, 3)
    }
}
   console.log(middle('Tech'));
   console.log(middle('Global'));
   console.log(middle('abcde'));
   console.log(middle('1'));
   console.log(middle('abc'));



   let r1 = Math.ceil(Math.random() * 101);
   console.log(r1);
   
   if(r1 <= 25)  {
    console.log(`1st quarter`);
   }
   else if(r1 <= 50){

  console.log(`2nd quarter`);
   }
else if(r1 <= 75) {
console.log(`3rd quarter`)
}
else {
console.log(`4th quarter`);
}





let r8 = Math.ceil(Math.random() * 101);
console.log(r8);
if(r8 <= 50){
    console.log(`1st half`);
    }
    else{
        console.log(`2nd half`);
    }





    function firstLast(str){
        if(str.length <= 2){
            return str;
        }
        
        else {
            return str.at(0) + str.at(-1)
        }
    }
    console.log(firstLast("Tech"));
    console.log(firstLast("TechGlobal"));
    console.log(firstLast(""));
    console.log(firstLast(" "));
    console.log(firstLast("1"));
    console.log(firstLast("abcde"));

    let r1 = Math.floor(Math.random() * 11);
    let r2 = Math.floor(Math.random()* 11);
    let sum = r1 +r2;
    if(sum % 2 === 0){
    console.log(true);
    }
    else {
    console.log(false);
    }
    console.log(sum);


function shortet(str1, str2) {
    if(str1.length <= str2length)
return 
}




let r1 = Math.floor(Math.random( ) * (50 -1 + 1) +1);
 if(r1 % 7 === 0) {
console.log(true);
}
else {
console.log(false);
}
console.log(r1);





    function concat(str1 , str2) {
       
        return str1 + str2
        }
        console.log(concat("Tech" ,"Global"));
        console.log(concat("Hello" ,"World"));
        console.log(concat("" , "abc"));
        console.log(concat("123" , "1234"));
        

        let r1 =Math.floor(Math.random( ) *100) +1;
        if(r1 <= 25) {
            console.log(`1st quarter`);
        }
        else if(r1 <= 50) {
    console.log(` 2nd quarter `);
        }
        else if(r1 <= 75) {
        console.log( `3rd quarter `);
        }
        else {
            console.log(` 4th quarter `);
        }
         

console.log(r1);

        function startsVowel(word){
            return 'A,E,O,U,I,a,e,o,u,i'.includes(word[0]);
        }
console.log(startsVowel('Tech'));
console.log(startsVowel('Apple'));
console.log(startsVowel('abc'));





let r1 = Math.floor(Math.random( ) * (5-(-5) +1) + (-5));
console.log(r1 <0);


function startsVowel(word){
    return 'A,E,O,U,I,a,e,o,u,i'.includes(word[0]);
    }
    console.log(startsVowel("Tech"));
    console.log(startsVowel("Apple"));
    console.log(startsVowel("abc"));



function firstLast(word){
        if( word < 2)   return word

       else 
       return word[0] + word.at(-1);
}
       console.log(firstLast("Tech"));
       console.log(firstLast("TechGlobal"));
       console.log(firstLast("1"));
       console.log(firstLast(""));




        /*Assume that you are given a String of any even length including empty.
          Find the middle 2 characters for the given String. */

//Even
let name = "Zarina";
console.log(name[name.length / 2 - 1] + name[name.length / 2]);
console.log(name.slice(name.length / 2 - 1 , name.length / 2 + 1));


//Odd
let str = "Alexandr";
console.log(str[Math.floor(str.length / 2 )]);



function middle(word){
    if(word.length === 0) return ('')

   else if (word.length % 2 !== 0) return (word[Math.floor(word.length / 2)]);
    else return (word.slice(word.length / 2 - 1, word.length / 2 + 1));
}
console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));
console.log(middle("")); 



let r1 = Math.floor(Math.random() * 100 + 1);
 r1 <= 50 ? (`1st half is = ${r1}`) : (`2nd half is = ${r1}`);


 function rectanglePerimetru(x, y ){
   return 2 * (x + y);
 }
    console.log(rectanglePerimetru(4,5));
 


    function shorter(str1,str2){
        if(str1.length <= str2.length){
            return str2
        }
        else{
            return str1
        }
    }
 console.log(shorter('Tech', 'Global'));
 console.log(shorter('Hello', 'Hi'));
 console.log(shorter('Hello', 'Word'));




 

function middle(word){
    if(word.length === 0) return ('')

   else if (word.length % 2 !== 0) return (word[Math.floor(word.length / 2)]);
    else return (word.slice(word.length / 2 - 1, word.length / 2 + 1));
}
console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));
console.log(middle("")); 



function longer(str1, str2){
    if(str1.length >= str2.length){
    return  str2;
    }
    else{
    return str1;
    }
    }
    
    console.log(longer("Tech", "Global"));
    console.log(longer("Hello", "Hi"));
    console.log(longer("Hello" ,"World"));

    let r1 = Math.floor(Math.random( ) * 10 + 1);
let r2 = Math.floor(Math.random( ) * 10 +1);
console.log(Math.abs(r1 - r2));
console.log(r1, r2);