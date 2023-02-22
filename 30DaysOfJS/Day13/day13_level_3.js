// 1. Check the speed difference among the following loops: while, for, for of, forEach

const arr = [1, 2, 3, 4, 5]

console.time('while loop')
let i = 0;
while(i < 5) {
    console.count(`i = ${i}`)
    i++;
}
console.timeEnd('while loop')
console.time('for loop')
for(let j = 0; j < 5; j++) {
    console.count(`j = ${j}`)
}
console.timeEnd('for loop')
console.time('for of loop')
for(let num of arr) {
    console.count(`num = ${num}`)
}
console.timeEnd('for of loop')
console.time('forEach loop')
arr.forEach((n) => {
    console.count(`n = ${n}`)
})
console.timeEnd('forEach loop')