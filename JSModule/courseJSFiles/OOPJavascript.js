// OOP Javascript

// Classes 
// (Syntatic sugar == Making writing easier)

// Sample 01

// OLD structure
var dinner = (foodItem) => {
    this.foodItem = foodItem;
}

dinner.prototype.eatMeal = () => {
    return 'Eating dinner...';
}

// NEW structure
class Breakfast {
    constructor(food) {
        this.food = food;
    }
}

eatFood(){
    return 'Eating food...';
}

// Sample 02
class Robot {
    constructor(type = 'system') {
        this.type = type;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value.toUpperCase();
    }

    makeSoundEffect() {
        console.log('Sound effect working...');
    }
}

let robotA = new Robot();
console.log(robotA.type);

// Sample 03
class Drone extends Robot {
    constructor() {
        super('drone');
    }

    makeDroneSound() {
        super.makeDroneSound();
        console.log('Beep...beep...');
    }
}

let droneA = new Robot();
console.log(droneA.type);