const arr = [3, 4, -1, 1]
const array = arr.filter((nums) => {
    return nums > 0
}).sort((a, b) => a - b)

let ans = 1

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + 1 !== array[i + 1]) {
        ans = array[i] + 1
        break
    }
}

ans