const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//   1. Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i = 0; i <= 10; i++) {
    // console.log(i)
}

// or

let j = 0
while(j <= 10) {
    // console.log(j)
    j++
}

// or

let k = 0
do {
    // console.log(k)
    k++
} while (k <= 10) 

//   2. Iterate 10 to 0 using for loop, do the same using while and do while loop
  
function tenToZero() {
    for(let i = 10; i >= 0; i--) {
        console.log(i)
    }

    let j = 10;
    while(j >= 0) {
        console.log(j)
        j--
    }

    let k = 10;
    do {
        console.log(k)
        k--
    } while (k >= 0)
}
// tenToZero()

//   3. Iterate 0 to n using for loop
  
function toN (n) {
    for(let i = 0; i <= n; i++) {
        console.log(i)
    }
}
// toN(7);

//   4. Write a loop that makes the following pattern using console.log():
  
    //       #
    //       ##
    //       ###
    //       ####
    //       #####
    //       ######
    //       #######

function pattern() {
    for (let i = 1; i <= 7; i++) {
        console.log('#'.repeat(i))
    }
}
// pattern()

//   5. Use loop to print the following pattern:
  
    //   0 x 0 = 0
    //   1 x 1 = 1
    //   2 x 2 = 4
    //   3 x 3 = 9
    //   4 x 4 = 16
    //   5 x 5 = 25
    //   6 x 6 = 36
    //   7 x 7 = 49
    //   8 x 8 = 64
    //   9 x 9 = 81
    //   10 x 10 = 100

function multPattern() {
    for(let i = 0; i <= 10; i++) {
        console.log(`${i} x ${i} = ${i * i}`)
    }
}
// multPattern()

//   6. Using loop print the following pattern
  
    //    i    i^2   i^3
    //    0    0     0
    //    1    1     1
    //    2    4     8
    //    3    9     27
    //    4    16    64
    //    5    25    125
    //    6    36    216
    //    7    49    343
    //    8    64    512
    //    9    81    729
    //    10   100   1000

function exponentiated () {
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} `, ` ${i**2} `, ` ${i**3} `)
    }
}
// exponentiated()

//   7. Use for loop to iterate from 0 to 100 and print only even numbers

function even100() {
    for (let i = 0; i <= 100; i++) {
        if(i % 2 == 0) {
            console.log(i)
        } else {
            continue
        }
    }
}
// even100()

//   8. Use for loop to iterate from 0 to 100 and print only odd numbers
  
function odd100() {
    for (let i = 0; i <= 100; i++) {
        if(i % 2 == 1) {
            console.log(i)
        }
    }
}
// odd100()

//   9. Use for loop to iterate from 0 to 100 and print only prime numbers

function prime() {
    let primeNumbers = [];

    for (let i = 0; i <= 100; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeNumbers.push(i);
        }
    }
    console.log(primeNumbers)
}
// prime()

//   10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    //   The sum of all numbers from 0 to 100 is 5050.

function hundredSum() {
    let sum = 0;
    for(let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(sum)
}
// hundredSum()

//   11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  
    //   The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let evenSum = 0;
let oddSum = 0;
function sumEvenOdd() {
    for (let i = 0; i <= 100; i++) {
        if(i % 2 == 0) {
            evenSum += i
        } else {
            oddSum += i
        }
    }
    console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)
    return evenSum, oddSum;
}
sumEvenOdd()

//   12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  
//     [2550, 2500]

function evenOddArray () {
    console.log([evenSum, oddSum])
}
evenOddArray()

//   13. Develop a small script which generate array of 5 random numbers
  


//   14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
  


//   15. Develop a small script which generate a six characters random id:
  
    //   5j2khz