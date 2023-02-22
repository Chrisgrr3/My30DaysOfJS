// 1. Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let holmes = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;

console.log(holmes);

// 2. Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let teresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

console.log(teresa);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let ten = '10';
ten = parseInt(ten);

console.log(typeof ten == typeof 10);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(Math.round(parseFloat('9.8')) == 10);

// 5. Check if 'on' is found in both python and jargon

let python = 'python'; let jargon = 'jargon';

console.log(python.includes('on') && jargon.includes('on')); 

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.

let complaining = 'I hope this course is not full of jargon';

console.log(complaining.includes('jargon'));

// 7. Generate a random number between 0 and 100 inclusively.

console.log(Math.floor(Math.random() * 101));

// 8. Generate a random number between 50 and 100 inclusively.

console.log(Math.floor((Math.random() * 50) + 50));

// 9. Generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random() * 256));

// 10. Access the 'JavaScript' string characters using a random number.

let js = 'JavaScript';

console.log(js.charAt(Math.floor(Math.random() * js.length)));

// 11. Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let phrase = 'You cannot end a sentence with because because because is a conjunction';
let because = 'because because because';

console.log(phrase.substr(phrase.indexOf('because'), because.length));