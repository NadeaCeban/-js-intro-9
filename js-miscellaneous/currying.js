function double(num){
    return num * 2;
}

function triple(num){
    return num * 3;
}


function multiplyBy4(num){
    return num * 4;
}


function product(num1, num2){
    return num1 * num2;
}

double(5); // 10
product(2, 5) // 10

triple(7); // 21
product(3, 7) //21



function doMath(operator) {
    if(operator === '+') {
        return function (num1, num2) {
            return num1 + num2;
        }
    }
    else if(operator === '*') {
        return function (num1, num2) {
            return num1 * num2;
        }
    }
    else if(operator === '-') {
        return function (num1, num2) {
            return num1 - num2;
        }
    }
    else if(operator === '/') {
        return function (num1, num2) {
            return num1 / num2;
        }
    }
    else if(operator === '**') {
        return function (num1, num2) {
            return num1 ** num2;
        }
    }
}

const power = doMath('**');
const sum = doMath('+');
const divide = doMath('/');

console.log(power(3, 2)); //9
console.log(sum(3, 2)); //5


function a(){
    return function(){
        console.log('This is a inner function');
    }
}
const b = a();
b();







