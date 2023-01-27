const arr = [1, 2, 1, 3, 4, 3]
const b = 3
const n = 6

const res = []

for (let i = 0; i < n - b + 1; i++) {
    let j = 0
    let temp_val = i
    let counter = 0
    let map = {}
    while (j < b) {
        let val = arr[temp_val]
        if (!map[val]) {
            map[val] = 1
            counter++
        }
        j++
        temp_val++
    }
    res.push(counter)
}
console.log(res)
