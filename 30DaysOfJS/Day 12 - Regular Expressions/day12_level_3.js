// 1. Write a function which cleans text. Clean the following text.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; && mo@re rewarding th%an educa@ting &and& @emp%o@wering peo@ple. ;I find tea@ching m%o@re interesting tha@n other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(s) {
    s = s.match(/[^%@&#$!;]/gi).join('')
    return s
}
sentence = cleanText(sentence)
console.log(sentence)


// 2. Write a function which find the three most frequent words. 

function threeMostFrequent(s) {
    const words = s.match(/\w{1,}/gi)
    const wordSet = new Set(words)
    const result = []
    const topThree = []
    let count;
    let regEx;
    for(let word of wordSet) {
        regEx = new RegExp(`${word}+`, 'g')
        count = s.match(regEx).length
        result.push({word: word, count: count})
    }
    
    result.sort((a, b) => {
        if(a.count > b.count) return -1
        if(a.count < b.count) return 1
    })
    for(let i = 0; i < 3; i++) {
        topThree.push(result[i])
    }
    return topThree
}
console.log(threeMostFrequent(sentence))