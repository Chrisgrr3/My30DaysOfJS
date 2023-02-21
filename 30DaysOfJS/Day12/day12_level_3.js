// 1. Write a function which cleans text. Clean the following text.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; && mo@re rewarding th%an educa@ting &and& @emp%o@wering peo@ple. ;I find tea@ching m%o@re interesting tha@n other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(s) {
    s = s.match(/[^%@&#$!;]/gi).join('')
    console.log(s)
}
cleanText(sentence)


// 2. Write a function which find the three most frequent words. 

