// Task
// Your task is to complete this Class, the Person class 
// has been created. You must fill in the Constructor method
//  to accept a name as string and an age as number, complete 
//  the get Info property and getInfo method/Info getter
//   which should return johns age is 34

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get info(){
        `${this.name}s age is ${this.age}`;
    }
}
const person = new Person('john', 34);
console.log(person.info)