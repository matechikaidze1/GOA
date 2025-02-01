class Animal {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    render() {
        return `
        <div class="animal-card">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
        </div>`;
    }
}

const lion = new Animal("Lion", "lion is the king of animals and is a mammal");
const eagle = new Animal("Eagle", "eagle is the king of birds and multiplies with eggs");
const penguin = new Animal("Penguin", "penguin counts as a bird that can't fly and also multiplies with eggs");

const animals = [lion, eagle, penguin];

function renderAnimals(animals) {
    const root = document.getElementById("root");

    root.innerHTML = `
        <div class="animals-container">
            ${animals.map(animal => animal.render()).join('')}
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => renderAnimals(animals));
