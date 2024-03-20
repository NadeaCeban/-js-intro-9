/*You are given a JS Array below:
Count how many users are older than 30    -> 2
Count how many users live in Chicago      -> 2
Count how many users live in IL      -> 3
Count how many users’ emails has Gmail domain   -> 2
Find and store all the users name younger than 35     -> [ 'Tech', 'Jane', 
'Alex' ]
Find average of ages of all users     -> 28*/
//Task 1
const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,

        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    } 
]
let older30 = 0
let liveChicago = 0
let liveIL = 0
let gmailCount = 0
let younger35 = []
let ageSum = 0

for (const user of users) {
    if (user.age > 30) older30++
    if (user.address.city.toLowerCase() === 'chicago') liveChicago++
    if (user.address.state === 'IL') liveIL++
    if (user.email.includes('gmail')) gmailCount++
    if (user.age < 35) younger35.push(user.firstName)
    ageSum += user.age
}
let avgAge = ageSum/users.length

console.log(older30, liveChicago, liveIL, gmailCount, younger35, avgAge)

// Task 2
/* TASK-2You are given a JS Array below:
Find the most expensive product    -> MacBook Pro 16-inch
Find the least expensive product    -> AirPods Pro
Find the product with the biggest quantity    -> AirPods Pro
Find the product with the smallest quantity   -> MacBook Pro 16-inch
Find all the product names    -> [ 'iPhone 14 Pro', 'MacBook Pro 16-
inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]*/
const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

let mostExpensive;
let highestPrice = 0;
let leastExpensive;
let lowestPrice = Infinity;
let mostCommon;
let biggestQ = 0;
let leastCommon;
let smallestQ = Infinity;
let productList = [];

for (const product of appleStore) {
    productList.push(product.productName);
    if (product.price > highestPrice) {
        mostExpensive = product.productName 
        highestPrice = product.price
    }
    if (product.price < lowestPrice) {
        leastExpensive = product.productName 
        lowestPrice = product.price
    }
    if (product.quantity > biggestQ) {
        mostCommon = product.productName
        biggestQ = product.quantity
    }
    if (product.quantity < smallestQ) {
        leastCommon = product.productName
        smallestQ = product.quantity
    }
}

console.log(mostExpensive, leastExpensive, mostCommon, leastCommon, productList)

/*You are given a JS Array below:
Calculate the total price of products in the cart     -> 2444
Find the brands of all the products in the cart   -> [ 'Dell', 'Apple', 'Sony' ]
Find all the items in the cart with their quantity  -> [ 'Laptop, 1', 'Smartphone 2', 
'Headphones, 3' ] */

