const { Animal } = require('./day15_level_1')

// 1. Override the method you create in Animal class

class Snake extends Animal{
    constructor(name, age, color, legs = 0) {
        super(name, age, color, legs) 
    }

    whatAmI() {
        console.log(`I'M A SNAAAAKE!`)
    }
}

const mySnake = new Snake('Slytherin', 300, 'Green')
mySnake.whatAmI()