// 1. Create an empty object called dog

const dog = {

}
console.log(typeof dog)


// 2. Print the dog object on the console

console.log(dog)


// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = 'daisy'
dog.legs = 4
dog.color = 'white'
dog.bark = function() {
    return 'woof woof'
}
console.log(dog)
console.log(dog.bark())


// 4. Get name, legs, color, age and bark value from the dog object



// 5. Set new properties the dog object: breed, getDogInfo