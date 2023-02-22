// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    get getName() {
        return this.name
    }
    get getAge() {
        return this.age
    }
    get getColor() {
        return this.color
    }
    get getLegs() {
        return this.legs
    }
    set setName(name) {
        this.name = name
    }
    set setAge(age) {
        this.age = age
    }
    set setColor(color) {
        this.color = color
    }
    set setLegs(legs) {
        this.legs = legs
    }
    whatAmI() {
        console.log(`I am a ` + this.constructor.name.toLowerCase() + '.')
    }
}


// 2. Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
    constructor(name, age, color, legs = 4) {
        super(name, age, color, legs)
    }
}

const myDog = new Dog('Daisy', 12, 'White', 4)
myDog.whatAmI()

class Cat extends Animal {
    constructor(name, age, color, legs = 4) {
        super(name, age, color, legs)
    }
}

const aCat = new Cat('Tom', 8, 'Teal', 4)
aCat.whatAmI()

class Bird extends Animal {
    constructor(name, age, color, legs = 2) {
        super(name, age, color, legs)
    }
}

const myBird = new Bird('Lencho', 2, 'Green')
myBird.whatAmI()