// function bark(dog: any) {
//     console.log(`${dog.name}(${dog.species}) : BOWWOW!`);
// }

// const daisy: object = {
//     name: 'Daisy',
//     species: 'Bulldog'
// };

// bark(daisy);

class Dogg {
    name: string;
    species: string;
    
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    bark() {
        console.log(`${this.name}(${this.species}) : BOWWOW!`);
    }
}

const myDog = new Dogg('Daisy', 'Bulldog');

myDog.bark();