class animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    introduce() {
        return "this is ${this.name}, a ${this.species}, and it says ${this.sound}!";
    }
}

class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    introduce() {
        return "this is a ${this.year} ${this.make} ${this.model}";
    }
}

class Human {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    introduce() {
        return "hi, i'm ${this.name}, i am ${this.age} years old and i'm a ${this.profession}.";
    }
}

const animal = new animal("chappy", "dog", "woof");
console.log(animal.introduce());

const car = new car("tesla", "model S", 2022);
console.log(car.introduce());

const human = new human("mate", 15, "developer");
console.log(human.introduce());
