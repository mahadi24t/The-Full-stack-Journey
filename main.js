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

const todos = [
    {id:1, title:'Buy milk', completed:false},
    {id:2, title:'Walk the dog', completed:true},
    {id:3, title:'doctor appointment', completed:true,}
]

console.log(todos[0].completed,todos[1].completed);