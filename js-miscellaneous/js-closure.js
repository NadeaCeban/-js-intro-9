/*let result = 0;

function score(){
    result += 1;
}
score();
score();
score();

result = 10;

console.log(result); // 3
*/

//Closure can helpe us preventing sme variebles being reasigned

 function score(){
    let result = 0;  // privat to this method and cannot be accessed in the global scope

  return function (){
    result += 1;
    return result;
  }

}

 const increase = score();
increase();
increase();
increase();
increase();

const newScore = increase();
console.log(newScore); // 5

 