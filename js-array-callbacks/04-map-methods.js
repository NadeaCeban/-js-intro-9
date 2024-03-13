const sentences = ['Good morning','I like arrays','It is Sunday'];
// each sentence's first word -> ['Good', 'I', 'It'];

//Solution with loops
const newArray = [];
for(const  sentence of sentences){
   newArray.push(sentence.split(' ')[0]);
   newArray.push(sentence.slice(0,sentence.indexOf(' ')));
}


//2.
// Solution with map() method
const newArr = sentences.map(sent => sent.split(' ')[0]);

console.log(sentences);
console.log(newArr);

//each sentence's last word -> ['morning','arrays', 'Sunday'];

//const lastArr = sentences.map(sent => sent.split(' ').slice(-1));
//const lastArr = sentences.map(sent => sent.split(' ').pop());
const lastArr = sentences.map(sent => sent.split(' ').at(-1));
//const lastArr = sentences.map(sent => sent.slice(sent.lastIndexOf(' ') + 1));

console.log(lastArr);


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals -> [1000.23, 5234.35, 721.98, 3452.50]

const givenSalary = salaries.map(salary => Number(salary.toFixed(2)));
console.log(givenSalary);