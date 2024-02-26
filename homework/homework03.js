const { generateRandomNumber } = require('../utils/MathHelper.js');


console.log(`/n-------TASK1-----------\n`);

let ran1 = generateRandomNumber(1, 100);
let ran2 = generateRandomNumber(1, 100);
let ran3 = generateRandomNumber(1, 100);
let ave = ((ran1 + ran2 + ran3) / 3);
console.log(ran1, ran2, ran3);
console.log(ave);
console.log(ave >= 50);
console.log(ave <= 50);



console.log(`/n--------TASK2----------\n`);

let r1 = generateRandomNumber(1, 3);
let r2 = generateRandomNumber(1, 3);
let r3 = generateRandomNumber(1, 3);
console.log(r1, r2, r3);
if (r1 === r2 && r1 === r3 && r2 === r3) {
    console.log("TRIPLE MATCH");
}
else if (r1 != r2 && r1 != r3 && r2 != r3) {
    console.log("NO MATCH")
} else {
    console.log("DOUBLE MATCH")
}





console.log(`/n--------TASK3----------\n`);
function hasA(str) {
    if (str.includes("a") || str.includes("A") )return true;
    else return false;
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));





console.log(`/n--------TASK4----------\n`);



function doubleOrTripleWord(str) {
    if (str.length % 2 === 0) {
        return str.repeat(3);
    }
    else {
        return str.repeat(2);
    }
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));





console.log(`/n--------TASK5----------\n`);


function firstWord(str) {
    return str.split(' ')[0];
       
}
console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord("    "));






console.log(`/n--------TASK6----------\n`);

function lastWord(str){
 return str.slice(str.lastIndexOf(' ') + 1);
}
console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord("   "));






console.log(`/n--------TASK7----------\n`);

function firstLastWord(str){
    return str.substring(0,str.indexOf(' ')) + str.substring(str.lastIndexOf(' ') + 1)
}

console.log(firstLastWord("Hello Word"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord("   "));




console.log(`/n--------TASK8----------\n`);

function startVowel(str){
    if(str.startsWith('a') || str.startsWith('e') || str.startsWith('i') || str.startsWith('o') || str.startsWith('u') || str.startsWith('A') || str.startsWith('E') || str.startsWith('I') || str.startsWith('O') || str.startsWith('U'))
  return true

else {
    return false
}
}
 console.log(startVowel("Hello"));
 console.log(startVowel("Apple"));
 console.log(startVowel("orange"));
 console.log(startVowel(""));
 console.log(startVowel("   "));
 console.log(startVowel("123"));




console.log(`/n--------TASK9----------\n`);


function swap4(str){
    if(str.length < 8) return ('');
   else {
    return str.slice(-4) + str.slice(4,-4) + str.slice(0,4);
   
   }
} 
console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));




console.log(`/n--------TASK10----------\n`);

function swapFirstLastWord(str){
  if(str.trim().indexOf(' ') === -1) return ('')
  else  return str.slice(str.lastIndexOf(' ') + 1) + str.slice(str.indexOf(' '),str.lastIndexOf(' ') + 1) + str.slice(0,str.indexOf(' '))
}
console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("  "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello  "));
