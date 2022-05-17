const duck = {
    name: "duck",
    sound: "quack",
};

// const name = duck.name;
// const sound = duck.sound;

const {name, sound} = duck;

console.log("name", name);
console.log("sound", sound);


const animals = ["duck", "cat", "bear"];

// const first = animals[0];
// const second = animals[1];
// const third = animals[2];

const [first, second, third] = animals;

console.log("first", first);
console.log("second", second);
console.log("third", third);