const arr = [3, 4, 4, 1]
const n = arr.length

const stack = []
const res = []


for (let i = 0; i < n; i++) {

    let current = arr[i]

    if (stack.length === 0) {
        stack.push(i)
        continue
    }
    let lastIndexInStack = stack[stack.length - 1]

    if (arr[lastIndexInStack] >= current) {
        stack.push(i)
        continue
    }
    console.log(stack)
    while (arr[stack.length - 1] <= current && stack.length > 0) {
        let poppedIndex = stack.pop()
        res[poppedIndex] = current
        console.log(`${arr[stack.length - 1]} < ${current}`)
    }

    stack.push(i)

}

for (let val of stack) {
    res[val] = -1
}
console.log(res)