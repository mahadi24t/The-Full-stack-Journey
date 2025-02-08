class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getAge(){
        let today = new Date();
        let age = today.getFullYear() - this.dob.getFullYear();
        let m = today.getMonth() - this.dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.dob.getDate()))
            age--;
        return age;
    
    }

}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1980');

console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person1.getAge());