const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['Computer', ' movies', 'sports'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        },
    
}

const {salary=200000, car='chevrolet'}=person;


console.log(person.firstName, person.lastName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address);

console.log(person.address.city);

console.log(salary,car);
console.log(person);

//Todos
/*
const todos = [
    {id:1, title:'Buy milk', completed:false},
    {id:2, title:'Walk the dog', completed:true},
    {id:3, title:'doctor appointment', completed:true,}
];

console.log(todos[0].completed,todos[1].completed);

consttodoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/
/*
for(let i=0;i<=10;i++){
    console.log(i);
}
let i=0;
while(i<=10){
    console.log(`Number ${i}`);
    i++;
}
    */
const x=4;
if (x==10) {
    console.log("x is 10");
}else if(x>10){
    console.log("x is greater than 10");
}else{
    console.log(`x is less than 10 and is actually ${x}`);
}

// Ternary Operators

const y = 5;
const color = y > 10 ? 'red' : 'green';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green');
        break;
    default:
        console.log('color is others');
        break;
}

// Function

function addNums(a,b) {
    return a+b;
    
}
console.log(addNums(5,2));

// Arrow Function
const subNumsArrow = (a,b) => {
    return a-b;
}

console.log(subNumsArrow(5,2));

const multNumsArrow = (a,b) => {
    return a*b;
}

console.log(multNumsArrow(5,2));

// Function Arrow without bracket

const divNumwArrow = (a,b) => a/b;

console.log(divNumwArrow(9,3));

