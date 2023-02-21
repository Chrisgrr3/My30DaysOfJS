// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
function totalAnnualIncome() {
    let [monthly, bonus, courses] = str.match(/\d{1,}/g)
    monthly = parseInt(monthly)
    bonus = parseInt(bonus)
    courses = parseInt(courses)
    const annualIncome = 12 * monthly + bonus + 12 * courses
    console.log(annualIncome)
    return annualIncome
}
totalAnnualIncome()


// 2. Write a pattern which identify if a string is a valid JavaScript variable
    // is_valid_variable('first_name') // True
    // is_valid_variable('first-name') // False
    // is_valid_variable('1first_name') // False
    // is_valid_variable('firstname') // True

