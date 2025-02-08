// Constructor function
function person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Add methods to the prototype using regular functions
person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

person.prototype.getAge = function() {
    let today = new Date();
    let birthYear = this.getBirthYear();
    let age = today.getFullYear() - birthYear;
    return age;
}

// Instantiate objects
const person1 = new person('John', 'Doe', '4-3-1980');
const person2 = new person('Mary', 'Smith', '3-6-1980');

console.log(person1.firstName, person1.lastName);
console.log(person2.firstName, person2.lastName);
console.log(person1.dob.getFullYear(), person1.firstName);
console.log(person2.getBirthYear(), person2.getFullName());
console.log('Name: ',person1.getFullName(),'| Age:', person1.getAge());
