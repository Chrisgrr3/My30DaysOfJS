const countries = require('./countries').countries;

// 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    // Sort the array and find the min and max age
    
    ages.sort();
    console.log(ages)
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1]
    console.log(minAge, maxAge)

    // Find the median age(one middle item or two middle items divided by two)

    ages.length % 2 == 0
        ? console.log(parseFloat((Math.floor(ages[ages.length/2]) + Math.ceil(ages[ages.length/2])) / 2))
        : console.log(ages[Math.floor(ages.length/2)]);

    // Find the average age(all items divided by number of items)

    const average = parseFloat(eval(ages.join(' + ')) / ages.length)
    console.log(average)

    // Find the range of the ages(max minus min)
    
    const range = maxAge - minAge
    console.log(range)

    // Compare the value of (min - average) and (max - average), use abs() method 

    console.log(parseFloat(Math.abs(minAge - average).toFixed(1)), parseFloat(Math.abs(maxAge - average).toFixed(1)))

// 2.Slice the first ten countries from the countries array



// 3. Find the middle country(ies) in the countries array



// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.