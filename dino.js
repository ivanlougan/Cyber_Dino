class Dinosaur {
    constructor (name) {
        this.name = name;
        this.rest = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.happiness = 100;
    }


    //    runFromMeteorite -10health, -10 hunger, -10 thirst.
    runFromMeteorite() {
        this.rest -= 10;
        this.hunger -= 10;
        this.thirst -= 10;
        this.happiness -= 15;
    }

    //    Sleep +10health +20 rest
    sleep() {
        this.hunger -= 20;
        this.thirst -= 20;
        this.rest += 20;
        this.happiness += 20;
    }

    //    fightForFood -20 health, -10hunger, -20 rest
    fightForFood() {
        this.rest -= 20;
        this.hunger += 10;
        this.thirst -= 10;
    }



    //    trainChildren: +10 children, +5 health, -5 hunger, -5 thirst, -10 rest.
    trainChildren() {
        this.rest -= 10;
        this.hunger -= 5;
        this.thirst -= 5;
        this.happiness += 15;
    }


    //    Drink: +10 thirst, +5health
    drink() {
        this.thirst += 10;
        this.rest += 5;
        this.happiness += 10;
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