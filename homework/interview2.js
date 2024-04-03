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
    string = str.toLowerCase;
  for(const letter of string){
    if(vowel.includes(letter)) return true;
  }
  return false
  }
  
  console.log(hasVowel("")) ;
  console.log(hasVowel("Javascript"));
  console.log(hasVowel("Tech Global"));
  console.log(hasVowel("1234"));

  const hasVowel = (str) => str.split('').filter(c => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(c)).length > 0