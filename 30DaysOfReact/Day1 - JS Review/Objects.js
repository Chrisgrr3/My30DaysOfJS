// Exercises: Level 1

    // Create an empty object called dog

const dog = new Object()


    // Print the the dog object on the console

console.log(dog)


    // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
    
dog.name = ''
dog.legs = 4
dog.color = ''
dog.age = 0
dog.bark = () => {
    return 'woof woof'
}
// console.log(dog)

    
    // Get name, legs, color, age and bark value from the dog object
    
const myDog = () => {
    console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark())
}
myDog()
    
    
    // Set new properties the dog object: breed, getDogInfo

dog.breed = ''
const getDogInfo = () => {
    console.log(dog.name, dog.legs, dog.age, dog)
    return;
};
    