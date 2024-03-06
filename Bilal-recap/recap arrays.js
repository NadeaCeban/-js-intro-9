
//Task - Print every letter of on a separate line
let name = "Bilal";
for(let i = 0;i < name.length; i++){
console.log(name.at(i));
}

// Task - reverse a string

let str = "hello";
let reversStr = "";

for(let i = str.length - 1; i >= 0; i--){
    console.log(str.at(i));
}

let nameArr = ["B" ,"i","l", "a", "l" ];
name = "Bilal";

console.log(nameArr.join(' | '));
console.log(name.split(''));


let arr = [1, 2, 3, 4, 5]
console.log(`original arr : ${arr}`);
 
arr.push(6);
console.log(`pushed arr : ${arr}`);
 
arr.pop();
console.log(`poped arr :  ${arr}`);

arr.shift();
console.log(`shifted arr : ${arr}`);

arr.unshift();
console.log(`unshifted arr : ${arr}`);
 
arr.splice(2 ,1,  2);
console.log(`spliced arr : ${arr}`); //

