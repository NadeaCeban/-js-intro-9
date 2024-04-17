//1 getEvens
const getEvens = (n1, n2) =>{
    let evens = [];
    let greatestNumber = Math.max(n1,n2);
    let smallestNumber = Math.min(n1,n2);
    for(let i = smallestNumber; i <= greatestNumber; i++){
      if(i % 2 === 0) evens.push(i);
    }
    return evens;
  }
  
  console.log(getEvens(2, 7));
  console.log(getEvens(17, 5));
  console.log(getEvens(4, 4));



//2 hasVowel ++
  const hasVowel =  str => {
    let vowel = ['a', 'o', 'u', 'e', 'i'];
    str = str.toLowerCase();
  for(const letter of str){
    if(vowel.includes(letter)) return true;
  }
  return false
  }
  
  console.log(hasVowel("")) ;
  console.log(hasVowel("Javascript"));
  console.log(hasVowel("Tech Global"));
  console.log(hasVowel("1234"));

  const hasVowel1 = (str) => str.split('').filter(c => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(c)).length > 0

  
  
 //getMultipleOf5 
const getMultipleOf5 = (n1, n2) => {
    let  numberDivBy5=[];
    for(let i = Math.max(n1,n2);i >= Math.min(n1,n2);i--){
      if(i % 5 === 0) numberDivBy5.push(i);
    }
    return numberDivBy5;
  }
  console.log(getMultipleOf5(3, 17));
  console.log(getMultipleOf5(23, 5));
  console.log(getMultipleOf5(5, 5));
  console.log(getMultipleOf5(2, 4));

 // 4isPolindrome
  const isPolindrome = (str => str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));

console.log(isPolindrome("Hello"));
console.log(isPolindrome("civic"));
console.log(isPolindrome("abba"));
console.log(isPolindrome("ab  a"));


// ++
const swapFirstLastWord = str => {
  str = str.trim();
  if(str <= 2 ) return ''
  let firstWord = str.slice(0,str.indexOf(''));
  let middel =str.slice(str.indexOf(''),str.lastIndexOf('') + 1);
  let lastWord = str.slice(lastIndexOf('') + 1);
return lastWord + middel + firstWord;

}


// replaceFirstLast ++
function replaceFirstLast (str) {
  str = str.trim();
  if(str.length < 2)return "";
  else return str.charAt(str.length -1) + str.slice(1, -1) + str.charAt(0);
  };
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A    "));


// countNeg
const  countNeg = arr => arr.filter(num => num < 0). length;
 console.log(countNeg([-45, 0, 0, 34, 5, 67]));
 console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));
 console.log(countNeg([0, -1, -2, -3]) );


//countVowels ++
 const  countVowels = word=>{
  let vowelsCount = 0;
  vowels = ['A','E','I','O','U','a','e','i','o','u',];
  for(const letters of word){
    if(vowels.includes(letters)) vowelsCount++;
    }
  return vowelsCount;
}
console.log(countVowels("Hello"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));



// getDublicates
const getDuplicates = arr => {
  const contener = [];
  const duplicates = [];
   for(let obj of arr){
     if(contener.includes(obj) &&  !duplicates.includes(obj)) duplicates.push(obj);
     else  contener.push(obj)
   }
  return duplicates;
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));


// countMultipleWords
const countMultipleWords = arr => {
  let count = 0;
    arr.forEach(el => {
      if(el.trim().includes(' ')) count++;
      })
    return count;
  }
  console.log(countMultipleWords([ "foo", "", "	", "foo bar", " 	foo" ]));
  console.log(countMultipleWords([ "foo", "bar", "foobar", " 	foobar   " ]));
  console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
  console.log(countMultipleWords([ ]));

  
  
  
// countA ++
const countA = str =>str.split('').filter(letter => letter.toLowerCase() === 'a').length


//  const countA1 = str => {
//     let count = 0;
//    for(const letter of str){
//      if(letter.toLowerCase() === 'a') count++;
//    }
//    return count;
//  }
 console.log(countA("TechGlobal is a QA bootcamp"));
 console.log(countA("QA stands for Quality Assurance"));
 console.log(countA("Cypress"));


//reversestringWords +++
 const reverseStringWords =  str => { 
  let strArr = str.trim().split(' ');
for(let i = 0; i < strArr.length; i++){
  strArr[i] = strArr[i].split('').reverse().join('');
}
   return strArr.join(' ')   ;                     
}
console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""));
console.log(reverseStringWords("	"));




const middleInt = (n1,n2,n3) => {
  if(n1 >= n2 && n1 <= n3) return n1;
  else if(n2 >= n1 && n2 <= n3) return n2;
  else return n3;
}
console.log(middleInt(1,2,2));
console.log(middleInt(5,5,8));
console.log(middleInt(5,3,5));
console.log(middleInt(1,1,1));
console.log(middleInt(-1,25,10));



const firstDuplicate = arr => {
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length ; j++){
      if(arr[i] === arr[j]) return arr[i];
    }
  }
   return -1;
 }
 console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) );
 console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
 console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
 console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
 console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]) );


// no3and5 +
 const no3and5 = arr => {
  return arr.map(num =>{
    if(num % 3 === 0 && num % 5 === 0) return 101;
    else if(num % 3 === 0) return 100;
    else if(num % 5 === 0) return 99;
    return num;
  });
};
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));



// averageOfEdges +
const averageOfEdges = (n1,n2,n3) => (Math.max(n1,n2,n3) + Math.min(n1,n2,n3)) / 2;
console.log(averageOfEdges(0, 0 , 0))
console.log(averageOfEdges(0, 0 , 6))
console.log(averageOfEdges(-2, -2, 10))
console.log(averageOfEdges(10, 13, 20))

// swap4 +
const swap4 = word => {
  if(word.length < 8) return '';
 let firstWord = word.slice(0,4);
 let middle = word.slice(4, -4);
 let lastWord = word.slice(-4);
 return lastWord + middle + firstWord;
}
console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("Apple"));


// countPos +
const countPos = numbers => {
  let count = 0;
  for(const num of numbers){
  if(num > 0) count++;
  }
    return count;
}
 console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); 

const countPos1 = arr => arr.filter(num => num > 0).length;
console.log(countPos1([-23, -4, 0, 2, 5, 90, 123]))