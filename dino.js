class Dinosaur {
    constructor (name) {
        this.name = name;
        this.rest = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.happiness = 100;
    }

    sleep() {
        this.hunger -= 20;
        this.thirst -= 20;
        this.rest += 20;
        this.happiness += 10;
    }

    fightForFood() {
        this.rest -= 20;
        this.hunger += 10;
        this.thirst -= 10;
        this.happiness -= 20;
    }

    trainChildren() {
        this.rest -= 10;
        this.hunger -= 5;
        this.thirst -= 5;
        this.happiness += 10;
    }

    drink() {
        this.thirst += 10;
        this.hunger -= 10;
        this.rest += 5;
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


const createDinoButton = document.getElementById("createButton");
const menuStart = document.querySelector("#menuStart");
const petMenu = document.getElementById("petWrapper");
const petStatus = document.getElementById("statusMessage");
const runAway = document.getElementById("runAway");

const eatBtn = document.getElementById("eatBtn");
const drinkBtn = document.getElementById("drinkBtn");
const restBtn = document.getElementById("restBtn");
const trainChildBtn = document.getElementById("trainChildBtn");
const levelUpBtn = document.getElementById("levelUpBtn");

const hungerBar = document.getElementById("hungerBar");
const thirstBar = document.getElementById("thirstBar");
const restBar = document.getElementById("restBar");
const happinessBar = document.getElementById("happinessBar");
const lifeBar = document.getElementById("lifeBar");

function fightForFood() {
    hungerBar.value += 10;
    restBar.value -= 20;
    thirstBar.value -= 10;
    happinessBar.value -=20;
}

function sleep() {
    hungerBar.value -= 20;
    restBar.value += 20;
    thirstBar.value -= 20;
    happinessBar.value += 10;
}

function trainChildren() {
    hungerBar.value -= 5;
    restBar.value -= 10;
    thirstBar.value -= 5;
    happinessBar.value += 10;
}

function drink() {
    hungerBar.value -= 10;
    restBar.value += 5;
    thirstBar.value += 10;
}

// takes to the third layer
function levelUp() {
    menuStart.style.display = "none";
    petMenu.style.display = "none";
    runAway.style.display = "block";
}

// status message: needs fixing
if (happinessBar.value <= 0){
    petStatus.innerHTML = `${this.name} is extremely sad.`
} else if (happinessBar.value <= 20){
    petStatus.innerHTML = `${this.name} is sad.`
} else if (happinessBar.value <= 40){
    petStatus.innerHTML = `${this.name} is feeling unhappy.`
} else if (happinessBar.value <= 60){
    petStatus.innerHTML = `${this.name} is content.`
} else if (happinessBar.value <= 80){
    petStatus.innerHTML = `${this.name} is happy.`
} else (happinessBar.value > 80);{
    petStatus.innerHTML = `${this.name} is extremely happy.`
}

// const progressHealth = document.getElementById("progressHealth").value;

createDinoButton.addEventListener("click", () => {    
        menuStart.style.display = "none";
        petMenu.style.display = "block";
});


function decreasingAllValues() {
  var a = setInterval(function() {
    hungerBar.value = hungerBar.value - 1;
    thirstBar.value = thirstBar.value - 1;
    restBar.value = restBar.value - 1;
    happinessBar.value = happinessBar.value - 1;

    if (hungerBar.value == 100) {
      clearInterval(a);
    }
  }, 350);
}

function levelUpDecreasinglifeValue() {
    var a = setInterval(function() {
        lifeBar.value = lifeBar.value - 1;
  
      if (lifeBar.value == 100) {
        clearInterval(a);
      }
    }, 400);
  }

decreasingAllValues();
levelUpDecreasinglifeValue();

































// // Game settings;
// const maxRest = 100;
// const maxHunger = 100;
// const maxThirst = 100;
// const maxHappiness = 100;


// // Game speed:
// let day = 20;
// const foodHp = document.getElementById("hungerBar");
// const thirstHp = document.getElementById("thirstBar")
// const restHp = document.getElementById("restBar")
// const happinessHp = document.getElementById("happinessBar")
























// let trex = new 

// Not sure if we need this either? I will test and see
// Dinosaur.prototype.actionRest = () => {
//     sleep() / (day * 2)
// };

// Dinosaur.prototype.actionEat = () => {
//     fightForFood() / (day * 2)
// };

// Dinosaur.prototype.actionDrink = () => {
//     drink() / (day * 2)
// };

// Dinosaur.prototype.actionTrainChild = () => {
//     trainChildren() / (day *2)
// };

// let dino = new Dinosaur();
// let restHpCount;
// let hungerHpCount;
// let thirstHpCount;
// let trainChildrenCount;

// restBtn.addEventListener("click", () => {
//     dino.actionRest();
// });

// eatBtn.addEventListener("click", () => {
//     dino.actionEat();
// });

// drinkBtn.addEventListener("click", () => {
//     dino.actionDrink();
// });

// trainChildBtn.addEventListener("click", () => {
//     dino.actionTrainChild();
// });