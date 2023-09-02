//  introduction to class and methods in js
//  here is a simple example how to create class and methods
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  Man() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

const hello = new Person("Samishan", 23);
const hello1 = new Person("Joker", 30);

//  Inherite the class person
class Person1 extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  Man1() {
    return `My name is ${this.name} and I am ${this.age} years old. I am a ${this.job}`;
  }
}

const person1 = new Person1("Samishan", 23, "Software Engineer");

console.log(person1.Man1());
