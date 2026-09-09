class Toys {
    constructor(name) {
        if (new.target === Toys) {
            throw new Error("Error!");
        }
        this.name = name;
    }

    speak() {
        throw new Error("Error!");
    }
}

class RobotToy extends Toys {
    speak() {
        console.log(`${this.name} says beep beep book! I am a robot!`);
    }
}

class TeddyBearToy extends Toys {
    speak() {
        console.log(`${this.name} says hug me! I am cuddle!`);
    }
}

class DinosaurToy extends Toys {
    speak() {
        console.log(`${this.name} says ROOR!`);
    }
}

const toys = [
    new RobotToy("Rusty"),
    new TeddyBearToy("Fluffy"),
    new DinosaurToy("Rex")
];

toys.forEach(toy => toy.speak());