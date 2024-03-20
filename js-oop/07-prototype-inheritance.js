// BEFORE ES6
// Create a template with constructor function
function Person () {
}
Person.prototype.eat = function () {
    console.log('EAT');
}
Person.prototype.sleep = function () {
    console.log('SLEEP');
}



function Programmer () {
}
// Inherit all the Person methods into Programmer
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function () {
    console.log('CODE');
}
const programmer_mustafa = new Programmer();
programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();


//PROTOTYPE SINGER 
//constructor
function Singer (){
}

//Inherinting all the Person Prototype function into Singer prototype
Singer.prototype = Object.create(Person.prototype);

// Creating a new Singer Prototype methods
Singer.prototype.sing = function () {
    console.log('SING');
}

const singer_nadea = new Singer();
singer_nadea.sing();
singer_nadea.eat();
singer_nadea.sleep();