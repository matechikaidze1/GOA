function Person(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    };
}

const john = new Person('mate', 15);
john.int
