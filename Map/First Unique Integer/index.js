const arr = [1, 1, 1, 1, 1]

const map = new Map()
let res = -1

for (let val of arr) {

    if (!map.has(val)) {
        map.set(val, 1)
    } else {
        map.set(val, map.get(val) + 1)
    }

}


for (let val of arr) {
    if (map.get(val) === 1) {
        res = val
        break
    }
}

console.log(res)

return res
