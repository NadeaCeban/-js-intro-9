const favMovies = ['Harry Potter', 'Goodfather','Lord of the Rings'];

//Destructurinh - not preferred
const fav1 = favMovies[0];
const fav2 = favMovies[1];
const fav3 = favMovies[2];

//Better version
const [fav01, fav02, fav03]= favMovies;

console.log(fav2); // 'Goodfather'
console.log(fav03); //'Lord of the Rings'



const credentials = ['TechGlobal','Test123', 'techglobal@gmail.com'];

const [username1, password2, email3] = credentials;
 console.log(username1);
 console.log(password2);
 console.log(email3);

 const numbers = [ -3, 10, 0, 100, 200 ];

const [ , ten, zero, , two_hundred ] = numbers;

console.log(two_hundred);