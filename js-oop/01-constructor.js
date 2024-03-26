/*
NOT EFICENT
const student_john = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge(){
        console.log(`${this.fname} is ${this.lname} years old.`);
    }
}

const student_jane = {
    fname: 'Jane',
    lname: 'Doe',
    age: 23,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge(){
        console.log(`${this.fname} is ${this.lname} years old.`);
    }
}

const student_alex = {
    fname: 'Alex',
    lname: 'Smith',
    age: 30,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge(){
        console.log(`${this.fname} is ${this.lname} years old.`);
    }
}

const student_morgan = {
    fname: 'Morgan',
    lname: 'Smith',
    age: 19,
    study() {
        console.log(`${this.fname} ${this.lname} studies.`);
    },
    getAge(){
        console.log(`${this.fname} is ${this.lname} years old.`);
    }
}

*/
//BEFORE ES6
//Create a Student templete from which you can creat many similar student objects - constructor function
function Student(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}
const student_john = new Student('John', 'Doe', 25);
const student_jane = new Student('Jane', 'Doe', 23);
const student_alex= new Student('Alex', 'Smith', 30);
const student_morgan = new Student('Morgan', 'Smith', 19);

Student.prototype.study = function(){
  console.log(`${this.fname} ${this.lname} studies.`);
}

Student.prototype.getAge = function(){
    console.log(`${this.fname} is ${this.lname} years old.`)
}
console.log(student_john);
console.log(student_jane);
console.log(student_alex);
console.log(student_morgan);


student_alex.study();
student_morgan.getAge();

const students = [student_john, student_jane, student_alex, student_morgan];
const fullname = students.map(x => `${x.fname} ${x.lname}`);
console.log(fullname); //[ 'John Doe', 'Jane Doe', 'Alex Smith', 'Morgan Smith' ]