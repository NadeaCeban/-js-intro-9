const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: 12345,
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null
};
const phone1 = {}; // empty object
const phone2 = new Object(); // empty object
/*
properties (key-value pair)         keys            values
firstName: 'John'                   firstName       'John'
lastName: 'Doe'                     lastName        'Doe'
spouse: 'Jane Doe',                 spouse          'Jane Doe'
age: 25,                            age             25
favNumber: 7                        favNumber       7
*** Keys cannot be duplicate
*** Values can be duplicate
*** Keys are strings by default but values can be of any data type
*/


const mug = {
    price: 10.99,
    color: 'White',
    capacity: 8,
  };
 console.log(mug);

 // How to get proprerty value -> object.key or object['key']

console.log(mug.price);
console.log(mug.color);
console.log(mug['capacity']);

// How to add a new proprerty

mug.material = 'Glass';
console.log(mug);

console.log(mug.material);

delete mug.capacity;