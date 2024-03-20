

function funcA(arg1, arg2){
  if(typeof arguments[0] === 'number' && typeof arguments[1] === 'number'){
    console.log('Both arguments are numbers');
  }
  else if(typeof arguments[0] === 'string' && typeof arguments[1] === 'string'){
    console.log('Both arguments are string')
  }
else{
    console.log('These are different types')
}
}

funcA(15, 20);
funcA('abc', 'xzy');
funcA(true, false);
funcA('abc', false);