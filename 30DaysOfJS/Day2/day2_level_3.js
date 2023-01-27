// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(love.match(/love/gi).length);

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let because = 'You cannot end a sentence with because because because is a conjunction';
console.log(because.match(/because/gi).length);

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const fixed = sentence.replace(/%|@|&|#|;|!|\$/gi, '')
console.log(fixed);
let arr = fixed.split(' ');

function mostElement(array) {
    let dict = {};
    let maxElement = array[0], maxCount = 1;
    for(word in array) {
        let element = array[word];
        if(dict[element] == null) {
            dict[element] = 1;
        }
        else {
            dict[element]++;
        }
        if(dict[element] > maxCount) {
            maxElement = element;
            maxCount = dict[element];
        }
    
    }
    return `${maxElement}. It occurs ${maxCount} times.`;
}

console.log(`\nThe word that is most frequent in this sentence is ${mostElement(arr)}`)

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let moneys = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let salaryMonthly = 5000;
let bonus = 10000;
let monthlyBonus = 15000;
console.log(`\nAnnual income: ${(5000*12) + 10000 + (15000*12)}`)
