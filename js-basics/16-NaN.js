let var1 = 5;
let var2 = '5';
let var3 = 'five';
let var4 = true;
let var5 = null;
let var6 = undefined;

console.log (isNaN(var1));  //false
console.log (isNaN(var2));  //false
console.log (isNaN(var1 * var2)); //false
console.log (isNaN(var4));  //false
console.log (isNaN(var6));  //false
console.log (isNaN(var7)); //true


console.log(typeof var1); //number
console.log(typeof var2); //string
console.log(typeof var3); //string
console.log(typeof var4); //boolean
console.log(typeof var5); //object
console.log(typeof var6); //undefined



