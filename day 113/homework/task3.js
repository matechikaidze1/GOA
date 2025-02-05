class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get isRetired() {
      return this.age >= 60;
    }
  }
  
  const person1 = new Person("Babua", 70);
  console.log(person1.isRetired);
  
  const person2 = new Person("Mate", 15);
  console.log(person2.isRetired);
