const countries = require('./countries').countries;

// 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    // Sort the array and find the min and max age

    ages.sort();
    console.log(ages)
    console.log(ages[0], ages[ages.length - 1])

    // Find the median age(one middle item or two middle items divided by two)

    ages.length % 2 == 0
        ? console.log(parseFloat((Math.floor(ages[ages.length/2]) + Math.ceil(ages[ages.length/2])) / 2))
        : console.log(ages[Math.floor(ages.length/2)]);

    // Find the average age(all items divided by number of items)



    // Find the range of the ages(max minus min)



    // Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array



// 2. Find the middle country(ies) in the countries array



// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.