// constructor function

function person(firstName, lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

// Instatiate object

const person1= new person('John', 'Doe', '4-3-1980');
const person2= new person('Mary', 'Smith', '3-6-1980');

console.log(person1.firstName, person1.lastName);
console.log(person2.firstName, person2.lastName);
console.log(person1.dob);