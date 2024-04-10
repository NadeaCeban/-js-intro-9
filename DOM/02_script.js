//ACCESING DOM ELEMENT
//window.document.methodName
/*
*getElementId()
*/

const heading = document.getElementById('heading');
console.log(heading); //hi element


/*
*getElementsByClassName()
-Return HTMLCollection
*/

const boxes = document.getElementsByClassName('box');
console.log(boxes); //HTMLCollection