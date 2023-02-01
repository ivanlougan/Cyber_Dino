class Dinosaur {
    constructor (name) {
        this.name = name;
        this.rest = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.happiness = 100;
    }

    runFromMeteorite() {
        this.rest -= 10;
        this.hunger -= 10;
        this.thirst -= 10;
        this.happiness -= 15;
    }

    sleep() {
        this.hunger -= 20;
        this.thirst -= 20;
        this.rest += 20;
        this.happiness += 20;
    }

    fightForFood() {
        this.rest -= 20;
        this.hunger += 10;
        this.thirst -= 10;
    }

    trainChildren() {
        this.rest -= 10;
        this.hunger -= 5;
        this.thirst -= 5;
        this.happiness += 15;
    }

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


const createDinoButton = document.getElementById("createButton");
const menuStart = document.querySelector("#menuStart");

createDinoButton.addEventListener("click", () => {    
        menuStart.style.display = "none";
    
});