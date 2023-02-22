// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
//     console.log(tenMostFrequentWords(paragraph))
//     [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}]
// console.log(tenMostFrequentWords(paragraph, 10))
// [{word:'love', count:6},
// {word:'you', count:5},
// {word:'can', count:3},
// {word:'what', count:2},
// {word:'teaching', count:2},
// {word:'not', count:2},
// {word:'else', count:2},
// {word:'do', count:2},
// {word:'I', count:2},
// {word:'which', count:1}
// ]

function tenMostFrequentWords(str) {
    const words = str.split(' ')
    const wordSet = new Set(words)
    const wordCounts = [];
    let result = []
    let regEx;
    let matches;
    for(let word of wordSet) {
        regEx = new RegExp(`${word}+`, 'g')
        matches = str.match(regEx)
        wordCounts.push({word: word, count: matches.length})
    }
    wordCounts.sort((a, b) => {
        if(a.count > b.count) return -1;
        if(a.count < b.count) return 1
    })
    for(let i = 0; i < 10; i++) {
        result.push(wordCounts[i])
    }
    console.log(result)
}

tenMostFrequentWords(paragraph)