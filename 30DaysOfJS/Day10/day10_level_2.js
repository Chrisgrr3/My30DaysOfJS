const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const A = new Set(a)
const B = new Set(b)
// 1. Find a union b

const c = [...a,...b]
const C = new Set(c)
console.log(C)


// 2. Find a intersection b

const inter = a.filter((num) => B.has(num))
console.log(inter)


// 3. Find a with b

