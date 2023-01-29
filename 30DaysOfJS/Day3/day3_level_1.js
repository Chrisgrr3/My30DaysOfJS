// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Chris'
let lastName = 'Guerrero'
let country = 'United States'
let age = 100
let isMarried = false
let year = 2023
console.log(`${typeof firstName}, ${typeof lastName}, ${typeof country}, ${typeof age}, ${typeof isMarried}, ${typeof year}`)

// 2. Check if type of '10' is equal to 10

console.log(typeof '10' == typeof 10);

// 3. Check if parseInt('9.8') is equal to 10

console.log(typeof parseInt('9.8') == typeof 10);

// 4. Boolean value is either true or false.

    // Write three JavaScript statement which provide truthy value.
    console.log(`${typeof 2 == typeof 4}, ${6 == 6}, ${false != true}`)
    // Write three JavaScript statement which provide falsy value.
    console.log(`${typeof true == typeof 'hello'}, ${'hi' == 'bye'}, ${4 < 3}`)

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

    // 4 > 3      true
    console.log(4 > 3)
    // 4 >= 3     true
    console.log(4 >= 3)
    // 4 < 3      false
    console.log(4 < 3)
    // 4 <= 3     false
    console.log(4 <= 3)
    // 4 == 4     true
    console.log(4 == 4)
    // 4 === 4    true
    console.log(4 === 4)
    // 4 != 4     false
    console.log(4 != 4)
    // 4 !== 4    false
    console.log( 4 !== 4)
    // 4 != '4'   true      // Actually false
    console.log(4 != '4')   
    // 4 == '4'   false     // Actually true
    console.log(4 == '4')
    // 4 === '4'  false
    console.log(4 === '4')
    // Find the length of python and jargon and make a falsy comparison statement.
    console.log(`python length: ${'python'.length} | jargon length: ${'jargon'.length} | ${'python' === 'jargon'}`)
// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    // 4 > 3 && 10 < 12  true
    console.log(4 > 3 && 10 < 12)
    // 4 > 3 && 10 > 12  false
    console.log(4 > 3 && 10 > 12)
    // 4 > 3 || 10 < 12  true
    console.log(4 > 3 || 10 < 12)
    // 4 > 3 || 10 > 12  true 
    console.log(4 > 3 || 10 > 12) 
    // !(4 > 3)  false
    console.log(!(4 > 3))
    // !(4 < 3)  true
    console.log(!(4 < 3))
    // !(false)  true
    console.log(!(false))
    // !(4 > 3 && 10 < 12)  false
    console.log(!(4 > 3 && 10 < 12))
    // !(4 > 3 && 10 > 12)  true
    console.log(!(4 > 3 && 10 > 12))
    // !(4 === '4') true
    console.log(!(4 === '4'))
    // There is no 'on' in both dragon and python    false
    console.log(!'dragon'.includes('on') && !'python'.includes('on'))

// 7. Use the Date object to do the following activities
let today = new Date();
    // What is the year today?
    console.log(today.getFullYear())
    // What is the month today as a number?
    console.log(today.getMonth())
    // What is the date today?
    console.log(today.getDate())
    // What is the day today as a number?
    console.log(today.getDay())
    // What is the hours now?
    console.log(today.getHours())
    // What is the minutes now?
    console.log(today.getMinutes())
    // Find out the numbers of seconds elapsed from January 1, 1970 to now.
    console.log(Date.now()/1000)