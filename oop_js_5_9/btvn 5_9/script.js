class Toys {
    constructor(name){
        this.name = name
    }
    
    speak(){

    }
}

class RobotToy extends Toys {
    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this.name} says beep beep book! I am a robot!`);
    }
}

class TeddyBearToy extends Toys{
    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this.name} says hug me! I am cuddle`);
    }
}

class DinosaurToy extends Toys {
    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this.name} says ROOR!`);
    }

}
const rusty = new RobotToy("Rusty")
const fluffy = new TeddyBearToy("Fluffy")
const rex = new DinosaurToy("Rex")

const toys = [rusty, fluffy, rex]

for (const toy of toys) {
    toy.speak()

}