class Dinosaur {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirsty = 100;
    }
    eat() {
        // -10 thirsty?? or/and +5 health
    }
    drink() {
        // +10 thirsty?
    }
}

class Trex extends Dinosaur {
    constructor(name) {
        super(name);

    }
    showName(name) {
        return new Dinosaur(name);
    }
}

let trex = new Trex("Puppy");
console.log(trex);