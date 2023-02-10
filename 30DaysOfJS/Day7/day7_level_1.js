// 1. Declare a function fullName and it print out your full name.

function fName(name) {
    console.log(name)
}
fName('Christopher Guerrero')


// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    console.log(firstName, lastName)
}
fullName('Christopher', 'Guerrero')


// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(first, second) {
    return first + second;
}
console.log(addNumbers(1,2))


// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function rectangleArea(length, width) {
    const area = length * width;
    return area;
}
console.log(rectangleArea(2,4))


// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    const perimeter = (2 * length) + (2 * width);
    return perimeter;
}
console.log(perimeterOfRectangle(2,3))


// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism (length, width, height) {
    const volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(2,4,6))


// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    const area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(2))


// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumference(r) {
    const circumference = 2 * Math.PI * r;
    return circumference;
}
console.log(circumference(1))


// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass, volume) {
    const density = parseFloat(mass/volume);
    return density
}
console.log(density(4, 8))


// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(distance, time) {
    const speed = parseFloat(distance/time);
    return speed;
}
console.log(speed(10, 5))


// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity) {
    const weight = mass * gravity;
    return weight
}


// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oC) {
    const oF = parseInt(oC * (9/5) + 32);
    return oF;
}
console.log(convertCelsiusToFahrenheit(0))

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    // The same groups apply to both men and women.
    // Underweight: BMI is less than 18.5
    // Normal weight: BMI is 18.5 to 24.9
    // Overweight: BMI is 25 to 29.9
    // Obese: BMI is 30 or more

function BMI(weight, height) {
    const bmi = parseFloat(weight/(height * height))
    if(bmi < 18.5) {
        console.log('BMI is less than 18.5: Underweight')
        return bmi
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log('BMI is between 18.5 and 24.9: Normal weight')
        return bmi
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log('BMI is between 25 and 29.9: Overweight')
        return bmi
    } else if (bmi >= 30) {
        console.log('BMI is greater than 30: Obese')
        return bmi
    }
}


// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    if(month == 'December' || month == 'January' || month == 'February') {
        return 'Winter'
    } else if (month == 'March' || month == 'April' || month == 'May') {
        return 'Spring'
    } else if (month == 'June' || month == 'July' || month == 'August') {
        return 'Summer'
    } else if (month == 'September' || month == 'October' || month == 'November') {
        return 'Autumn'
    }
}
console.log(checkSeason('October'))


// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    // console.log(findMax(0, 10, 5))
    // 10
    // console.log(findMax(0, -10, -2))
    // 0



