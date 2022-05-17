abstract class Animal {
    name: string;
    species: string;
    
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    
    abstract bark() : void;
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, `Dog-${species}`);
    }
    bark() {
        console.log(`${this.name}(${this.species}) : BOWWOW!`);
    }
}

const daisy: Dog = new Dog('Daisy', 'Bulldog');
daisy.bark();

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, `Cat-${species}`);
    }
    bark() {
        console.log(`${this.name}(${this.species}) : meow!`);
    }
}

const cheese: Cat = new Cat('Cheese', 'Bengal');
cheese.bark();