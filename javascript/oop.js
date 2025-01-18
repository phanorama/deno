class Animal {
  constructor(name) {
    // Assign "Unknown" if no name is provided
    this.name = name !== undefined ? name : "Unknown";
  }
}

const newAnimal = new Animal("Weird");
console.log(newAnimal); // Outputs: Animal { name: 'Weird' }

class Mammal extends Animal {
  constructor(name, genus, species) {
    super(name);
    if (!genus || !species) {
      throw new Error(
        "No species added. Both genus and species must be provided.",
      );
    }
    this.genus = genus;
    this.species = species;
    this.classification = "Mammalia";
  }

  getSpecies() {
    console.log(`${this.genus} ${this.species}`); // Outputs genus and species
  }
}

const human = new Mammal("Stackie", "Homo", "sapiens");
console.log(human.name); // Outputs: Stackie
human.getSpecies(); // Outputs: Homo sapiens

class Reptile extends Animal {
  #genus; // Private field for genus

  constructor(name, genus, species) {
    super(name);
    if (!genus || !species) {
      throw new Error(
        "No species added. Both genus and species must be provided.",
      );
    }
    this.#genus = genus;
    this.species = species;
    this.classification = "Reptilia";
  }

  getSpecies() {
    console.log(`${this.#genus} ${this.species}`); // Outputs genus and species
  }
}

const crocodile = new Reptile("Angel", "Crocodylus", "novaeguineae");
// console.log(crocodile.#genus); // SyntaxError: Private field '#genus' must be accessed within the class
crocodile.getSpecies(); // Outputs: Crocodylus novaeguineae
