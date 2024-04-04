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



//2 hasVowel
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



const swapFirstLastWord = str => {
  str = str.trim();
  if(str <= 2 ) return ''
  let firstWord = str.slice(0,str.indexOf(''));
  let middel =str.slice(str.indexOf(''),str.lastIndexOf('') + 1);
  let lastWord = str.slice(lastIndexOf('') + 1);
return lastWord + middel + firstWord;

}


// replaceFirstLast
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