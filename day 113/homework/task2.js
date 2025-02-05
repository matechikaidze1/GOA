class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get ageInMonths() {
      return this.age * 2;
    }
  }
  
  const person = new Person("Mate", 15);
  console.log(person.ageInMonths);
  