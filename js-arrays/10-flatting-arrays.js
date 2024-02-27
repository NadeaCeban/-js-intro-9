const students = [
    [
        ['Ameer', 'Ali', 'Hicran'],
        ['Emre', 'Abdullah', 'Tania', 'Mustafa'],
        ['Marta', 'Niko', 'Mykola']
    ],
    [
        ['Jane', 'Alex', 'John'],
        ['Maria', 'Max']
    ]
];

 console.log(students.flat().length); //5
 console.log(students.flat(2).length); //15
 // console.log(students.flat().flat());
 
 const flatArray = students.flat(Infinity);
console.log(flatArray);

console.log(students);