/*
*Traversind DOM
*/

/*
*Get children nodes
* -childNodes
*- Return 
*/

const childEls  = document.getElementById('parent');
console.log('child nodes', childEls.childNodes);


/*
*Get children elements
* -children
*- Returns HTMLColection of only elements
*/

console.log('child elements', childEls.children);

/*
*Get first node
* -firstChild
* Get last node
*-lastChild
*/

console.log('First child', childEls.firstChild)// #text
console.log('First child', childEls.lastChild)// #text

/*
*Get first element
* -firstElementChild
* Get last element
*-lastElementChild
*/

console.log('First child', childEls.firstElementChild)// <li>USA</li>
console.log('First child', childEls.lastElementChild)// <li>Argentina</li>

/*
*Parent node
* -parentNode
*Returns parent node of a node or element
*/

console.log('Parent node', childEls.parentNode);
const firstElement = childEls.firstElementChild;
console.log('Parent of li', firstElement.parentNode);


/*
*Parent element
* -parentElement
*Returns parent element of a node or element
*/

const bodyEl = document.querySelector('body');
console.log('Parent element of body',bodyEl.parentElement);
console.log('Parent element of html',bodyEl.parentElement.parentElement);


/*
*Siblings
*-Get next and prev sibling element
*-nextElementSibling,prevElement
*/

const firstNode = childEls.firstChild
const firstEl = childEls.firstElementChild;

const lastNode = childEls.lastChild;
const lastEl = childEls.lastElementChild;

console.log(firstNode.nextSibling);
console.log(firstNode.nextSibling.nextSibling);

console.log(firstEl.nextElementSibling);

console.log(lastNode.previousSibling);
console.log(lastEl.previousElementSibling);